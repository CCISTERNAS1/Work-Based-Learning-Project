window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const heroSection = document.querySelector(".hero-section");
  const navbar = document.querySelector(".navbar");
  const navButtons = document.querySelectorAll(".nav-btn");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");

      if (navbar) {
        navbar.classList.add("navbar-expand-animate");
      }

      setTimeout(() => {
        if (heroSection) {
          heroSection.classList.add("fade-in-up");
        }
      }, 500); // Delay for hero section animation

    }, 1500); // Initial preloader duration
  }

  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      navButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});