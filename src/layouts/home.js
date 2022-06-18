import './styles/home.css';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'home-content-container');
    const welcome = document.createElement('h3');
    welcome.textContent = 'Bem-Vindo';
    const brandName = document.createElement('h1');
    brandName.textContent = 'Carne No Fogo';
    const buttonWrapper = document.createElement('div');
    buttonWrapper.setAttribute('id', 'button-wrapper');
    const viewMenu = document.createElement('button');
    viewMenu.textContent = 'View Menu';
    //header
    return {
        contentContainer,
        welcome,
        brandName,
        buttonWrapper,
        viewMenu
    }
})();

const ConstructElementBlocks = (() => {
    const contentContainer = CreateElements.contentContainer;
    const welcome = CreateElements.welcome;
    const brandName = CreateElements.brandName;
    const buttonWrapper = CreateElements.buttonWrapper;
    const viewMenu = CreateElements.viewMenu;

    buttonWrapper.appendChild(document.createElement('div'));
    buttonWrapper.children[0].appendChild(viewMenu);
    
    contentContainer.append(welcome, brandName, buttonWrapper);

    return CreateElements.contentContainer;
})();

const viewMenuButton = CreateElements.viewMenu;

export {
    ConstructElementBlocks as Home,
    viewMenuButton
};
