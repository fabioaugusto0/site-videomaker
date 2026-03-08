document.addEventListener('DOMContentLoaded', () => {

  // 1. Spline 3D Fallback & Optimization
  const fallbackTimeout = setTimeout(() => {
    const viewer = document.querySelector('spline-viewer');
    if (!viewer || !viewer.shadowRoot) {
      const fallback = document.getElementById('spline-fallback');
      if (fallback) fallback.style.display = 'block';
    }
  }, 8000);

  // Skip Spline entirely on low-end mobile to save battery + performance
  if (window.innerWidth < 768 || navigator.hardwareConcurrency <= 2) {
    const splineContainer = document.getElementById('spline-container');
    const fallback = document.getElementById('spline-fallback');
    if (splineContainer && fallback) {
      const viewer = splineContainer.querySelector('spline-viewer');
      if (viewer) viewer.style.display = 'none';
      fallback.style.display = 'block';
      clearTimeout(fallbackTimeout);
    }
  }

  // 2. Marquee duplication for infinite scrolling
  const marqueeContent = document.getElementById('marquee-content');
  if (marqueeContent) {
    // Clone elements exactly once more for smoother infinite loops if needed
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
    
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});
    
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});
  }

  // 4. Accordion Logic (FAQ)
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      // Toggle current item
      const isActive = item.classList.contains('active');

      // Close all others
      accordionItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-body').style.maxHeight = null;
      
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});

      if (!isActive) {
        item.classList.add('active');
        const body = item.querySelector('.accordion-body');
        body.style.maxHeight = body.scrollHeight + "px";
      }
    
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});
  
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});

  // 5. Intersection Observer para Micro-animações (Fade-in Up)
  const animElements = document.querySelectorAll('.scroll-anim, .anim-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-up');
        // Force reflow
        void entry.target.offsetWidth;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});
  }, observerOptions);

  animElements.forEach(el => {
    if (el.classList.contains('scroll-anim')) {
      // Add animation classes to children instead of entire section if specified
      el.classList.add('anim-up');
    }
    observer.observe(el);
  
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});

  // Hero trigger manually
  setTimeout(() => {
    document.querySelectorAll('.hero-content .anim-up, .hero-footer.anim-up').forEach(el => {
      el.classList.add('visible');
    
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});
  }, 100);

  
// 6. Video Modal Logic
window.openVideoModal = function(vimeoId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('modal-video-container');
    
    // Inject iframe with audio and controls
    container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
};

window.closeVideoModal = function() {
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

});
