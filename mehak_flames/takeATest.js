const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".calculate", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".content h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  ScrollReveal().reveal(".inputarea", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
  });
  ScrollReveal().reveal(".section_container button", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".socials a", {
    duration: 1000,
    interval: 500,
    delay: 500,
  });