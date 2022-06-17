import './index.css';
import {Home} from './layouts/home.js';

const CreateElements = (() => {
    //navigation bar
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', 'nav');
    //navigation Divs
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', 'Home');
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'Menu');
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'Contact');
    const navDivs = [homeDiv, menuDiv, contactDiv];
    //body
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'content');

    return {
        navBar,
        navDivs,
        mainContainer,
    }
})();

const CreateNav = (() => {
    // creates links for each navigation div automatically instead of hard coding it
    CreateElements.navDivs.forEach((div) => {
        CreateElements.navBar.appendChild(div);
        let currentDivName = div.id;
        div.appendChild(document.createElement('button'));
        div.children[0].setAttribute('id', `${currentDivName}-link`);
        div.children[0].setAttribute('href', '#');
        div.children[0].textContent = currentDivName;
    });
})();

const CreateBody = (() => {
    const homeButton = CreateElements.navDivs[0].children[0];
    const menuButton = CreateElements.navDivs[1].children[0];
    const contactButton = CreateElements.navDivs[2].children[0];

    homeButton.addEventListener('click', function() { // create home on click
        CreateElements.mainContainer.appendChild(Home);
    });

    return CreateElements.mainContainer;
})();

document.body.append(CreateElements.navBar, CreateBody);
CreateElements.mainContainer.appendChild(Home);