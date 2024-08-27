// VARIABLES DEL FORMULARIO

const form = document.querySelector("form");
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#message-input");
const submitBtn = document.getElementById("submit");
// obtenemos cada input y textarea en una array
const validateElement = document.querySelectorAll("input, textarea");

// Función para detectar el tipo de dispositivo
function detectarDispositivo() {
    // Verificar si el dispositivo es móvil
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return 'Mobile';
    } else {
        return 'WebSite';
    }
}

// Funcion para obtener la hora actual del Email
function obtenerFechaHoraPanama() {
    // Crear un objeto Date con la hora actual
    const fechaActual = new Date();
  
    // Opciones para formatear la fecha y hora
    const opciones = {
      timeZone: 'America/Panama',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
  
    // Formatear la fecha y hora según las opciones
    const fechaHoraPanama = fechaActual.toLocaleString('es-PA', opciones);
  
    return fechaHoraPanama;
}

// VALIDACION EN TIEMPO REAL

// validamos cada elemento input y textarea en el array
validateElement.forEach((element) => {
    element.addEventListener("input", () => {
        // obtenemos el span de cada elemento iterado
        let errorSpan = document.getElementById(`${element.id}-error`);

        // validamos que el input esta vacio
        if (!element.checkValidity()) {
            // le asignamos la clase "error"
            element.classList.add("error");
            // a su span le agregamos el mensaje de validacion que tiene el input al estar vacio.
            errorSpan.textContent = element.validationMessage;
        } else {
            element.classList.remove("error");
            errorSpan.textContent = "";
        }
    });
});

// VALIDACION Y ENVIO DEL FORMULARIO

// asignamos un evento submit al formulario
form.addEventListener("submit", (event) => {
    // evitamos que el formulario se envie por defecto.
    event.preventDefault();

    // obtenemos el div que mostrara los errores en el formulario y lo iniciamos vacio.
    let erroresDiv = document.getElementById("errores");
    erroresDiv.innerHTML = "";

    // Comprobamos la validez del formulario "si esta vacio"
    if (!form.checkVisibility()) {
        // iteramos en los elementos principales del formulario con "elements" y los asignamos a una lista para iterar
        [...form.elements].forEach((input) => {
            // validamos que el input iterado este vacio
            if (!input.checkValidity()) {
                // obtenemos el span de cada elemento iterado
                let errorSpan = document.getElementById(`${input.id}-error`);
                // a su span le agregamos el mensaje de validacion que tiene el input al estar vacio.
                errorSpan.textContent = input.validationMessage;
                // le asignamos la clase "error" al input
                input.classList.add("error");
            }
        });
        return;
    }

    const base_ID = "app72qPFLrR2Asym4";
    const emails = "tblAR3XGRyj3JdDEm";
    const token = "patOAfocbV4jBXfup.1c8b0a18eff5467231fce879664f5e5285a4207824a0d63428bf367f94a57483";
    const airtableURL = `https://api.airtable.com/v0/${base_ID}/${emails}`;
    let clienteName = document.getElementById("name-input").value;
    let clienteEmail = document.getElementById("email-input").value;
    let clienteSource = detectarDispositivo();
    let clienteDate = obtenerFechaHoraPanama();
    let clienteMessage = document.getElementById("message-input").value;

    const dataEmail = {
        records: [
            {
                fields: {
                    name: clienteName,
                    email: clienteEmail,
                    source: clienteSource,
                    date: clienteDate,
                    message: clienteMessage,
                },
            },
        ],
    };

    const headers = {
        method: "POST", // Método de la solicitud (GET, POST, etc.)
        headers: {
            Authorization: `Bearer ${token}`, // Encabezado de autorización con el token
            "Content-Type": "application/json", // Tipo de contenido
        },
        body: JSON.stringify(dataEmail),
    };

    try {
        // capturamos los datos para enviarse
        fetch(airtableURL, headers)
            .then((res) => {
                // validamos que si hay un error
                if (!res.ok) throw new Error("Error al enviar el formulario 😭.");
                alert("Formulario enviado con exito 😍.");
                return res.json();
            })
            // .then((data) => console.log(data));

        // reseteamos el formulario
        form.reset();
    } catch (error) {
        // console.error(error);
        // mostramos el error en el div de errores del formulario
        erroresDiv.textContent = "Hubo un problema al enviar el formulario 😭.";
    }
});

// Desabilitar el boton de envio hasta que el formulario este completo
form.addEventListener("input", () => {
    let isFormValid = [...form.elements].every((input) => input.validity.valid);

    submitBtn.disabled = !isFormValid;
});
