var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.add('header__nav--close');
navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__nav--close')) {
    navMain.classList.remove('header__nav--close');
    navMain.classList.add('header__nav--open');
  } else {
    navMain.classList.add('header__nav--close');
    navMain.classList.remove('header__nav--open');
  }
});
