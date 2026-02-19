const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

if (yearElement) yearElement.textContent = new Date().getFullYear();
if (modifiedElement) modifiedElement.textContent = document.lastModified;

const navItems = [
    {name: "Home", url: "index.html"},
    {name: "Services", url: "services.html"},
    {name: "Contact", url: "contact.html"},
    {name: "Gallery", url: "gallery.html"}
];

const nav = document.getElementById("main-nav");

if (nav){
    const ul = document.createElement("ul");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
    
        a.textContent = item.name;
        a.href = item.url;
    
    
        if (currentPage === item.url){
            a.classList.add("active");
        }
    
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
}


const hamBtn = document.querySelector('#ham-btn');
const navMenu = document.querySelector("#main-nav ul");

hamBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamBtn.setAttribute("aria-expanded", navMenu.classList.contains("show"));
    hamBtn.classList.toggle('show');
})

const imageContainer = document.getElementById("random-images");

if (imageContainer) {
    const images = [
        "images/courtyard-gabion-wall.webp",
        "images/exterior-steel-cladding.webp",
        "images/interior-wooden-spiral-staircase.webp",
        "images/steel-bar-rails.webp",
        "images/wood-gate-gabion-wall.webp",
        "images/interior-steel-cladding.webp",
        "images/gabion-wall-island.webp",
        "images/glass-steel-railing.webp",
    ];

    const shuffled = images.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0,3);

    selected.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Custom stair project by JD Stairs";
        img.loading = "lazy";
        imageContainer.appendChild(img);
    });
}

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        const email = form.querySelector('input[name="email"]').value.trim();
        const name = form.querySelector('input[name="name"]').value.trim();
        const project = form.querySelector('select[name="project"]').value;

        if (name.length < 2){
            alert("Please eneter your full name.");
            e.preventDefault();
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            e.preventDefault();
            return;
        }

        if (project === "") {
            alert("Please select a project type.");
            e.preventDefault();
            return;
        }
    })
}