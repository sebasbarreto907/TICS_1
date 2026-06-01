import { welcomeMessage } from './data.js';

const path = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

const heroButton = document.querySelector('#begin-adventure');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    window.location.href = 'games.html';
  });
}

const infoPanel = document.querySelector('#welcome-info');
if (infoPanel) {
  infoPanel.textContent = welcomeMessage;
}
