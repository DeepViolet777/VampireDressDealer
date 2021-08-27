const swiperHeader = new Swiper('.header-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }

});

const swiperFeatured = new Swiper('.featured-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 /* autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    speed: 500,
  }*/

});


const swiperPrev = document.getElementById('swiperPrev');
const swiperNext = document.getElementById('swiperNext');

swiperPrev.addEventListener('click', () => {
  swiperFeatured.slidePrev();
});

swiperNext.addEventListener('click', () => {
  swiperFeatured.slideNext();
});