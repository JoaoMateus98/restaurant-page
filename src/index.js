import home from './home/home.js';

const CreateElements = (() => {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'content');
    const header = document.createElement('div');
    header.setAttribute('id', 'content-header');
    const body = document.createElement('div')
    body.setAttribute('id', 'content-body');
    const footer = document.createElement('div');
    footer.setAttribute('id', 'content-footer');

    return {
        mainContainer,
        header,
        body,
        footer
    }
})();

const CreateBody = (() => {
    CreateElements.mainContainer.appendChild(CreateElements.header);
    CreateElements.mainContainer.appendChild(CreateElements.body);
    CreateElements.mainContainer.appendChild(CreateElements.footer);

    return CreateElements.mainContainer;
})();   

document.body.appendChild(CreateBody);