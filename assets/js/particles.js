/* Particles.js configuration */
particlesJS('particles-js', {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 900 } },
    color: { value: "#cba6ff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 6 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 2.5,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cba6ff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
