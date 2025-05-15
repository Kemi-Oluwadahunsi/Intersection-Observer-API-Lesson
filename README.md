# Intersection Observer Projects – Practical Use Cases

Welcome to this repository! 🎉  
This repo contains **5 real-world projects** that demonstrate how to use the powerful **Intersection Observer API** in frontend development.

These projects are crafted to help beginners and intermediate developers understand and implement scroll-based interactions in modern web applications — all through practical, easy-to-follow examples.

---

## 📚 Table of Contents

1. [Lazy Loading Images](#1-lazy-loading-images)
2. [Infinite Scrolling](#2-infinite-scrolling)
3. [Triggering Animations on Scroll](#3-triggering-animations-on-scroll)
4. [Ad View Tracking](#4-ad-view-tracking)
5. [Sticky Navigation & Mega Scroll Page](#5-sticky-navigation--mega-scroll-page)

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (with optional animations)
- JavaScript (ES6+)
- Intersection Observer API
- Public APIs (where applicable)

---

## 📁 Project Details

### 1. Lazy Loading Images

**Description:**  
Improves performance by loading images only when they enter the viewport.

**Use Case:**  
Perfect for performance optimization, especially on image-heavy websites.

📂 Folder: `/01-lazy-loading`

🔗 Features:
- IntersectionObserver to detect visible images
- `data-src` pattern for deferred image loading

---

### 2. Infinite Scrolling

**Description:**  
Loads more data as the user scrolls down a list — just like social media feeds.

**Use Case:**  
Ideal for blogs, feeds, and dynamic content fetching.

📂 Folder: `/02-infinite-scroll`

🔗 Features:
- Uses [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- Observer watches for the last item and loads more on scroll

---

### 3. Triggering Animations on Scroll

**Description:**  
Adds animation classes when sections enter the viewport.

**Use Case:**  
Used in modern landing pages, portfolios, and storytelling interfaces.

📂 Folder: `/03-scroll-animations`

🔗 Features:
- CSS animations triggered with class toggling
- Smooth visual transitions

---

### 4. Ad View Tracking

**Description:**  
Simulates ad tracking by detecting how long an ad stays in the viewport.

**Use Case:**  
Used for analytics, engagement metrics, or advertisement impressions.

📂 Folder: `/04-ad-tracking`

🔗 Features:
- Tracks ad visibility duration
- Counts number of times an ad was seen

---

### 5. Sticky Navigation & Mega Scroll Page

**Description:**  
Implements a sticky header and smooth-scroll effect when clicking on anchor links.

**Use Case:**  
Ideal for single-page websites, documentation pages, and portfolios.

📂 Folder: `/05-sticky-header-mega-scroll`

🔗 Features:
- Sticky navigation that appears after scrolling past the hero
- CSS-powered smooth scrolling
- Intersection Observer used to toggle sticky header class

---

## 🎯 How to Use

```bash
# Clone the repository
git clone https://github.com/your-username/intersection-observer-projects.git

# Navigate into a project folder
cd 01-lazy-loading

# Open index.html in your browser

You can use Live Server extension (VS Code) or open the HTML files directly.
```
