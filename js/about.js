const main = document.querySelector("main");
const header = document.querySelector("header");

const fadeInForScroll = () => {
  let elements;
  let windowHeight;
  const init = () => {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  };
  const addEventHandlers = () => {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  };
  const showElement = (target) =>
    (target.className = target.className.replace("hidden", "fade-in"));
  const hideElement = (target) =>
    (target.className = target.className.replace("fade-in", "hidden"));

  const checkPosition = () => {
    for (let i = 0; i < elements.length; i++) {
      const positionInfo = elements[i].getBoundingClientRect();
      const positionFromTop = positionInfo.top;
      const elementHeight = positionInfo.height;

      if (positionFromTop - windowHeight <= 0) {
        showElement(elements[i]);
      } else if (
        positionFromTop - windowHeight > 1 ||
        positionFromTop + elementHeight < 0
      ) {
        hideElement(elements[i]);
      }
    }
  };
  return { init };
};

const initializeMenu = () => {
  main.style.paddingTop = header.offsetHeight + "px";
};

window.onload = () => {
  if (main && header) {
    fadeInForScroll().init();
    initializeMenu();
  }
};

window.onresize = () => {
  if (main && header) {
    initializeMenu();
  }
};
