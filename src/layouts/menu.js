import './styles/menu.css';
import steak from '../imgs/steak.png';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'menu-content-container');
    //header
    return {
        contentContainer,
    }
})();

const foodBlock = (img, description, id) => {
    const foodContainer = document.createElement('div');
    const image = document.createElement('img');
    const nameContainer = document.createElement('div');
    const foodName = document.createElement('p');

    foodContainer.setAttribute('id', id);
    image.setAttribute('src', img);
    foodName.textContent = description;

    nameContainer.appendChild(foodName);
    foodContainer.append(image, nameContainer);

    return foodContainer;
}

const ConstructElementBlocks = (() => {
    const contentContainer = CreateElements.contentContainer;
    const steakBlock = foodBlock(steak, 'STEAK', 'steak-img');

    contentContainer.appendChild(steakBlock);

    return contentContainer;
})();

export {
    ConstructElementBlocks as Menu
};