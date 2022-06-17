import './home.css';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'content-container')
    const welcome = document.createElement('h3');
    welcome.textContent = 'Bem-Vindo';
    const brandName = document.createElement('h1');
    brandName.textContent = 'Carne No Fogo';
    const viewMenu = document.createElement('button');
    viewMenu.textContent = 'View Menu';
    //header
    return {
        contentContainer,
        welcome,
        brandName,
        viewMenu
    }
})();

const ConstructElementBlocks = (() => {
    CreateElements.contentContainer.append(CreateElements.welcome, CreateElements.brandName, CreateElements.viewMenu);

    return CreateElements.contentContainer;
})();

export {
    ConstructElementBlocks as Home
};
