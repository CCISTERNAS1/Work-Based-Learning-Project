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

window.onload = () => {
    document.querySelectorAll('.fade-in-up').forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add('animate');
    });
  };

  window.addEventListener('scroll', function () {
    const arrow = document.getElementById('scrollArrow');
    if (window.scrollY > 100) {
      arrow.style.opacity = '0';
      arrow.style.pointerEvents = 'none';
    } else {
      arrow.style.opacity = '1';
      arrow.style.pointerEvents = 'auto';
    }
  });

  const services = [
      "Access Control",
      "Advanced Analytics",
      "Biometrics",
      "Cloud-based Solutions",
      "Design Services",
      "Integrated Systems",
      "Intercom Systems",
      "Intrusion Services",
      "IP Video Solutions",
      "Remote Access Management",
      "Video Management",
      "Visitor Management"
    ];

    const row = document.querySelector(".services-section .row");
    services.forEach(service => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4 mb-4";
      col.innerHTML = `
        <div class="service-card p-4 rounded-4 shadow text-white h-100">
          <h4 class="fw-bold mb-2">${service}</h4>
          <p>Professional, secure, and innovative — our ${service.toLowerCase()} services help protect and streamline your organization.</p>
        </div>
      `;
      row.appendChild(col);
    });