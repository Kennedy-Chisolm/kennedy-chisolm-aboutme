const nameElement = document.querySelector(".name");
const infoBox = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");

window.addEventListener("load", () => {
  nameElement.classList.add("loaded");
});

toggle.addEventListener("click", () => {
  infoBox.classList.toggle("active");
});

function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}
