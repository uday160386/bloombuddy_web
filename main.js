/* ============================================
   BloomBuddy – Main JavaScript
   ============================================ */

'use strict';

/* ── SCROLL FADE-UP ANIMATIONS ── */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 60);
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el));

/* ── FAQ ACCORDION ── */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');

  // Close all open items
  document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));

  // Open clicked item if it was closed
  if (!isOpen) {
    item.classList.add('open');
  }
}

// Expose to inline onclick handlers
window.toggleFaq = toggleFaq;

/* ── MOBILE NAVIGATION ── */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const cta   = document.querySelector('.nav-cta');

  if (!links) return;

  const isOpen = links.style.display === 'flex';

  if (isOpen) {
    links.style.cssText = '';
    cta.style.cssText   = '';
  } else {
    links.style.cssText = [
      'display:flex',
      'flex-direction:column',
      'position:fixed',
      'top:60px',
      'left:0',
      'right:0',
      'background:#fff',
      'padding:1.4rem 5vw',
      'gap:1.1rem',
      'box-shadow:0 8px 28px rgba(0,0,0,0.1)',
      'z-index:99',
    ].join(';');

    cta.style.cssText = [
      'display:block',
      'width:calc(100% - 10vw)',
      'margin:0 5vw',
      'text-align:center',
      'padding:0.65rem',
    ].join(';');
  }
}

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    const cta   = document.querySelector('.nav-cta');
    if (links) links.style.cssText = '';
    if (cta)   cta.style.cssText   = '';
  });
});

// Expose to inline onclick handler
window.toggleMenu = toggleMenu;
