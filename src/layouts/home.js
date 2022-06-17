import './home.css';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    const welcome = document.createElement('h3');
    welcome.textContent = 'Bem-Vindo';
    const brandName = document.createElement('h1');
    brandName.textContent = 'Carne No Fogo';
    //header
    return {
        contentContainer,
        welcome,
        brandName
    }
})();

const ConstructElementBlocks = (() => {
    CreateElements.contentContainer.append(CreateElements.welcome, CreateElements.brandName);

    return CreateElements.contentContainer;
})();

export {
    ConstructElementBlocks as Home
};
