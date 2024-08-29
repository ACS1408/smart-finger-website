import Swiper from "swiper/bundle";

(() => {
  console.log("homeclients scripts loaded");

  const clientsSlider = new Swiper(".home-clients__slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
  });
  const clientsSliderReverse = new Swiper(".home-clients__sliderReverse", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
  });
})();
