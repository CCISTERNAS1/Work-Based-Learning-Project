window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1500); 
  }


  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      navButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});