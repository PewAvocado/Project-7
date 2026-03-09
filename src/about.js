export function loadAbout(){
    const content = document.querySelector('#content');
    const history = document.createElement('h3');

    history.textContent = 'We are open since 10am evey day';

    content.appendChild(history);
}