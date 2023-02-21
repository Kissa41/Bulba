const slides = document.querySelectorAll('.preview');
const frames = document.querySelectorAll('iframe');

slides.forEach((el, index) => {
  el.addEventListener('click', e => {
    el.style.display = 'none';
    frames[index].setAttribute('src', frames[index].getAttribute('src') + '?autoplay=1')
  })
});

var swiper = new Swiper(".mySwiper", {
    speed: 50,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    cssMode: true,
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

var textSwiper = new Swiper(".textSwiper", {
  slidesPerView: 1,
  speed: 50,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});

swiper.controller.control = textSwiper;
textSwiper.controller.control = swiper;

