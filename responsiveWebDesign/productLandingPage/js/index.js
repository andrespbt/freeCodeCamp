window.onload = function () {
  window.onscroll = function () {
    stickyFunction();
  };
  const navBar = document.querySelector("#nav-bar");
  const header = document.querySelector("#header");
  const hamburger = document.querySelector(".hamburger");
  const ulNavContainer = document.querySelector(".nav-list--container");
  const sticky = header.offsetHeight;

  function stickyFunction() {
    if (window.scrollY >= sticky) {
      header.classList.add("sticky");
      navBar.classList.add("navSticky");
      hamburger.classList.add("hamburger--sticky");
      document.body.classList.add("content");
    } else {
      header.classList.remove("sticky");
      navBar.classList.remove("navSticky");
      hamburger.classList.remove("hamburger--sticky");
      document.body.classList.remove("content");
    }
  }

  hamburger.addEventListener("click", () => {
    ulNavContainer.classList.toggle("nav-list--container--mobile");
    ulNavContainer.classList.toggle("nav-list--container");
  });
};
