// Script to show menu when hamburger menu is pressed
const body = document.querySelector("body")

function showMenu() {
  const menuBtn = document.getElementById("menu");
  const navMenu = document.querySelector("nav");

  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
}


showMenu();
