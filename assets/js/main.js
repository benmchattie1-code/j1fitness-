// Nav solid on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

// Mobile hamburger
const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (ham) {
  ham.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-item, .p-card, .pillar, .j-step, .fnf-col, .about-photo-col, .about-text-col').forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 4 === 1) el.classList.add('reveal-delay-1');
  if (i % 4 === 2) el.classList.add('reveal-delay-2');
  if (i % 4 === 3) el.classList.add('reveal-delay-3');
  observer.observe(el);
});
