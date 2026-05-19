const screenData = [
  { title: 'Dashboard', desc: 'Quick access to all features — emotions, study, activities, schedule, and more — with memories and star tracking.' },
  { title: 'Study', desc: 'Numbers & logic, language & stories, and science modules for accessible, structured academic learning.' },
  { title: 'Activities', desc: 'Mind & body, sports, and creative activities — from yoga and calm corner to painting and colouring.' },
  { title: 'Schedule', desc: 'A visual daily planner with time-blocked tasks, routines, calendar view, and a festivals calendar.' },
  { title: 'Parents', desc: 'Profile management, autism support videos, My People face identification, progress hub, and behaviour journal.' },
  { title: 'My Stories', desc: "Create personalised social stories with your child's name and places to help them navigate new situations with confidence." },
  { title: 'Settings', desc: 'Display, language, voice & audio, profile switching, and help — all in one clean settings panel.' }
];

// Screen modal
document.querySelectorAll('.screen-frame').forEach(frame => {
  frame.addEventListener('click', () => {
    const i = +frame.dataset.screen;
    document.getElementById('modalImg').src = frame.querySelector('img').src;
    document.getElementById('modalImg').alt = screenData[i].title;
    document.getElementById('modalTitle').textContent = screenData[i].title;
    document.getElementById('modalDesc').textContent = screenData[i].desc;
    document.getElementById('modalOverlay').classList.add('open');
  });
});

document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('open');
});
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay'))
    document.getElementById('modalOverlay').classList.remove('open');
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // Close all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    // Open clicked if it was closed
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Floating hero phones
document.querySelectorAll('.phone').forEach((phone, i) => {
  const amp = 6 + i * 2;
  const spd = 3000 + i * 500;
  const start = Date.now() + i * 400;
  function float() {
    const t = (Date.now() - start) / spd;
    phone.style.transform = `translateY(${Math.sin(t * Math.PI * 2) * amp}px)`;
    requestAnimationFrame(float);
  }
  float();
});
