import chicken from './images/banner.png';


export function loadHome() {
    const banner = document.querySelector('#content');
    const tittle = document.createElement('h1');
    const deal = document.createElement('img');
    const offer = document.createElement('h3');

    tittle.textContent = "Come check the best chicken in Lima! You are gonna lick your fingers!";
    deal.src = chicken;
    deal.alt = 'Banner del restaurante';
    offer.textContent = 'We are the "Chicken slayers" restaurant THIS IS A TEST MESSAGE';

    banner.appendChild(tittle);
    banner.appendChild(deal);
    banner.appendChild(offer);
}
