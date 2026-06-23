// Nav hide on scroll down, show on scroll up
const nav = document.querySelector('nav');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.opacity = y > lastY && y > 80 ? '0' : '1';
  nav.style.transition = 'opacity 0.3s';
  lastY = y;
}, { passive: true });
