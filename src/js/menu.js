import menuCardTpl from '../templates/menu.hbs';
import cards from '../menu.json';

console.log(menuCardTpl(cards));

const menuContainer = document.querySelector('.js-menu');
const cardsMArkup = createMenuCards(cards);

menuContainer.insertAdjacentHTML('beforeend', cardsMArkup);

function createMenuCards(cards) {
    return cards.map(menuCardTpl).join('');
}