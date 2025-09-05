// Mobile menu toggle functionality
    document.querySelector('.menu-btn').addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

// Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.value-item, .product-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

// Add some interactive hover effects
document.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('product-card')) {
    e.target.style.transform = 'translateY(-10px) scale(1.02)';
  }
});

document.addEventListener('mouseout', function(e) {
  if (e.target.classList.contains('product-card')) {
    e.target.style.transform = 'translateY(0) scale(1)';
  }
});
