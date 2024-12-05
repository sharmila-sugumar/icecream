const navbar = document.querySelector(".navbar");
const menuTogglersContainer = document.querySelector(".menu-togglers");
const bxMenu = document.querySelector(".bx-menu");
menuTogglersContainer.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

/* -------- theme changing -------- */
const themeTogglers = document.querySelector(".theme-togglers");
const lightIcon = document.querySelector(".bxs-sun");
const darkIcon = document.querySelector(".bxs-moon");

var lightmode = localStorage.getItem("lightmode");


const enableLightMode = () => {

  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "enabled");

  lightIcon.style.display = "none";
  darkIcon.style.display = "block";
};

if (lightmode && lightmode === "enabled") {
  enableLightMode();
}

const disableLightMode = () => {

  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);

  lightIcon.style.display = "block";
  darkIcon.style.display = "none";
};

themeTogglers.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (!lightmode || lightmode !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

const heroButtonsContainer = document.querySelector(".hero-btns-container");

var delayTime = 1000;

heroButtonsContainer.style.transition = "opacity 1000ms";

setTimeout(() => {
  heroButtonsContainer.style.opacity = 1;
}, delayTime);

const sendMsgButton = document.querySelector(".send-msg-btn");
sendMsgButton.addEventListener("click", (e) => {
  e.preventDefault();
});