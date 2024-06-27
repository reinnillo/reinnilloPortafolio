import {
  throttle,
  removeClassIfExists
} from './utils.js';

const listCards = document.querySelector('.listProject');
const contactInfo = document.querySelector('.info');

// Creamos la funcion para el scroll
const checkScroll = (parentArray, classNameAnimation_1='', classNameAnimation_2='') => {
  [...parentArray.children].forEach(card => { 

    const rect = card.getBoundingClientRect();
    const top = rect.top;
    const topPercent = (top / window.innerHeight) * 100;

    if (topPercent <= 80) {
      [...card.children].forEach((element, index) => {
        if (index === 0) { removeClassIfExists(element, classNameAnimation_2) };
        removeClassIfExists(element, classNameAnimation_1);
      });
    };
  });
};

// activamos la funcion cuando se hace scroll en el documentos
window.addEventListener(
  'scroll',
  throttle(function () {
    if (listCards) {
      checkScroll(listCards, 'animation-fade-in', 'animation-zoom');
      checkScroll(contactInfo, 'animation-fade-in');
    }
  }, 100)
);