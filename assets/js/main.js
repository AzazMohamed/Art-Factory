// Sticky Navbar on Scroll
let navbar = document.querySelector(".navbar");

// About Animation
let aboutSec = document.querySelector(".about");
let aboutSecLeft = document.querySelector(".about img.left");
let aboutSecRight = document.querySelector(".about img.right");

window.onscroll = () => {
  // Let Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > windowHeight - 300) {
    navbar.style.backgroundColor = "white";
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    navbar.style.borderBottom = "1px solid #929292";
    navbar.style.position = "fixed";
    navbar.querySelector(".dropdown").classList.add("scrolled");
  } else {
    navbar.style.backgroundColor = "inherit";
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("navbar-light");
    navbar.style.borderBottom = "none";
    navbar.style.position = "relative";
    navbar.querySelector(".dropdown").classList.remove("scrolled");
  }

  //   About Animation
  scrollAppear(aboutSec, aboutSecLeft);
  scrollAppear(aboutSecRight, aboutSecRight);
};

function scrollAppear(section, ...el) {
  // Section Offset Top
  let sectionOffsetTop = section.offsetTop;

  //   Section Outer Height
  let sectionOuterHeight = section.offsetHeight;

  // Let Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > sectionOffsetTop - windowHeight + 200) {
    el.forEach((oneEl) => {
      oneEl.style.animation = "scrollAppear 0.3s linear forwards";
    });
  }
}

// Initialize Swiper Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //   slidesPerGroup: 1,
  slidesPerView: 1,
  //   slidesPerColumn: 3,
  //   fill: "column",
  spaceBetween: 16,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// FAQ
let radioInputs = document.querySelectorAll(
  ".questions .questions-content input"
);
let labelsFAQ = document.querySelectorAll(
  ".questions .questions-content label"
);

radioInputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    labelsFAQ.forEach((label) => {
      label.classList.remove("clicked");
    });
    labelsFAQ[index].classList.add("clicked");
  });
});
