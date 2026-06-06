document.addEventListener('DOMContentLoaded', () => {

    // 1. Marquee duplication for infinite scrolling
    const marqueeContent = document.getElementById('marquee-content');
    if (marqueeContent) {
        const clones = marqueeContent.innerHTML;
        marqueeContent.innerHTML += clones;
    }

    // 2. Navbar Mobile Toggle
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

    // 3. Navbar scrolled state
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // 4. Scroll Animations (Intersection Observer)
    const animElements = document.querySelectorAll('.scroll-anim');
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animElements.forEach(el => scrollObserver.observe(el));

    // 5. Accordion FAQ
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // 6. Preserve ad attribution when a visitor clicks through to WhatsApp.
    const attributionKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'fbclid',
        'campaign_id',
        'adset_id',
        'ad_id'
    ];
    const pageParams = new URLSearchParams(window.location.search);

    document.querySelectorAll('a[href^="/whatsapp/"]').forEach(link => {
        const url = new URL(link.getAttribute('href'), window.location.origin);

        attributionKeys.forEach(key => {
            const value = pageParams.get(key);
            if (value && !url.searchParams.has(key)) {
                url.searchParams.set(key, value);
            }
        });
        if (!url.searchParams.has('source_url')) {
            url.searchParams.set('source_url', window.location.href);
        }

        link.href = `${url.pathname}${url.search}`;
    });

    // 7. Meta Pixel: track qualified WhatsApp intent as a lead/contact signal.
    document.querySelectorAll('a[href^="/whatsapp/"], a[href*="wa.me/5585992300926"]').forEach(link => {
        link.addEventListener('click', () => {
            if (typeof fbq !== 'function') return;

            fbq('track', 'Contact', {
                content_name: 'whatsapp_click',
                content_category: 'lead'
            });
            fbq('trackCustom', 'WhatsAppClick', {
                link_text: link.textContent.trim() || 'whatsapp',
                page_path: window.location.pathname
            });
        });
    });

});

// 8. Video Modal Logic (Global Scope)
window.openVideoModal = function (vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');

    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeVideoModal = function () {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');

    modal.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => { container.innerHTML = ''; }, 300);
};

document.getElementById('video-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) window.closeVideoModal();
});
