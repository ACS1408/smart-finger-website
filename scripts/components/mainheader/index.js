(() => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  hamburgerMenu.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
})();
