import Swiper from "swiper/bundle";

(() => {
  console.log("homebanner scripts loaded");

  const swiper = new Swiper(".home-banner__carousel", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})();
