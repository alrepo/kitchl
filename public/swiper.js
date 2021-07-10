const swiper = new Swiper('.swiper-container', {
     // Default parameters
    slidesPerView: 1,
    spaceBetween: 2,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 3,
        spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
        slidesPerView: 5,
        spaceBetween: 10,
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 6,
            spaceBetween: 10,
            }
    },
    scrollbar: {
    el: '.swiper-scrollbar',
  },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumBounce: false,
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });

/////////////////////////dfbvfdbvdbvdfbdfb dfbdfbefgbefrbefbgfd //////////////////////////
