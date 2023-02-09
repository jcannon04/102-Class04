// Function to prompt user for name. Returns a string
function promptForUserName() {
    let name = prompt('What is your name?');
    if (name === null) {
        return '';
    } else {
        if(name.length < 1) return name;
        return ' ' + name;
    }
}

// Select DOM elements
let pageWelcome = document.querySelector('#welcome');
let sections = document.querySelectorAll('section');
let headers = document.querySelectorAll('h2');
let sideNav = document.querySelector('.sidenav');
let mainSection = document.querySelector('.main')
let sideNavToggleButton = document.querySelector('.sidenav-toggle');
// create welcome heading w/ given userName
let userName = promptForUserName();
pageWelcome.innerHTML = `Hello${userName}, Happy Studying!`;   

// create event listeners for 'collapsible' sections
sections.forEach(section => { 
    section.addEventListener('click', () => {
        let content = section.querySelector('.section-content');
        content.classList.toggle('hide');
        if(content.classList.contains('hide')) {
            content.style.display = 'none';
        } else { 
            content.style.display = 'block' 
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
