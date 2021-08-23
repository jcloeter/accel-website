const info = document.querySelector(".information");
const hero = document.querySelector(".hero");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");

const options = {
  rootMargin: `-${navbar.clientHeight}px`,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.style.backgroundColor = "rgba(16, 139, 109, 0)";
    }
    if (!entry.isIntersecting) {
      navbar.style.backgroundColor = "rgba(16, 139, 109, 1)";
    }
  });
}, options);

observer.observe(hero);

const icon = document.querySelectorAll(".icon");
const hamburger = document.querySelector(".hamburger-icon");
const exit = document.querySelector(".exit-icon");
const modal = document.querySelector(".navbar-modal");
const modalLi = document.querySelectorAll(".modal-li");
const modalUl = document.querySelectorAll(".modal-ul");

icon.forEach((icon) => {
  icon.addEventListener("click", function () {
    hamburger.classList.toggle("hidden");
    exit.classList.toggle("hidden");
    modal.classList.toggle("hidden");
  });
});

modalUl.forEach((ul) => {
  addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-link")) {
      console.log("link");
      modal.classList.add("hidden");
    }
  });
});
