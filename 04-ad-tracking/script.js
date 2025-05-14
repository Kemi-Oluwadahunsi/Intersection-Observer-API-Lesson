const adElement = document.getElementById("ad");

const adObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("📈 Ad Viewed! Reporting to Analytics Server...");
        // Simulating sending data to a server
        setTimeout(() => {
          console.log("✅ Ad view tracked successfully!");
        }, 1000);

        // Only track once
        adObserver.unobserve(entry.target);
      }
    });
  },
  {
    // At least 50% of the ad must be visible
    threshold: 0.5,
  }
);

adObserver.observe(adElement);
