AOS.init({ duration: 1000, once: true });


particlesJS('particles-js', {
    particles: {
      number: { value: 60 },
      color: { value: "#8a4fff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 150,
        color: "#8a4fff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkills = () => {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    };

    
    setTimeout(animateSkills, 500);
  });
  particlesJS('particles-js', {
    particles: {
      number: { value: 50 },
      color: { value: "#8a4fff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 150,
        color: "#8a4fff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      }
    }
  });

  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Message sent! I\'ll get back to you soon.');
    this.reset();
  });

  document.getElementById('offcanvasNavbar').addEventListener('show.bs.offcanvas', function () {
    document.body.classList.add('offcanvas-open');
  });
  document.getElementById('offcanvasNavbar').addEventListener('hide.bs.offcanvas', function () {
    document.body.classList.remove('offcanvas-open');
  });
