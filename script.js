window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const heroSection = document.querySelector(".hero-section");
  const navbar = document.querySelector(".navbar");

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
      }, 500); 

    }, 1500); 
  }


  document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});


