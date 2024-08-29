(() => {
  console.log("homeproducts scripts loaded");

  const categoryItem = document.querySelectorAll(
    ".home-products__categories .category-item"
  );
  categoryItem.forEach((item) => {
    item.addEventListener("click", () => {
      const tabId = item.dataset.tab;
      categoryItem.forEach((category) => {
        category.classList.toggle("tab-active", category.dataset.tab === tabId);
      });
      document
        .querySelectorAll(".home-products__list .product-card")
        .forEach((category) => {
          category.classList.toggle(
            "hidden",
            category.dataset.category !== tabId
          );
        });
    });
  });
})();
