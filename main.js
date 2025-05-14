const userList = document.getElementById("user-list");
const sentinel = document.getElementById("sentinel");
const page = 1;

// fetching the first 12 users on page load

const fetchUsers = async () => {
  const res = await fetch(`https://randomuser.me/api/?results=12&page=${page}`);
  const data = await res.json();

  data.results.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first}" />
        <h3>${user.nam.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        `;
    userList.appendChild(card);
  });
  page++
};

fetchUsers();

// create infinite scroll observer
const loadMore = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
        fetchUsers();
    }
};

const observer = new IntersectionObserver(loadMore, {
    root: null,
    rootMargin: "200px",
    threshold: 1,
});

observer.observe(sentinel);
