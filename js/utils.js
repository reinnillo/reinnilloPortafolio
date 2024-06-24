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
