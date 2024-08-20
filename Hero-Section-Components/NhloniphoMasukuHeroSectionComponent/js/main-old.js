// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Responsiveness
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      // Add mobile menu styles
      document.querySelector('nav').classList.add('mobile-menu');
    } else {
      // Remove mobile menu styles
      document.querySelector('nav').classList.remove('mobile-menu');
    }
  });
  
  // Animation on Scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, { threshold: 0.5 });
  
  document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
  });
  
  // Mobile Menu Toggle
  document.querySelector('.nav-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
      document.querySelector('nav').classList.toggle('mobile-menu-open');
    }
  });
  
  // Add animations to elements
  document.querySelectorAll('.animate').forEach((element) => {
    element.addEventListener('animationend', () => {
      element.classList.remove('animate');
    });
  });