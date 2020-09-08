const initializeScrollEffect = function () {
  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.className = entry.target.className.replace(
          "hidden",
          "fadeIn"
        );
      } else {
        entry.target.className = entry.target.className.replace(
          "fadeIn",
          "hidden"
        );
      }
    });
  });
  const fadeInElemes = document.querySelectorAll(".hidden");
  fadeInElemes.forEach((fadeInElem) =>
    intersectionObserver.observe(fadeInElem)
  );
};

const initializeFullpageEffect = function () {
  new fullpage("#fullpage-js", {
    licenseKey: process.env.licenseKey,
    autoScrolling: true,
    responsiveWidth: 768,
  });
  fullpage_api.setAllowScrolling(true);
};

window.onload = () => {
  if (document.querySelector(".about")) {
    initializeScrollEffect();
    initializeFullpageEffect();
  }
};
