(() => {
  // Theme toggle (persists in localStorage)
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const key = 'rrs-theme';
  function applyTheme(theme) {
    if (theme === 'light') root.classList.add('light');
    else root.classList.remove('light');
  }
  const saved = localStorage.getItem(key);
  if (saved) applyTheme(saved);
  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.classList.contains('light') ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(key, next);
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (demo only – logs to console and shows a message)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Contact submission:', data);
      if (status) {
        status.textContent = 'Thanks! We will reach out within 1 business day.';
        setTimeout(() => status.textContent = '', 6000);
      }
      form.reset();
    });
  }
})();