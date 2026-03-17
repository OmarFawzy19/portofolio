// Mobile navigation toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

document.addEventListener('click', (event) => {
  const clickOutsideMenu = !navLinks.contains(event.target) && !menuToggle.contains(event.target);
  if (clickOutsideMenu) {
    navLinks.classList.remove('open');
  }
});

// Highlight active nav item based on visible section
const sections = document.querySelectorAll('main section[id]');

const updateActiveLink = () => {
  let current = 'home';

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 50, 280)}ms`;
  observer.observe(el);
});

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();
