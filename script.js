function openBooking(e) {
    e.preventDefault();
    document.getElementById('bookingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBooking() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {

    var modal = document.getElementById('bookingModal');
    modal.querySelector('.booking-modal-overlay').addEventListener('click', closeBooking);
    modal.querySelector('.booking-modal-close').addEventListener('click', closeBooking);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeBooking();
    });

    // Navbar scroll effect
    var navbar = document.getElementById('navbar');
    var mobileCta = document.getElementById('mobileCta');
    var heroHeight = window.innerHeight * 0.5;

    function handleScroll() {
        var scrollY = window.scrollY;
        if (scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (scrollY > heroHeight) {
            mobileCta.classList.add('visible');
        } else {
            mobileCta.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Scroll-triggered fade-in animations
    var fadeElements = document.querySelectorAll(
        '.service-card, .trust-badge, .testimonial-card, .step-card, ' +
        '.why-card, .section-header, .video-text, .video-wrapper, ' +
        '.location-info, .location-map, .offer-content, .services-more'
    );

    fadeElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function (el) {
        observer.observe(el);
    });

    // Smooth stagger for grid items
    var grids = document.querySelectorAll('.services-grid, .testimonials-grid, .why-grid, .trust-grid, .steps-grid');
    grids.forEach(function (grid) {
        var items = grid.children;
        Array.from(items).forEach(function (item, i) {
            if (item.classList.contains('fade-in')) {
                item.style.transitionDelay = (i * 0.1) + 's';
            }
        });
    });

});
