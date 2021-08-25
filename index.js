

  const swiperHeader = new Swiper('.header-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
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
    spaceBetween: 45,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });