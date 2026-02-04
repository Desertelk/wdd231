const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const navItems = [
    {name: "Home", url: "index.html"},
    {name: "Directory", url: "directory.html"},
    {name: "Join", url: "join.html"},
    {name: "Discover", url: "#"}
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

document.getElementById("timestamp").value = new Date().toISOString();

const modalLinks = document.querySelectorAll("[data-modal]");
const dialogs = document.querySelectorAll("dialog");

modalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const modalID = link.dataset.modal;
        const dialog = document.getElementById(modalID);
        dialog.showModal();
    });
});

dialogs.forEach(dialog => {
    const closeBtn = dialog.querySelector("button");
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
});