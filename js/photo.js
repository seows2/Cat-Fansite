const Masonry = require("masonry-layout");

const CLASS = {
  GRID: ".grid",
  GRID_ITEM: ".grid-item",
  GRID_SIZER: ".grid-sizer",
  GUTTER_SIZER: ".gutter-sizer",
};

const initalizeMasonry = () => {
  const grid = document.querySelector(CLASS.GRID);
  new Masonry(grid, {
    itemSelector: CLASS.GRID_ITEM,
    columnWidth: CLASS.GRID_SIZER,
    gutter: CLASS.GUTTER_SIZER,
  });
};
const initObserver = (io) => {
  const placeholders = document.querySelectorAll(".placeholderz");
  placeholders.forEach((placeholder) => io.observe(placeholder));
};

const initScrollAction = () => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("placeholder--scale");
        }
      });
    },
    { rootMargin: "0px 0px 200px 0px" }
  );
  initObserver(io);
};

/* const initHeader = () => {
  const header = document.getElementById("header-js");
  const handler = () => {
    if(matchMedia("(max-width: 768px)").matches){
      header.classList.replace("header__float", "header__fixed")
    }else {
      header.classList.replace("header__fixed", "header__float")
    }
  }
  window.addEventListener("resize", handler)
  handler()
} */

if (document.querySelector(".photo_html")) {
  window.onload = () =>{
    initalizeMasonry();
    initScrollAction();
  };
}
