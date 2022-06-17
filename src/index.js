import './index.css';
import { Home } from './layouts/home.js';
import { Menu } from './layouts/menu.js';
import { Contact } from './layouts/contact';

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
    //footer
    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id', 'footer');

    return {
        navBar,
        navDivs,
        mainContainer,
        footerContainer
    }
})();

(() => { // creates the navigation bar
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

    // change body to other content
    homeButton.addEventListener('click', function() {
        cleanBody();
        CreateElements.mainContainer.appendChild(Home);
    });

    menuButton.addEventListener('click', function() { 
        cleanBody();
        CreateElements.mainContainer.appendChild(Menu);
    });

    contactButton.addEventListener('click', function() { 
        cleanBody();
        CreateElements.mainContainer.appendChild(Contact);
    });

    function cleanBody() {
        while (CreateElements.mainContainer.hasChildNodes()){
            CreateElements.mainContainer.children[0].remove();
        }
    }

    return CreateElements.mainContainer;
})();

(() => {
    const joaoStamp = document.createElement('p');
    joaoStamp.textContent = `Carne No Fogo \u00A9 2022`;
    CreateElements.footerContainer.appendChild(joaoStamp);
})();

document.body.append(CreateElements.navBar, CreateBody, CreateElements.footerContainer);
CreateElements.mainContainer.appendChild(Home); // initial screen is home