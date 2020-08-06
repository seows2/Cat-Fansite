const Masonry = require("masonry-layout");

const CLASS = {
  GRID: ".grid",
  GRID_ITEM: ".grid-item",
  GRID_SIZER: ".grid-sizer",
  GUTTER_SIZER: ".gutter-sizer",
};

const initalizeMasonry = () => {
  const elem = document.querySelector(CLASS.GRID);
  new Masonry(elem, {
    itemSelector: CLASS.GRID_ITEM,
    columnWidth: CLASS.GRID_SIZER,
    gutter: CLASS.GUTTER_SIZER,
  });
};

initalizeMasonry();
