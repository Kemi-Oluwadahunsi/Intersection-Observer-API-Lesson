const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        // Optional: Stop observing once revealed, this helps with app performance
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    // Trigger when 10% of the element is visible
    threshold: 0.1, 
  }
);

boxes.forEach((box) => {
  observer.observe(box);
});
