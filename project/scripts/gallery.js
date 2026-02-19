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

const galleryImages = [
    {
        src: "images/courtyard-gabion-wall.webp",
        alt: "Courtyard Gabion wall",
        category: "Gabion Wall",
        description: "Exterior Courtyard Gabion Wall"
    },
    {
        src: "images/exterior-steel-cladding.webp",
        alt: "Exterior steel cladding",
        category: "Cladding",
        description: "Exterior steel cladding on residence"
    },
    {
        src: "images/gabion-wall-firebox.webp",
        alt: "Exterior Gabion Wall made Fire box",
        category: "Gabion Wall",
        description: "Exterior Gabion Wall made Fire box"
    },
    {
        src: "images/gabion-wall-island.webp",
        alt: "Exterior Gabion Wall island",
        category: "Gabion Wall",
        description: "Exterior Gabion wall made Island"
    },
    {
        src: "images/glass-steel-railing.webp",
        alt: "Glass and Steel Railing",
        category: "Stair & Railing",
        description: "Interior railing made of Glass panels and Steel bars"
    },
    {
        src: "images/interior-gabion-wall.webp",
        alt: "Interior Gabion Wall",
        category: "Gabion Wall",
        description: "Internal Gabion Wall"
    },
    {
        src: "images/interior-steel-cladding.webp",
        alt: "Interior Steel Cladding",
        category: "Cladding",
        description: "Interior Steel Cladding"
    },
    {
        src: "images/interior-wooden-spiral-staircase.webp",
        alt: "Interior Wooden Spiral Staircase",
        category: "Stair & Railing",
        description: "Interior Wooden Spiral Staircase"
    },
    {
        src: "images/steel-bar-rails.webp",
        alt: "Exterior Steel Bar Rails",
        category: "Stair & Railing",
        description: "Exterior Steel Bar Rails"
    },
    {
        src: "images/wood-gate-gabion-wall.webp",
        alt: "Exterior Wooden gate and Gabion Wall",
        category: "Gabion Wall",
        description: "Wooden Gate and Gabion Wall"
    },
]

const galleryContainer = document.getElementById("gallery");

if (galleryContainer){
    galleryImages.forEach(img => {
        const figure = document.createElement("figure");
        figure.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.alt;
        image.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.textContent = img.category;

        figure.appendChild(image);
        figure.appendChild(caption);
        galleryContainer.appendChild(figure);
    });
}

const modal = document.createElement("dialog");
modal.classList.add("image-modal");
document.body.appendChild(modal);

galleryContainer.querySelectorAll("img").forEach((img, index) => {

    img.addEventListener("click", () => {

        const data = galleryImages[index];

        modal.innerHTML = `
            <img src="${data.src}" alt="${data.alt}">
            <h3>${data.category}</h3>
            <p>${data.description}</p>
            <button class="cta">Close</button>
        `;

        modal.querySelector("button").addEventListener("click", () => {
            modal.close();
        });

        modal.showModal();
    });
});