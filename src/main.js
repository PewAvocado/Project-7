import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { clearContent } from "./complement.js";

loadHome();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', () => {
    clearContent();
    loadHome();
})

menuButton.addEventListener('click', () =>{
    clearContent();
    loadMenu();
})

aboutButton.addEventListener('click', () => {
    clearContent();
    loadAbout();
})