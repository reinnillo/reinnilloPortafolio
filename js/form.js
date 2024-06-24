// VARIABLES DEL FORMULARIO
const form = document.querySelector('form');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const subjectInput = document.querySelector('#subject-input');
const messageInput = document.querySelector('#message-input');
const submitBtn = document.getElementById('submit');
// obtenemos cada input y textarea en una array
const validateElement = document.querySelectorAll('input, textarea');


// VALIDACION EN TIEMPO REAL

// validamos cada elemento input y textarea en el array
validateElement.forEach( element => {
    element.addEventListener('input', () => {
        
        // obtenemos el span de cada elemento iterado
        let errorSpan = document.getElementById(`${element.id}-error`);

        // validamos que el input esta vacio
        if (!element.checkValidity()) {
            // le asignamos la clase "error"
            element.classList.add('error');
            // a su span le agregamos el mensaje de validacion que tiene el input al estar vacio.
            errorSpan.textContent = element.validationMessage;
        }
        else {
            element.classList.remove('error');
            errorSpan.textContent = '';
        }
    });
});


// VALIDACION Y ENVIO DEL FORMULARIO

// asignamos un evento submit al formulario
form.addEventListener('submit', async (event) => {

    // evitamos que el formulario se envie por defecto.
    event.preventDefault()

    // obtenemos el div que mostrara los errores en el formulario y lo iniciamos vario.
    let erroresDiv = document.getElementById('errores');
    erroresDiv.innerHTML = '';

    // Comprobamos la validez del formulario "si esta vacio"
    if (!form.checkVisibility()) {

        // iteramos en los elementos principales del formulario con "elements" y los asignamos a una lista para iterar
        [...form.elements].forEach( (input) => {

            // validamos que el input iterado este vacio
            if (!input.checkValidity()) {
                // obtenemos el span de cada elemento iterado
                let errorSpan = document.getElementById(`${input.id}-error`);
                // a su span le agregamos el mensaje de validacion que tiene el input al estar vacio.
                errorSpan.textContent = input.validationMessage;
                // le asignamos la clase "error" al input
                input.classList.add('error');
            }
        });
        return;
    }
    
    try {
        // capturamos los datos para enviarse
        let response = await fetch('https://formspree.io/f/xjvnnnrl', {
            method: 'POST',
            body: new FormData(form)
        });

        // validamos si hay un error
        if (!response.ok) throw new Error('Error al enviar el formulario');
        alert('Formulario enviado con exito');

        // reseteamos el formulario
        form.reset();

    } catch (error) {
        console.error(error);
        // mostramos el error en el div de errores del formulario
        erroresDiv.textContent = 'Hubo un problema al enviar el formulario';
    }
});


// Desabilitar el boton de envio hasta que el formulario este completo
form.addEventListener('input', () => {
    let isFormValid = [...form.elements].every(input => input.validity.valid);
    
    submitBtn.disabled = !isFormValid;
});
