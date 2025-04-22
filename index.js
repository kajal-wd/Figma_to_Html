const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,        // Show 5 slides at once
    spaceBetween: 20,        // Optional: space between slides in px
    autoplay: {
      delay: 2000,           // 2 seconds between slides
      disableOnInteraction: false, // keeps autoplay working after interaction
    },
    speed: 1000,             // Slide transition speed in ms
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  