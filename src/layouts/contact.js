import './styles/contact.css';
import location from '../imgs/restaurant-location.png';
import pin from '../imgs/locator.svg';
import clock from '../imgs/clock.svg';
import phone from '../imgs/phone.svg';

const CreateElements = (() => {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'contact-content-container');
    const contactUsformContainer = document.createElement('div');

    //address
    const addressDiv = document.createElement('div');
    const locator = document.createElement('img');
    locator.setAttribute('src', pin);
    const address = document.createElement('p');
    address.setAttribute('id', 'address');
    address.textContent = 'Hollywood Boulevard 42, Los Angeles, USA';
    addressDiv.append(locator, address);
   
    //time
    const timeDiv = document.createElement('div');
    const clockImg = document.createElement('img');
    clockImg.setAttribute('src', clock);
    const time = document.createElement('p');
    time.setAttribute('id', 'time');
    time.textContent = 'Mon-Thurs:8am-8pm Fri-Sun:8am-11pm';
    timeDiv.append(clockImg, time);

    //phone
    const phoneDiv = document.createElement('div');
    const phoneImg = document.createElement('img');
    phoneImg.setAttribute('id', 'phone-img');
    phoneImg.setAttribute('src', phone);
    const phoneNumber = document.createElement('p');
    phoneNumber.setAttribute('id', 'phone');
    phoneNumber.textContent = '(555)-888 9999';
    phoneDiv.append(phoneImg, phoneNumber)

    const map = document.createElement('img');
    map.setAttribute('id', 'map');
    map.setAttribute('src', location);
    return {
        contentContainer,
        contactUsformContainer,
        addressDiv,
        timeDiv,
        phoneDiv,
        map
    }
})();

const ConstructElementBlocks = (() => {
    const contentContainer = CreateElements.contentContainer;
    const contactUsformContainer = CreateElements.contactUsformContainer;
    const addressDiv = CreateElements.addressDiv;
    const timeDiv = CreateElements.timeDiv;
    const phoneDiv = CreateElements.phoneDiv;
    const map = CreateElements.map;

    contactUsformContainer.append(addressDiv, timeDiv, phoneDiv, map);
    contentContainer.appendChild(contactUsformContainer);

    return contentContainer;
})();

export {
    ConstructElementBlocks as Contact
};