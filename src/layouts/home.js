import './home.css';

const CreateElements = (() => {
    //header
    const headerUL = document.createElement('ul');
    const homeLI = document.createElement('li');
    const menuLI = document.createElement('li');
    const contactLI = document.createElement('li');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');
    homeLink.href = '#';
    menuLink.href = '#';
    contactLink.href = '#';
    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    return {
        headerUL,
        homeLI,
        menuLI,
        contactLI,
        homeLink,
        menuLink,
        contactLink
    }
})();

const CunstructElementBlocks = (() => {
    //header
    CreateElements.headerUL.append(CreateElements.homeLI, CreateElements.menuLI, CreateElements.contactLI);
    CreateElements.homeLI.appendChild(CreateElements.homeLink);
    CreateElements.menuLI.appendChild(CreateElements.menuLink);
    CreateElements.contactLI.appendChild(CreateElements.contactLink);

    return {
        header: CreateElements.headerUL,
    }
})();

const Header = CunstructElementBlocks.header;

export {
    Header,
};
