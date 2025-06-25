document.addEventListener('DOMContentLoaded', () => {
  const hambiButton = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('.navigation-mobile');
  const closeButton = document.querySelector('.close-button');

  if (hambiButton && navMenu) {
    hambiButton.addEventListener('click', () => {
      navMenu.classList.add('shown');
      navMenu.classList.remove('hidden');
    });
  }

  if (closeButton && navMenu) {
    closeButton.addEventListener('click', () => {
      navMenu.classList.remove('shown');
      navMenu.classList.add('hidden');
    });
  }
});