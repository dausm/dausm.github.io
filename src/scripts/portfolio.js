window.addEventListener("DOMContentLoaded", () => {
  var currentYear = new Date().getFullYear();
  let toggleButtons = document.querySelectorAll(".toggleBtn");

  // Updates year
  document
    .querySelectorAll(".js-year")
    .forEach((el) => (el.innerText = currentYear));

  // Toggle button click event listeners
  document
    .querySelectorAll(".toggleBtn")
    .forEach((el) => el.addEventListener("click", toggleActive));

  // Close navigation if focus leaves menu
  document
    .querySelector(".menu")
    .addEventListener('focusout', function(event) {
      if (!this.contains(event.relatedTarget)) {
        toggleButtons.forEach((element) => {
          element.classList.remove("active");
        });
      }
    });

  // Close navigation on escape keypress
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      toggleActive();
    }
  });

  function toggleActive() {
    toggleButtons.forEach((element) => {
      element.classList.toggle("active");
    });

    // Manage focus for menu
    document.querySelector(".active")
      ? toggleButtons[1].focus()
      : toggleButtons[0].focus();
  }
});
