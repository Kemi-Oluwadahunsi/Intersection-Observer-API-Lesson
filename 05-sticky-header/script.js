const nav = document.getElementById("navbar");
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  },
  {
    root: null,
    threshold: 0,
    // Adjust based on nav height
    rootMargin: "-80px", 
  }
);

observer.observe(hero);
