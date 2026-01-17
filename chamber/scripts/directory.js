const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const navItems = [
    {name: "Home", url: "#"},
    {name: "Directory", url: "directory.html"},
    {name: "Join", url: "#"},
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

const membersContainer=document.querySelector("#members");
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");

async function getMembers() {
    try{
        const response = await fetch("data/members.json");
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Failed to load members:", error);
    }
}

function displayMembers(members){
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        let badgeClass = "member";
        let badgeText = "Member";

        if (member.level === 2) {
            badgeClass = "silver";
            badgeText = "Silver Member";
        } else if (member.level === 3){
            badgeClass = "gold";
            badgeText = "Gold Member";
        }

        card.innerHTML = `
            <div class="member-header">
                <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
                <p class="badge ${badgeClass}">${badgeText}</p>
            </div>
            
            <h3>${member.name}</h3>
            
            <p class="address">${member.address}</p>
            <p class="phone">${member.phone}</p>

            <a class="website" href="${member.website}" target="_blank">Visit Website</a>

            <p class="description">${member.description}</p>
        `;

        membersContainer.appendChild(card);
    });
}

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMembers();