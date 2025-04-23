// script.js

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const revealSection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(revealSection, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });
  