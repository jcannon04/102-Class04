"use strict";

// Function to prompt user for name. Returns a string
function promptForUserName() {
  const name = prompt("What is your name?");
  if (name === null || name.length == 0) {
    alert("Please enter a valid name");
    return promptForUserName();
  } else {
    return ` ${name}`;
  }
}
function promptForUserNumber() {
  const imgDiv = document.querySelector(".pic-container")
  const number = prompt("Please Enter a Number");

  for (let i = 0; i < number; i++) {
    let img = document.createElement('img');
    img.src = "https://i.redd.it/5unn16axx1v81.jpg";
    imgDiv.appendChild(img);
  }
}

// Select DOM elements
const pageWelcome = document.querySelector("#welcome");
const sections = document.querySelectorAll("section");
const headers = document.querySelectorAll("h2");
const sideNav = document.querySelector(".sidenav");
const mainSection = document.querySelector(".main");
const sideNavToggleButton = document.querySelector(".sidenav-toggle");

// create welcome heading w/ given userName
const userName = promptForUserName();
promptForUserNumber();
pageWelcome.innerHTML = `Hello${userName}, Happy Studying!`;

// create event listeners for 'collapsible' sections
sections.forEach((section) => {
  section.addEventListener("click", (e) => {
    e.stopPropagation();
    const content = section.querySelector(".section-content");
    const arrow = section.querySelector(".right-arrow");
    content.classList.toggle("hide");
    if (content.classList.contains("hide")) {
      content.style.display = "none";
      arrow.setAttribute(
        "src",
        "https://img.icons8.com/fluency-systems-filled/48/null/right-squared.png"
      );
    } else {
      content.style.display = "block";
      arrow.setAttribute(
        "src",
        "https://img.icons8.com/external-those-icons-fill-those-icons/24/null/external-down-arrows-those-icons-fill-those-icons-7.png"
      );
    }
  });
});

//Wire up side bar button to toggle left and right
sideNavToggleButton.addEventListener("click", (e) => {
  e.stopPropagation();
  sideNav.classList.toggle("sidenav");
  sideNav.classList.toggle("sidenav-left");
  mainSection.classList.toggle("main-right");
  mainSection.classList.toggle("main");
});

var md = window.markdownit();

function htmlToElements(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

// const createHtmlFromMd = async () => {
//   let fileData = await fetch("test.md");
//   let markdownData = await fileData.text();
//   let html = md.render(markdownData);

//   let elems = htmlToElements(html);
//   let testSection = document.querySelector('.test-section');
//   elems.forEach(elem => {
//     testSection.append(elem);
//   })
//   console.log(elems)
// };

// createHtmlFromMd();
