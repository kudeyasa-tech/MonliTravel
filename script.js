// ============================================================
// MonliTravel — interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Sticky header state ---------- */
    const header = document.querySelector('.site-header');
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile navigation ---------- */
    const navToggle = document.getElementById('navToggle');
    const body = document.body;
    navToggle.addEventListener('click', () => {
        const open = body.classList.toggle('menu-open');
        navToggle.setAttribute('aria-expanded', String(open));
    });
    // Close menu when a nav link is clicked
    document.querySelectorAll('.main-nav a').forEach((link) => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    /* ---------- Destination filtering ---------- */
    const filterButtons = document.querySelectorAll('#destFilters .chip');
    const cards = document.querySelectorAll('.dest-card');
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const filter = btn.dataset.filter;
            cards.forEach((card) => {
                const show = filter === 'all' || card.dataset.region === filter;
                card.classList.toggle('is-hidden', !show);
            });
        });
    });

    /* ---------- Scroll-reveal animation ---------- */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        reveals.forEach((el) => observer.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('is-visible'));
    }

    /* ---------- Contact form (client-side demo) ---------- */
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name;
        const email = form.email;
        let valid = true;

        [name, email].forEach((input) => input.parentElement.classList.remove('has-error'));
        status.textContent = '';
        status.className = 'form-status';

        if (!name.value.trim()) {
            name.parentElement.classList.add('has-error');
            valid = false;
        }
        if (!emailPattern.test(email.value.trim())) {
            email.parentElement.classList.add('has-error');
            valid = false;
        }
        if (!valid) {
            status.textContent = 'Please add your name and a valid email so we can reply.';
            status.classList.add('error');
            return;
        }

        // Demo only: replace with a fetch() to your backend or form service in production.
        status.textContent = `Thank you, ${name.value.trim().split(' ')[0]}! Your request has been received — a travel specialist will reply within 24 hours.`;
        status.classList.add('success');
        form.reset();
    });
});
