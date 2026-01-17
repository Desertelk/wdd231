const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const card = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    console.log(data.prophets); // temp output test of data response 
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};