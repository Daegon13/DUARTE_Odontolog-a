const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const WHATSAPP_NUMBER = '';
const WHATSAPP_MESSAGE = 'Hola, quisiera coordinar una consulta';

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

toggle?.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  document.documentElement.style.setProperty('--nav-top', `${header.getBoundingClientRect().bottom}px`);
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

const syncMenuPosition = () => {
  if (nav?.classList.contains('open')) document.documentElement.style.setProperty('--nav-top', `${header.getBoundingClientRect().bottom}px`);
};
window.addEventListener('scroll', syncMenuPosition, { passive: true });
window.addEventListener('resize', syncMenuPosition);

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

document.addEventListener('click', event => {
  if (!nav?.classList.contains('open') || nav.contains(event.target) || toggle?.contains(event.target)) return;
  toggle?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
});

const toast = document.querySelector('.toast');
let toastTimer;
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return;
  }
  link.addEventListener('click', event => {
    event.preventDefault();
    clearTimeout(toastTimer);
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('show'));
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { toast.hidden = true; }, 200);
    }, 4200);
  });
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
