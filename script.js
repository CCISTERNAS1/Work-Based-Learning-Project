window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const navbar = document.querySelector(".techy-navbar");

  // Hide the preloader after a short delay
  setTimeout(() => {
    preloader.classList.add("hidden");

    // Allow scrolling again
    document.body.classList.remove("preload");

    // Animate the navbar in
    if (navbar) {
      navbar.classList.add("show-navbar");
    }
  }, 800); // Adjust delay if needed
});