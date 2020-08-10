const initializePage = () => {
  const groupInside = document.getElementById("group__inside-js");
  const groupMembers = document.querySelectorAll(".group__member");
  const singles = document.querySelectorAll(".single");
  const backBtn = document.getElementById("backBtn-js");
  const header = document.getElementById("header-js");
  const HIDE_CLASS = "hide";
  const SHOW_CLASS = "show";

  const showBackBtn = () => {
    backBtn.classList.remove(HIDE_CLASS);
    backBtn.classList.add(SHOW_CLASS);
  };
  const hideBackBtn = () => {
    backBtn.classList.remove(SHOW_CLASS);
    backBtn.classList.add(HIDE_CLASS);
  };

  const showExpandMembers = (index) => {
    singles[index].classList.remove(HIDE_CLASS);
    singles[index].classList.add(SHOW_CLASS);
  };
  const hideExpandMembers = () => {
    document.querySelector(".show").classList.add(HIDE_CLASS);
    document.querySelector(".show").classList.remove(SHOW_CLASS);
  };

  const hideHeader = () => {
    header.classList.remove(SHOW_CLASS);
    header.classList.add(HIDE_CLASS);
  };
  const showHeader = function showHeader() {
    header.classList.remove(HIDE_CLASS);
    header.classList.add(SHOW_CLASS);
  };

  groupMembers.forEach((member, index) => {
    member.addEventListener("mouseenter", () => {
      groupMembers.forEach((member2, index2) => {
        if (index2 !== index) {
          member2.classList.remove("group__member--active");
        } else {
          member2.classList.add("group__member--active");
        }
      });
    });
    member.addEventListener("click", () => {
      member.classList.add("group__member--expand");
      showExpandMembers(index);
      showBackBtn();
      hideHeader();
    });
  });
  groupInside.addEventListener("mouseleave", () => {
    groupMembers.forEach((member) =>
      member.classList.add("group__member--active")
    );
  });

  backBtn.addEventListener("click", () => {
    hideBackBtn();
    hideExpandMembers();
    document
      .querySelector(".group__member--expand")
      .classList.remove("group__member--expand");
    showHeader();
  });
};
if (document.querySelector(".about")) {
  initializePage();
}
