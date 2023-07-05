const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mainSlider = document.querySelector('.main-slider__swiper-list');

//МЕНЮ

const mobileMenu = () => {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};

mobileMenu();

//СЛАЙДЕР

if(mainSlider.classList.contains('main-slider__swiper-list--nojs')) {
  mainSlider.classList.remove('main-slider__swiper-list--nojs');
}

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
