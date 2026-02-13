const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const navItems = [
    {name: "Home", url: "index.html"},
    {name: "Directory", url: "directory.html"},
    {name: "Join", url: "join.html"},
    {name: "Discover", url: "discover.html"}
];

const nav = document.getElementById("main-nav");
const ul = document.createElement("ul");
navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.name;
    a.href = item.url;

    if (window.location.pathname.includes(item.url)){
        a.classList.add("active");
    }

    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);

const hamBtn = document.querySelector('#ham-btn');
const navMenu = document.querySelector("#main-nav ul");

hamBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamBtn.classList.toggle('show');
})

import { places } from "../data/discover.mjs";

const grid = document.querySelector("#discoverGrid");

if (grid) {

    places.forEach((place, index) => {
        const card = document.createElement("article");
        card.classList.add("discover-card");
        card.style.gridArea = `card${index + 1}`;
    
        card.innerHTML = `
            <h3>${place.name}</h3>
            <figure>
                <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;
    
        grid.appendChild(card);
    });
}