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

if (document.querySelector(".video_html")) {
  document.addEventListener("keydown", (e) => {
    console.log(e.key);
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
  document.querySelector(".prev").addEventListener("click", () => {
    moveToSelected("prev");
  });
  document.querySelector(".next").addEventListener("click", () => {
    moveToSelected("next");
  });
}
