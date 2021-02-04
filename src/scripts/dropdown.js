'use strict';

(() => {
  const langBtnRef = document.querySelector('[data-lang]');
  const dropDown = document.querySelector('.dropdown');

  langBtnRef.addEventListener('click', () => {
    dropDown.classList.toggle('dropdown--active');
  });

  langBtnRef.addEventListener('focus', () => {
    dropDown.classList.toggle('dropdown--active');
  });

  langBtnRef.addEventListener('blur', () => {
    dropDown.classList.toggle('dropdown--active');
  });
})();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const mobileDropRef = document.querySelector('[data-lang]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded
//             = menuBtnRef.getAttribute('aria-expanded') === 'true' || 'false';

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//     mobileDropRef.classList.toggle('is-open');
//   });
// })();
