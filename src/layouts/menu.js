import './styles/menu.css';
import steak from '../imgs/steak.png';
import burger from '../imgs/burger.jpg';
import chicken from '../imgs/chicken.jpg';
import dessert from '../imgs/dessert.jpg';
import salad from '../imgs/salad.jpg';
import shrimp from '../imgs/shrimp.jpg';

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
    const chickenBlock = foodBlock(chicken, 'CHIKEN', 'chiken-img');
    const shrimpBlock = foodBlock(shrimp, 'SHRIMP', 'shrimp-img');
    const saladBlock = foodBlock(salad, 'SALAD', 'salad-img');
    const burgerBlock = foodBlock(burger, 'BURGER', 'burger-img');
    const dessertBlock = foodBlock(dessert, 'DESSERT', 'deser-img');

    contentContainer.append(steakBlock, chickenBlock, shrimpBlock, saladBlock, burgerBlock, dessertBlock);

    return contentContainer;
})();

export {
    ConstructElementBlocks as Menu
};