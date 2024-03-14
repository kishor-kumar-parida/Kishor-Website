/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      // Persist selection using localStorage
      localStorage.setItem("selectedColor", color);
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Check for previously selected color on page load
const selectedColor = localStorage.getItem("selectedColor");
if (selectedColor) {
  setActiveStyle(selectedColor);
}

// Add event listener for color selection (assuming a click event)
alternateStyles.forEach((style) => {
  style.addEventListener("click", function () {
    const newColor = this.getAttribute("title");
    setActiveStyle(newColor);
  });
});

/* ========================== theme light and dark mode =========================== */

const dayNight = document.querySelector(".day-night");

// Function to toggle day and night mode
const toggleMode = () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  // Store the current mode in localStorage
  const isDarkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDarkMode);
};

// Add event listener to toggle mode when clicked
dayNight.addEventListener("click", toggleMode);

// Check localStorage on page load to set the initial mode
window.addEventListener("load", () => {
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  if (isDarkMode) {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
