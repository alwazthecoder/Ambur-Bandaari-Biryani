// GSAP Animations for Ambur Bandaari Biryani

document.addEventListener('DOMContentLoaded', () => {
  // Hero Section Animation
  gsap.from('.hero-title', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.3
  });
  gsap.from('.hero-tagline', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.7
  });
  gsap.from('.order-btn', {
    scale: 0.7,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    delay: 1.1
  });

  // Parallax About Section
  gsap.to('.about-bg-parallax', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // Fade-in Menu Items
  gsap.utils.toArray('.menu-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: i * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Branches fade-in
  gsap.utils.toArray('.branch').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Gallery Horizontal Scroll Animation
  gsap.to('.gallery-scroll', {
    xPercent: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.gallery',
      start: 'top 80%',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Gallery images fade-in
  gsap.utils.toArray('.gallery-scroll img').forEach((img, i) => {
    gsap.from(img, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: img,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Contact form fade-in
  gsap.from('.contact-form', {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  });

  // Royal Header Animation
  gsap.from('.royal-header', {
    y: -60,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    delay: 0.1
  });

  // Gold shimmer on logo
  const logo = document.querySelector('.logo-svg');
  if (logo) {
    gsap.to(logo, {
      filter: 'drop-shadow(0 0 24px #d4af37) drop-shadow(0 0 8px #fff7c1)',
      repeat: -1,
      yoyo: true,
      duration: 2.2,
      ease: 'power1.inOut',
      delay: 0.5
    });
  }

  // Animate SVG filigree drawing in on scroll
  gsap.utils.toArray('.section-filigree-top svg, .section-filigree-bottom svg').forEach(svg => {
    const path = svg.querySelector('path');
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svg,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    }
  });

  // Sticky header shadow on scroll
  const header = document.querySelector('.royal-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.style.boxShadow = '0 6px 32px #d4af37cc';
      } else {
        header.style.boxShadow = '0 2px 24px rgba(212,175,55,0.08)';
      }
    });
  }

  // Social icons hover effect (scale up)
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, { scale: 1.18, duration: 0.2, ease: 'power2.out' });
    });
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, { scale: 1, duration: 0.2, ease: 'power2.out' });
    });
  });

  // Order button hover effect (scale up)
  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.12, duration: 0.18, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.18, ease: 'power2.out' });
    });
  });
}); 