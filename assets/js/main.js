// (() => {
//   // Footer year
//   const yearEl = document.getElementById('year');
//   if (yearEl) yearEl.textContent = new Date().getFullYear();

//   // Contact form (demo only – logs to console and shows a message)
//   const form = document.getElementById('contactForm');
//   const status = document.getElementById('formStatus');
//   if (form) {
//     form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const data = Object.fromEntries(new FormData(form).entries());
//       console.log('Contact submission:', data);
//       if (status) {
//         status.textContent = 'Thanks! We will reach out within 1 business day.';
//         setTimeout(() => status.textContent = '', 6000);
//       }
//       form.reset();
//     });
//   }
// })();

(() => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form (demo only: logs + inline status message)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Contact submission:', data);

      if (status) {
        status.textContent = 'Thanks! We’ll be in touch shortly.';
      }

      form.reset();

      if (status) {
        setTimeout(() => {
          status.textContent = '';
        }, 6000);
      }
    });
  }
})();
