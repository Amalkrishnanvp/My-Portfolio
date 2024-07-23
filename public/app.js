document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-button-container");
  const navbarList = document.querySelector(".navbar-list");

  toggleBtn.addEventListener("click", () => {
    navbarList.classList.toggle("toggle-list");
  });
});
