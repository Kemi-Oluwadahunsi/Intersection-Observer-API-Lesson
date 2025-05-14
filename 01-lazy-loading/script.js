const gallery = document.getElementById("gallery");

// Generate 20 placeholder images from https://picsum.photos
for (let i = 1; i <= 20; i++) {
  const img = document.createElement("img");
  img.setAttribute("data-src", `https://picsum.photos/id/${i + 6}/400/300`);
  img.alt = `Image ${i}`;
  gallery.appendChild(img);
}

// Intersection Observer Setup
const lazyLoad = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
};

const observer = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.1,
});

// Observe all images
const images = document.querySelectorAll("img[data-src]");
images.forEach((img) => observer.observe(img));
