const SECTION = {
  MAIN: 0,
  ABOUT: 1,
};

const overlayCoverImages = [
  "images/ha",
  "images/mak",
  "images/suo",
  "images/tung",
  "images/zizon",
];

const overlayElement = document.getElementById("overlay-js");

let activateOverlay = () => {
  let menu = document.getElementById("header__menu-js");
  menu.addEventListener("click", () => (overlayElement.style.height = "100%"));
  let closeBtn = document.getElementById("overlay__closeBtn-js");
  closeBtn.addEventListener("click", () => (overlayElement.style.height = "0"));
};

activateOverlay();
