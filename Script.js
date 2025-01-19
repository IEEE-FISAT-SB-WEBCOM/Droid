const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smooth: true, 
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

gsap.from("#heroicon", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#herorobo", {
  opacity: 0,
  scale: 0.5,
  duration: 1.2,
  delay: 0.3,
  ease: "back.out(1.7)"
});

gsap.from(".logo img", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".logo",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".workshop-item", {
  opacity: 0,
  y: 100,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".workshop-layout",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
});

const cards = document.querySelectorAll('.pricing-card');
VanillaTilt.init(cards, {
    max: 15, 
    speed: 400, 
    glare: true, 
    "max-glare": 0.3, 
    scale: 1.05, 
    gyroscope: true, 
    perspective: 1000, 
    transition: true, 
    easing: "cubic-bezier(.03,.98,.52,.99)", 
    reset: true 
});

gsap.from(".pricing-card", {
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#Pricing",
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".posters img", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".posters",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  }
});

gsap.from("#icon", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#icon",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

gsap.from("#robot", {
  opacity: 0,
  scale: 0.5,
  duration: 1.2,
  delay: 0.3,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: "#robot",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".lucide", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".lucide",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

gsap.utils.toArray("h1").forEach(heading => {
  gsap.from(heading, {
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: heading,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});


function setupMarquee() {
    const marquee = document.querySelector('.marquee');
    const content = document.querySelector('.marquee-content');
    const contentWidth = content.offsetWidth;
    
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
        duration: 10
      }
    });
  
    gsap.set(marquee, {
      x: 0
    });
  
    tl.to(marquee, {
      x: -contentWidth,
      duration: 10,
      ease: "none",
      repeat: -1
    });
  
    marquee.addEventListener('mouseenter', () => {
      gsap.to(tl, {
        timeScale: 0,
        duration: 0.5
      });
    });
  
    marquee.addEventListener('mouseleave', () => {
      gsap.to(tl, {
        timeScale: 1,
        duration: 0.5
      });
    });
  }
  
  window.addEventListener('load', setupMarquee);
  
  window.addEventListener('resize', setupMarquee);



  const hamburgerMenu = document.getElementById('hamburger-menu');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = menuOverlay.getElementsByTagName('a');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

Array.from(menuLinks).forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!hamburgerMenu.contains(e.target) && !menuOverlay.contains(e.target)) {
    hamburgerMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  function handleMobileView() {
    const registerLink = document.querySelector('.raw-reg');
    const regItem = document.querySelector('.register-item');
    const isMobile = window.matchMedia('(max-width: 768px)'); 

    if (!registerLink || !regItem) {
      console.error('Elements not found.');
      return;
    }

    if (isMobile.matches) {
      registerLink.style.display = 'block';
      regItem.style.display = 'none';
    } else {
      registerLink.style.display = 'none';
      regItem.style.display = 'flex';
    }
  }

  window.addEventListener('resize', handleMobileView);
  handleMobileView();
});

