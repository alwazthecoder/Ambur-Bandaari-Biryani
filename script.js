/**
 * Ambur Bandaari Biryani - Main JavaScript
 * Professional and premium functionality for the website
 */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
});

/**
 * Navigation and UI Management
 */
class NavigationManager {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-links a');
    this.sections = document.querySelectorAll('section[id]');
    this.hamburger = document.getElementById('hamburger-btn');
    this.navLinksContainer = document.querySelector('.nav-links');
    
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupActiveNavLink();
    this.setupMobileMenu();
    this.setupScrollEffects();
  }

  /**
   * Setup smooth scrolling for navigation links
   */
  setupSmoothScrolling() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Update active navigation link based on scroll position
   */
  setupActiveNavLink() {
    const updateActiveNavLink = () => {
      const scrollPos = window.scrollY + 100; // Offset for fixed header
      
      this.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          // Remove active class from all links
          this.navLinks.forEach(link => link.classList.remove('active'));
          
          // Add active class to current section's link
          const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Set initial active state
    updateActiveNavLink();
  }

  /**
   * Setup mobile menu functionality
   */
  setupMobileMenu() {
    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => {
        this.navLinksContainer.classList.toggle('show');
        this.hamburger.classList.toggle('active');
      });
    }

    // Close mobile menu when clicking on a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.navLinksContainer.classList.remove('show');
        this.hamburger.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.hamburger.contains(e.target) && !this.navLinksContainer.contains(e.target)) {
        this.navLinksContainer.classList.remove('show');
        this.hamburger.classList.remove('active');
      }
    });
  }

  /**
   * Setup scroll effects and animations
   */
  setupScrollEffects() {
    // Header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

/**
 * Product Management
 */
class ProductManager {
  constructor() {
    this.productsContainer = document.querySelector('.products');
    this.init();
  }

  init() {
    this.setupProductAnimations();
    this.setupProductHoverEffects();
  }

  /**
   * Setup product card animations
   */
  setupProductAnimations() {
    const productCards = document.querySelectorAll('.product-card');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    productCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.6s ease';
      observer.observe(card);
    });
  }

  /**
   * Setup product hover effects
   */
  setupProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
      });
    });
  }
}

/**
 * Contact Form Management
 */
class ContactFormManager {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }

  init() {
    if (this.form) {
      this.setupFormValidation();
      this.setupFormSubmission();
    }
  }

  /**
   * Setup form validation
   */
  setupFormValidation() {
    const inputs = this.form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          this.validateField(input);
        }
      });
    });
  }

  /**
   * Validate individual form field
   */
  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Remove existing error classes
    field.classList.remove('error');
    
    // Validation rules
    if (fieldName === 'email' && value && !this.isValidEmail(value)) {
      field.classList.add('error');
    } else if (fieldName === 'phone_number' && value && !this.isValidPhone(value)) {
      field.classList.add('error');
    } else if (field.required && !value) {
      field.classList.add('error');
    }
  }

  /**
   * Email validation
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Phone validation
   */
  isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  /**
   * Setup form submission
   */
  setupFormSubmission() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (this.validateForm()) {
        this.submitForm();
      }
    });
  }

  /**
   * Validate entire form
   */
  validateForm() {
    const inputs = this.form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      this.validateField(input);
      if (input.classList.contains('error')) {
        isValid = false;
      }
    });
    
    return isValid;
  }

  /**
   * Submit form data
   */
  submitForm() {
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.backgroundColor = '#4CAF50';
      
      // Reset form
      this.form.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    }, 2000);
  }
}

/**
 * Performance and Utility Functions
 */
class PerformanceManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupLazyLoading();
    this.setupScrollOptimization();
  }

  /**
   * Setup lazy loading for images
   */
  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Optimize scroll performance
   */
  setupScrollOptimization() {
    let ticking = false;
    
    const updateScroll = () => {
      // Scroll-based animations and effects
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
  }
}

/**
 * Initialize all managers when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all managers
  new NavigationManager();
  new ProductManager();
  new ContactFormManager();
  new PerformanceManager();
  
  console.log('🚀 Ambur Bandaari Biryani - Website initialized successfully!');
}); 