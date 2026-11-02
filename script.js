const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('registrationForm');
const status = document.getElementById('formStatus');
const dob = form.elements.dateOfBirth;

dob.max = new Date().toISOString().slice(0, 10);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  status.textContent =
    'Online registration is not active yet. Your details have NOT been sent or saved. Please contact the academy directly.';

  status.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
