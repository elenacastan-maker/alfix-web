// AL-FIX — Scripts

// Banner de cookies
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');

if (cookieBanner) {
  if (localStorage.getItem('alfix_cookies')) {
    cookieBanner.classList.add('hidden');
  }
  const hideBanner = () => {
    cookieBanner.classList.add('hidden');
    localStorage.setItem('alfix_cookies', 'accepted');
  };
  cookieAccept?.addEventListener('click', hideBanner);
  cookieReject?.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
    localStorage.setItem('alfix_cookies', 'rejected');
  });
}


// Menú mobile
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Cerrar menú al hacer click en un enlace
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Formulario de presupuesto
const form = document.getElementById('presupuestoForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const btn = form.querySelector('.form-submit');
  btn.textContent = '¡Mensaje enviado! Te contactamos pronto.';
  btn.style.background = '#27ae60';
  btn.disabled = true;

  // Construir mailto como fallback
  const asunto = encodeURIComponent(`Presupuesto AL-FIX – ${form.servicio.value}`);
  const cuerpo = encodeURIComponent(
    `Nombre: ${nombre}\nTeléfono: ${form.telefono.value}\nServicio: ${form.servicio.value}\nMensaje: ${form.mensaje.value}`
  );
  window.location.href = `mailto:alfixreparaciones@gmail.com?subject=${asunto}&body=${cuerpo}`;
});

// Scroll suave para el indicador de hero (si existe)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
