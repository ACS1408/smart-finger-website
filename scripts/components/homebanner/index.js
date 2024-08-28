import Swiper from "swiper/bundle";
import "swiper/css/bundle";

(() => {
  console.log("homebanner scripts loaded");

  const swiper = new Swiper(".home-banner__carousel", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
})();
