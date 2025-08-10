// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation & submission feedback
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', e => {
  e.preventDefault();

  const message = form.message.value.trim();

  if (!message) {
    form.message.classList.add('is-invalid');
    feedback.textContent = '';
    form.message.focus();
    return;
  } else {
    form.message.classList.remove('is-invalid');
  }

  // (Here you would normally send form data to a backend)
  feedback.textContent = 'Thank you for reaching out. We will get back to you confidentially.';
  feedback.className = 'alert alert-success';
  form.reset();
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Light Mode';
  } else {
    darkModeToggle.textContent = 'Dark Mode';
  }
});

// Optional: Highlight nav links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100; // offset for better accuracy

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
