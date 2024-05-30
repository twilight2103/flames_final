const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".section_container h3", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".section_container h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  