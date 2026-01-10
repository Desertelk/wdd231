const navbutton = document.querySelector('#ham-btn');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
})

const yearElement = document.getElementById('currentYear');
const modifiedElement = document.getElementById('lastModified');

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = document.lastModified;