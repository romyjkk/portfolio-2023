// hamburger menu

const hamburgerMenu = document.querySelector(".hamburger-menu");
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");

function openMenu() {
  hamburgerMenu.classList.remove("hidden");
  hamburgerMenu.classList.add("open-menu");

  openMenuButton.classList.add("hidden");
  closeMenuButton.classList.remove("hidden");
}

openMenuButton.addEventListener("click", openMenu);

function closeMenu() {
  hamburgerMenu.classList.remove("open-menu");
  hamburgerMenu.classList.add("hidden");
  closeMenuButton.classList.add("hidden");
  openMenuButton.classList.remove("hidden");
}

closeMenuButton.addEventListener("click", closeMenu);

// scroll straight to results

// horrorflix

// a-moebe
