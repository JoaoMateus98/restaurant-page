import './styles/menu.css';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'menu-content-container')
    const welcome = document.createElement('h3');
    welcome.textContent = 'Menu placeholder';
    //header
    return {
        contentContainer,
        welcome,
    }
})();

const ConstructElementBlocks = (() => {
    CreateElements.contentContainer.append(CreateElements.welcome);

    return CreateElements.contentContainer;
})();

export {
    ConstructElementBlocks as Menu
};