
export function loadMenu(){
    const content = document.querySelector('#content');

    const menuItems = [
        {name: 'Fried Chicken' , desc: 'Very delicious and tasty'},
        {name: 'Meat' , desc: 'Juicy'},
        {name: 'Salad' , desc: 'A perfect complement'}
    ];
    
    menuItems.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('menucard');

        const tittle = document.createElement('h2');
        tittle.textContent = item.name;

        const description = document.createElement('h4');
        description.textContent = item.desc;

        card.appendChild(tittle);
        card.appendChild(description);

        content.appendChild(card);
    })
}