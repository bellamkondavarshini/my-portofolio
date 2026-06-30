document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

const revealTargets = document.querySelectorAll(
  '.section-eyebrow, .section-title, .skill-node, .project-card, .edu-row, .achv-card, .contact-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => revealObserver.observe(el));

const skillNodes = document.querySelectorAll('.skill-node');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

skillNodes.forEach(node => skillObserver.observe(node));

(function synapseField() {
  const canvas = document.getElementById('synapse-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, nodes, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }

  function initNodes() {
    const count = Math.min(70, Math.floor((width * height) / 18000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    const maxDist = Math.min(width, height) * 0.16;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          ctx.strokeStyle = `rgba(0, 210, 255, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(157, 0, 255, 0.7)';
      ctx.fill();
    });

    if (!prefersReducedMotion) requestAnimationFrame(step);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  step();
})();

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const emailHint = document.getElementById('email-hint');
const status = document.getElementById('form-status');

const workDomainPattern = /@(microsoft|amazon|google|meta|apple)\.com$/i;
const freeDomainPattern = /@(gmail|yahoo|outlook|hotmail)\.com$/i;

emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim();
  if (!value) { emailHint.textContent = ''; emailHint.classList.remove('warn'); return; }
  if (workDomainPattern.test(value)) {
    emailHint.textContent = 'Recognized as a corporate domain.';
    emailHint.classList.remove('warn');
  } else if (freeDomainPattern.test(value)) {
    emailHint.textContent = 'Personal email — that\'s fine too.';
    emailHint.classList.remove('warn');
  } else {
    emailHint.textContent = '';
    emailHint.classList.remove('warn');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please fill out all fields with a valid email.';
    status.classList.remove('success');
    return;
  }

  status.textContent = 'Thanks! This demo form isn\u2019t connected to a backend yet — see README to wire it up.';
  status.classList.add('success');
  form.reset();
  emailHint.textContent = '';
});
