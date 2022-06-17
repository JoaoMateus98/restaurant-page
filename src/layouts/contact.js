import './styles/contact.css';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'contact-content-container')
    const welcome = document.createElement('h3');
    welcome.textContent = 'Contact Placeholder';
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
    ConstructElementBlocks as Contact
};