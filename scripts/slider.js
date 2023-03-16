const videoInit = (selector) => {

  const videos = document.querySelectorAll(selector);
  if (videos.length > 0) {
    videos.forEach(video => {
      videoGenerate(video);
    })
  }
}

const videoGenerate = (video) => {
  const btn = video.querySelector('.video-block__button');
  const videoId = btn.dataset.videoId; 
  const container = video.querySelector('.preview');
  
  btn.addEventListener('mousedown', (event) => {
    event.stopPropagation()
    const iframe = iframeGenerate(videoId); 

    container.innerHTML = '';
    container.appendChild(iframe);
  })
}

const iframeGenerate = (videoId) => {
  const iframe = document.createElement('iframe');
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`

  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('video-block__content');

  return iframe;
}

videoInit('.video-block');

const swiper = new Swiper(".mySwiper", {
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
    touchStartPreventDefault: false
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


