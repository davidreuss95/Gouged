// Nav scroll shadow
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
if (ham && menu) {
  ham.addEventListener('click', () => menu.classList.toggle('open'));
}

// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
