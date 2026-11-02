const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute(
    'aria-label',
    open ? 'Close navigation' : 'Open navigation'
  );
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Automatically update the copyright year
document.getElementById('year').textContent =
  new Date().getFullYear();

// Registration form
const form = document.getElementById('registrationForm');
const status = document.getElementById('formStatus');
const dob = form.elements.dateOfBirth;

// Prevent future dates of birth
const today = new Date().toISOString().slice(0, 10);
dob.max = today;

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  status.textContent =
    'The form is ready, but online submissions are not active yet. Your details have NOT been sent or saved. Please contact the academy directly until a secure registration service is connected.';

  status.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
});
