const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;

const navItems = [
    {name: "Home", url: "index.html"},
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


// Weather

const town = document.querySelector('#town');
const myTemperature = document.querySelector('#temperature');
const myDescription = document.querySelector('#description');
const high = document.querySelector('#description');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector("#sunrise");
const myGraphic = document.querySelector('#graphic');
const myToday = document.querySelector('#today');
const myTomorrow = document.querySelector('#tomorrow');
const myTwoDays = document.querySelector('#two-days');

const apiKey = "201ef2727b7d3c540c45cd6d9cfdafa3"
const lat = 36.1699;
const lon = -115.1398;
const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// async function getWeather() {
//     const response = await fetch(weatherUrl);
//     const data = await response.json();
//     const currentTemp = data.list[0].main.temp;

//     document.querySelector("#current-temp").textContent = `${Math.round(currentTemp)}°F`;

//     document.querySelector("#weather-desc").textContent = data.list[0].weather[0].description;

//     let forecastHTML = "";
//     for (let i=8; i < 24; i+= 8){
//         forecastHTML += `<p>${Math.round(data.list[i].main.temp)}°F`
//     }

//     document.querySelector("#forecast").innerHTML = forecastHTML;
// }

// getWeather();

async function apiFetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // console.table(data);
            // displayResults(data); // uncomment when ready
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchWeather();

function displayWeather(data){
    myDescription.innerHTML = `${data.weather[0].myDescription}`;
    myTemperature.innerHTML = `${data.main.temp} &degF`;
    high.innerHTML = `High: ${data.main.temp_max} &degF`;
    high.innerHTML = `Low: ${data.main.temp_min} &degF`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    const timestampRise = data.sys.sunrise;
    const riseDate = new Date(timestampRise * 1000);
    const riseTime = riseDate.toLocaleTimeString("en-US", {hour: "numeric"}, {minute: "2-digit"});
    sunrise.innerHTML = `Sunrise: ${riseTime}`;
    const timestampeSet = data.sys.
}

async function loadSpotlights(){
    const response = await fetch("data/members.json");
    const members = await response.json();

    const qualified = members.filter(
        m => m.level === 2 || m.level === 3
    );

    qualified.sort(() => .5 - Math.random());

    const selected = qualified.slice(0,3);
    const container = document.querySelector("#spotlight-container");
}