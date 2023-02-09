"use strict"
// Function to prompt user for name. Returns a string
function promptForUserName() {
    const name = prompt('What is your name?');
    if (name === null) {
        return '';
    } else {
        if(name.length < 1) return name;
        return ' ' + name;
    }
}

// Select DOM elements
const pageWelcome = document.querySelector('#welcome');
const sections = document.querySelectorAll('section');
const headers = document.querySelectorAll('h2');
const sideNav = document.querySelector('.sidenav');
const mainSection = document.querySelector('.main')
const sideNavToggleButton = document.querySelector('.sidenav-toggle');

// create welcome heading w/ given userName
const userName = promptForUserName();
pageWelcome.innerHTML = `Hello${userName}, Happy Studying!`;   

// create event listeners for 'collapsible' sections
sections.forEach(section => { 
    section.addEventListener('click', () => {
        const content = section.querySelector('.section-content');
        const arrow = section.querySelector(".right-arrow");
        content.classList.toggle('hide');
        if(content.classList.contains('hide')) {
            content.style.display = 'none';
            arrow.setAttribute('src', 'https://img.icons8.com/fluency-systems-filled/48/null/right-squared.png');
        } else { 
            content.style.display = 'block';
            arrow.setAttribute('src', 'https://img.icons8.com/external-those-icons-fill-those-icons/24/null/external-down-arrows-those-icons-fill-those-icons-7.png');
        }
    })
});

sideNavToggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    sideNav.classList.toggle('sidenav');
    sideNav.classList.toggle('sidenav-left');
    mainSection.classList.toggle('main-right');
    mainSection.classList.toggle('main');
})
