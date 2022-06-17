import './index.css';

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
        div.appendChild(document.createElement('a'));
        div.children[0].setAttribute('id', `${currentDivName}-link`);
        div.children[0].setAttribute('href', '#');
        div.children[0].textContent = currentDivName;
    });
})();

const CreateBody = (() => {

    return CreateElements.mainContainer;
})();

// function cunstructHome() {
//     CreateElements.header.appendChild(Header);
// }

document.body.append(CreateElements.navBar, CreateBody);