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

const activateOverlay = () => {
  const menu = document.getElementById("header__menu-js");
  const closeBtn = document.getElementById("overlay__closeBtn-js");
  menu.addEventListener("click", () => overlayElement.classList.add("open"));
  closeBtn.addEventListener("click", () =>
    overlayElement.classList.remove("open")
  );
};

activateOverlay();
