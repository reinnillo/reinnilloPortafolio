/**
 * Verifica si un elemento tiene una clase específica y, si no la tiene, la añade.
 * 
 * @param {HTMLElement} element - El elemento DOM al que se va a verificar y añadir la clase.
 * @param {string} classToVerify - El nombre de la clase que se va a verificar y añadir si no está presente.
 */
export const verifyAndAddClass = (element, classToVerify) => {
    if (!element.classList.contains(classToVerify)) {
        element.classList.add(classToVerify);
    }
};

/**
 * Elimina una clase de un elemento si la tiene.
 * 
 * @param {HTMLElement} element - El elemento DOM al que se le va a eliminar la clase.
 * @param {string} classToRemove - El nombre de la clase que se va a eliminar.
 */
export const removeClassIfExists = (element, classToRemove) => {
    if (element.classList.contains(classToRemove)) {
        element.classList.remove(classToRemove);
    }
};

/**
 * Filtra un array de elementos DOM y devuelve una lista de aquellos que tienen una clase específica.
 * 
 * @param {HTMLElement[]} array - El array de elementos DOM a filtrar.
 * @param {string} className - El nombre de la clase que se busca en la lista de clases de cada elemento.
 * @returns {HTMLElement[]} - Un array de elementos DOM que tienen la clase especificada.
 */
export const filterElementsByClass = (array, className) => {
    const filteredList = [];
    [...array].forEach(element => {
        if (element.classList.contains(className)) {
            filteredList.push(element);
        }
    });
    return filteredList;
};

/**
 * Asigna un objeto de estilos a cada elemento de un array de elementos DOM.
 * 
 * @param {HTMLElement[]} array - El array de elementos DOM a los que se les asignarán los estilos.
 * @param {Object} styleObject - El objeto que contiene los estilos CSS a asignar.
 */
export const assignStyleToElementsArray = (array, styleObject) => {
    array.forEach(element => {
        Object.assign(element.style, styleObject);
    });
};

/**
 * Crea una función que limita la ejecución de `callback` para que se invoque como máximo una vez cada `timeLimit` milisegundos.
 *
 * @param {Function} callback - La función a limitar.
 * @param {number} timeLimit - El número de milisegundos para limitar las invocaciones.
 * @returns {Function} Una nueva función con la limitación aplicada.
 */
export function throttle(callback, timeLimit) {
    let inThrottle;
  
    return function () {
      const args = arguments;
      const context = this;
  
      if (!inThrottle) {
        callback.apply(context, args);
        inThrottle = true;
  
        setTimeout(() => (inThrottle = false), timeLimit);
      }
    };
  }
  
/**
 * Verifica si los elementos en una lista están en el medio del viewport.
 *
 * @param {HTMLElement[]} elements - La lista de elementos a verificar.
 * @returns {boolean[]} Un arreglo de booleanos indicando si cada elemento está en el medio del viewport.
 */
export function areElementsInViewportMiddle(array) {
    return [...array].forEach(element => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
      const middleVertical = viewportHeight / 2;
      const middleHorizontal = viewportWidth / 2;
  
      const isInMiddleVertical = rect.top <= middleVertical && rect.bottom >= middleVertical;
      const isInMiddleHorizontal = rect.left <= middleHorizontal && rect.right >= middleHorizontal;
  
      return isInMiddleVertical && isInMiddleHorizontal;
    });
  }

/**
 * Verifica si un elemento está dentro del viewport.
 *
 * @param {HTMLElement} element - El elemento HTML a verificar.
 * @returns {boolean} - Retorna true si el elemento está dentro del viewport, de lo contrario false.
 *
 * La función obtiene las dimensiones del viewport y posición del elemento en el viewport
 * usando `getBoundingClientRect()` y evalúa si el top y bottom del elemento
 * (superior e inferior) están dentro de los límites del medio inferior del viewport
 * (la mitad inferior de la ventana gráfica visible del navegador).
 */

export function isElementMiddleViewport(element) {
    const midViewPort = window.innerHeight / 2;
    let topElement = element.getBoundingClientRect().top;
    let bottomElement = element.getBoundingClientRect().bottom;
    let heightElement = element.getBoundingClientRect().height / 5;

    if (
        topElement < 0 && bottomElement < (midViewPort - heightElement) || 
        topElement > midViewPort) {

        return false;
    }
    else {
        return true;
    }
}