import './styles/menu.css';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'menu-content-container');
    //header
    return {
        contentContainer,
    }
})();

const ConstructElementBlocks = (() => {
    return CreateElements.contentContainer;
})();

const foodBlock = (img, description, id) => {
    const foodContainer = document.createElement('div');
    const image = document.createElement('img');
    const foodName = document.createElement('p');

    image.setAttribute('src', img);
}

export {
    ConstructElementBlocks as Menu
};