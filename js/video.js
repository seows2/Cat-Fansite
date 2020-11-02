const moveToSelected = (element) => {
  let selected;
  if (element === "next") {
    selected = document.querySelector(".selected").nextElementSibling;
  } else if (element === "prev") {
    selected = document.querySelector(".selected").previousElementSibling;
  } else {
    selected = element;
  }

  let next = selected ? selected.nextElementSibling : null;
  let prev = selected ? selected.previousElementSibling : null;

  if (selected) {
    selected.classList = "";
    selected.classList.add("carousel__contents");
    selected.classList.add("selected");
  }
  if (prev) {
    prev.classList = "";
    prev.classList.add("carousel__contents");
    prev.classList.add("prev");
  }
  if (next) {
    next.classList = "";
    next.classList.add("carousel__contents");
    next.classList.add("next");
  }
  while (next && next.nextElementSibling) {
    next.nextElementSibling.classList = "";
    next.nextElementSibling.classList.add("carousel__contents");
    next.nextElementSibling.classList.add("hide");
    next = next.nextElementSibling;
  }
  while (prev && prev.previousElementSibling) {
    prev.previousElementSibling.classList = "";
    prev.previousElementSibling.classList.add("carousel__contents");
    prev.previousElementSibling.classList.add("hide");
    prev = prev.previousElementSibling;
  }
};

const initKeyEvent = () => {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        moveToSelected("prev");
        break;
      case "ArrowRight":
        moveToSelected("next");
        break;
      default:
    }
    e.preventDefault();
  });
};

const initClickEvent = () => {
  document.querySelectorAll(".carousel__contents").forEach((content) => {
    content.addEventListener("click", () => moveToSelected(content));
  });
};

const initVideo = () => {
  document.querySelectorAll(".video__player").forEach((videoElem) => {
    videoElem.addEventListener("mouseenter", () => {
      const src = videoElem.getAttribute("src");
      if (!src.includes("autoplay")) {
        videoElem.setAttribute("src", `${src}&autoplay=1`);
      } else {
        //iframe 통신
        videoElem.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
    });
    videoElem.addEventListener("mouseleave", () => {
      videoElem.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
      window.focus();
    });
  });
};

const initHeader = () => {
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
}

if (document.querySelector(".video_html")) {
  
  window.onload = () => {
    initKeyEvent();
    initClickEvent();
    initVideo();
    initHeader();
  };
  /* 
  document.querySelector(".prev").addEventListener("click", () => {
    moveToSelected("prev");
  });
  document.querySelector(".next").addEventListener("click", () => {
    moveToSelected("next");
  }); */
}
