import gsap from "gsap";
import Swiper from "swiper/bundle";

(() => {
  const swiper = new Swiper(".home-banner__carousel", {
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  gsap.set([".carousel-title", ".carousel-description"], {
    autoAlpha: 0,
    y: 50,
    force3d: true,
  });

  const animateCarousel = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".carousel-title",
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        force3d: true,
      }
    );
    tl.fromTo(
      ".carousel-description",
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        force3d: true,
      },
      "<+=0.2"
    );
  };

  swiper.on("slideChangeTransitionStart", () => {
    gsap.set([".carousel-title", ".carousel-description"], {
      autoAlpha: 0,
      y: 50,
      force3d: true,
    });
  });
  swiper.on("slideChangeTransitionEnd", () => {
    animateCarousel();
  });
  animateCarousel();
})();
