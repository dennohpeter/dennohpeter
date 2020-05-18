const toggleSwitch = document.querySelector(".switch-theme-button");
const themeIcon = toggleSwitch.querySelector("svg > use");
// sets previously set theme as the default
if (currentTheme()) {
  document.documentElement.setAttribute("data-theme", currentTheme());
  if (currentTheme() === "dark") {
    themeIcon.setAttribute("href", "#icon-light-mode");
  }
}

// Sets appropriate theme
function switchTheme() {
  if (currentTheme() === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.setAttribute("href", "#icon-light-mode");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeIcon.setAttribute("href", "#icon-dark-mode");
  }
}
// listens for switch-theme-button click event and triggers switchTheme()
toggleSwitch.addEventListener("click", switchTheme, false);

// gets and returns current theme value or None if no theme yet from localStorage
function currentTheme() {
  return localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
}

// TOP Menu Sticky
const navbar = document.querySelector(".wrapper nav");
const container = document.querySelector(".wrapper > .container");
window.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  let navbarHeight = navbar.offsetHeight;

  if (scroll > navbarHeight) {
    container.style.paddingTop = navbarHeight + "px";
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    container.style.paddingTop = 0;
  }
});
