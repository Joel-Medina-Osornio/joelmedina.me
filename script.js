// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
burger?.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Stagger reveal children inside grids
document.querySelectorAll('.now-grid, .skills-grid, .portfolio-grid, .reco-grid, .contact-grid, .edu-grid').forEach(grid => {
  [...grid.children].forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
});

// Counter animation
const animateCount = (el) => {
  const target = +el.dataset.target;
  const duration = 1400;
  const start = performance.now();
  const step = (t) => {
    const p = Math.min((t - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      counterIO.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => counterIO.observe(el));

// Cursor-follow glow on cards
document.querySelectorAll('.card, .proj-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Active nav highlight
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const setActive = () => {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 120;
    if (window.scrollY >= top) current = s.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive, { passive: true });
setActive();

// Subtle parallax on blobs
const blobs = document.querySelectorAll('.blob');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  blobs.forEach((b, i) => {
    const f = (i + 1) * 0.5;
    b.style.transform = `translate(${x * f}px, ${y * f}px)`;
  });
}, { passive: true });
