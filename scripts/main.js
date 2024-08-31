import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css/bundle";

import "./components/mainheader";
import "./components/homebanner";
import "./components/homeclients";
import "./components/homeproducts";

gsap.registerPlugin(ScrollTrigger);

(() => {
  const revealEl = document.querySelectorAll(".fade-up");
  gsap.utils.toArray(revealEl).forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=50",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });
  });
})();
