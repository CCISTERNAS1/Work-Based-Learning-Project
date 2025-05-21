window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const navbar = document.querySelector("nav"); 

  setTimeout(() => {
    preloader.classList.add("hidden");
    document.body.classList.remove("preload");

    if (navbar) {
      navbar.classList.add("navbar-slide-down");
    }
  }, 800); 
});