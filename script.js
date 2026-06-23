const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

/* Close menu when a nav link is tapped */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

/* Close menu when clicking outside the nav */
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
