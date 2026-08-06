const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

document.getElementById('year').textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.dataset.theme = savedTheme;
else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';

function updateThemeButton() {
  const dark = root.dataset.theme === 'dark';
  themeButton.textContent = dark ? '☀' : '☾';
  themeButton.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
}
updateThemeButton();

themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateThemeButton();
});

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.education-item').forEach((button) => {
  button.addEventListener('click', () => {
    const selected = document.getElementById(button.dataset.target);
    const alreadyOpen = button.classList.contains('active');

    document.querySelectorAll('.education-item').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.detail-card').forEach((card) => {
      card.hidden = true;
      card.classList.remove('active');
    });

    if (!alreadyOpen) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      selected.hidden = false;
      selected.classList.add('active');
    }
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65%' });
sections.forEach((section) => observer.observe(section));
