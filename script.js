document.addEventListener('DOMContentLoaded', () => {

    // 1. Spline 3D Fallback & Optimization
    // Removido o bloqueio forçado do Mobile para que o Spline carregue normalmente em todos os dispositivos
    // O Spline Viewer é muito otimizado atualmente, o fallback só existirá se falhar em carregar após 8 segundos
    const fallbackTimeout = setTimeout(() => {
        const viewer = document.querySelector('spline-viewer');
        if (!viewer || !viewer.shadowRoot) {
            const fallback = document.getElementById('spline-fallback');
            if (fallback) fallback.style.display = 'block';
        }
    }, 8000);

    // 2. Marquee duplication for infinite scrolling
    const marqueeContent = document.getElementById('marquee-content');
    if (marqueeContent) {
        const clones = marqueeContent.innerHTML;
        marqueeContent.innerHTML += clones;
    }

    // 3. Navbar Mobile Toggle & Sticky behavior
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. Scroll Animations (Intersection Observer)
    const animElements = document.querySelectorAll('.scroll-anim');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(el => scrollObserver.observe(el));

    // 6. Accordion FAQ
    const accHeaders = document.querySelectorAll('.accordion-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});

// 7. Video Modal Logic (Global Scope)
window.openVideoModal = function (vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');

    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function () {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');

    modal.classList.remove('active');
    document.body.style.overflow = '';

    // Break iframe to stop audio
    setTimeout(() => {
        container.innerHTML = '';
    }, 300);
};

// Close modal when clicking outside content
document.getElementById('video-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        window.closeVideoModal();
    }
});
