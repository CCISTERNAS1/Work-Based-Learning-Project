window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const navbar = document.querySelector(".navbar");

  
  setTimeout(() => {
    preloader.classList.add("hidden");

    
    document.body.classList.remove("preload");

   
    if (navbar) {
      navbar.classList.add("show-navbar");
    }
  }, 800); 
});

