// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { userIcon, messageIcon, emailIcon} from './icons.js';

export class FormContact extends LitElement {
    static styles = [
        css`
            :host {
                display: none;
                transform: translate(50%, 20%);
                width: 50vw;
                height: 70vh; 
                background: rgba(0, 0, 0,0.5); 
                position: absolute; 
                top: 0;
                bottom: 0;
                backdrop-filter: blur(1rem);
                z-index: 5000;
                border-radius: var(--b-radius-large);
            }
            :host(.visible) {
                display: grid;
                place-content: center;
            }
            form {
                width: 100%;
                display: flex;
                flex-direction: column;
                text-align: left;
            }
            /* contenedor de errores generales */
            #errors {
                color: red;
                margin-bottom: 1rem;
            } 
            
            /* Contenedor de cada input, label y span */
            .form-group {
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;
            }
            .form-group label {
                font-size: 1rem;
                color: var(--light);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;
            }
            .form-group label svg {
                width: 2rem;
                height: 2rem;
                fill: var(--light);
            }

            /* inputs y textareas */
            .form-group input[type="text"],
            .form-group input[type="email"],
            .form-group textarea {
                outline: none;
                border: none;
                color: var(--light);
                width: 80%;
                padding: 1rem;
                border-radius: var(--b-radius-large);
                font-size: 1rem;
                background: var(--dark);
                box-shadow: var(--shadow-01);
            }
            .form-group input:nth-child(1) {
                text-transform: capitalize;
            }
            
            /* aplicar un border rojo a los campos de errores */
            .form-group input.error,
            .form-group textarea.error {
                border: 2px solid red;
            }
            /* Mensaje de errores "span" perteneciente a cada input-textarea */
            .form-group .error-message {
                color: red;
                font-size: 0.875rem;
                text-shadow: var(--light);
            }
            
            /* Captcha */
            form .g-recaptcha {
                margin-bottom: 1rem;
            }

            /* Boton para enviar el formulario */
            form button#submit[type="submit"] {
                width: -moz-fit-content;
                width: fit-content;
                padding: 0.8rem 2rem;
                font-size: 1rem;
                color: var(--text-color);
                background-color: var(--dark);
                border: none;
                border-radius: var(--b-radius-small);
                cursor: pointer;
                box-shadow: none;
                transition: all 0.2s ease;
            }
            /* Submit Hover */
            form button#submit[type="submit"]:hover {
                background-color: var(--light);
                transform: scale(1.05);
                box-shadow: var(--shadow-01);
            }
            /* Submit Disabled */
            form button#submit[type="submit"]:disabled {
                background-color: #141719;
                cursor: not-allowed;
                text-shadow: var(--light);
                color: var(--light);
                border: none;
            }
            
            /* componente Boton para cerrar el formulario */
            :host #closeForm {
                position: absolute;
                top: 0;
                right: 0;
            }
        `
    ];

    static properties = {
        _arrayInputData: { type: Array },
        _validationStates: { type: Array },
        _isEnable: { type: Boolean },
        _notificationMessageSent: { type: String },
        _notificationMessageError: { type: String },
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.addEventListener('input-completed', (event) => this._handleInputValidity(event));
        this.addEventListener("close-modal", (event) => {
            if(event.detail === "close") {
                this._closeForm()
                event.stopPropagation();
            }
        });
        this._validationStates = [];
        this._notificationMessageSent = "El mensaje fue enviado exitosamente 😍.";
        this._notificationMessageError = "Hubo un error al enviar el mensaje 😭.";

        this._arrayInputData = [];
        this._form = null;
        this._nameInput = null;
        this._emailInput = null;
        this._messageInput = null;
        this._submitBtn = null;
        this._isEnable;
    }

    // Metodo para insertar el estado de los input en el Array de estados
    _handleInputValidity(event) {
        const { index, isValid, value } = event.detail; // evento emitido por el input
        this._validationStates[index] = { isValid, value }; // actualizar el Array de estados
        this._verifyInput();
    }
    // Metodo para detectar el tipo de dispositivo
    _detectDevice() {
        let device;
        // Verificar si el dispositivo es una tablet
        const isTablet = /Tablet|iPad/i.test(navigator.userAgent);
        // Verificar si el dispositivo es móvil
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if (isTablet) device = 'Tablet';
        if (isMobile) device = 'Mobile';
        if (!(isMobile && isTablet)) device = 'WebSite';
        return device;
    }
    // Metodo para obtener la hora actual del mensaje enviado
    _getDatePanama() {
        // Crear un objeto Date con la hora actual
        const currentDate = new Date();

        // Opciones para formatear la fecha y hora
        const options = {
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
        const datePanama = currentDate.toLocaleString('es-PA', options);
        return datePanama;
    }
    // Metodo para emitir el estado de los eventos input
    _isCompletedInput(inputID) {
        const input = this.shadowRoot.getElementById(inputID);
        const index = input.dataset.index;
        const value = input.value;
        const isValid = value === '' ? false : true;

        input.dispatchEvent(new CustomEvent(
            'input-completed', {
                detail: { 
                    index: index, 
                    isValid: isValid, 
                    value: value 
                },
                bubbles: true,
                composed: true
            }
        ));
    }

    // Metodo para mostrar la notificacion llamando al componente notificacion.
    _showNotification(icon, notificationMessage) {
        const container = document.querySelector('notification-modal');
        if(container) {
            container.openModal(); // abrimos el componente notification con su metodo.
            container.notification(icon, notificationMessage); // insertamos la notificacion del formulario.
        }
    }

    render() {
        return html`
            <form>
                <!-- Mostrar errores al usuarios -->
                <div id="errors" role="alert" aria-live="assertive"></div>

                <!--Campo para el nombre del usuario-->
                <div class="form-group">
                    <label for="name-input">${userIcon} Nombre:</label>
                    
                    <input 
                        @input=${() => this._isCompletedInput("name-input")} 
                        data-index="${0}" 
                        type="text" 
                        id="name-input" 
                        name="name-input" 
                        aria-describedby="name-input-error" 
                        required
                        title="Por favor, ingrese un nombre valido usando solo letras."
                    >
                    <span id="name-input-error" class="error-message"></span>
                </div>

                <!--Campo para el correo electronico del usuario-->
                <div class="form-group">
                    <label for="email-input">${emailIcon} Correo:</label>
                    <input 
                        id="email-input" 
                        data-index="${1}" 
                        @input=${() => this._isCompletedInput("email-input")} 
                        type="email" 
                        name="email-input" 
                        aria-describedby="email-input-error" 
                        required
                        title="Por favor, ingrese un correo valido."
                    >
                    <span id="email-input-error" class="error-message"></span>
                </div>

                <!--Campo para el mensaje del usuario-->
                <div class="form-group">
                    <label for="message-input">${messageIcon} Mensaje:</label>
                    <textarea 
                        id="message-input" 
                        data-index="${2}" 
                        @input=${() => this._isCompletedInput("message-input")} 
                        name="message-input" 
                        rows="2" aria-describedby="message-input-error" 
                        required
                        title="Por favor, ingrese su mensaje."
                    ></textarea>
                    <span id="message-input-error" class="error-message"></span>
                </div>

                <!-- Recaptcha de google -->
                <div class="g-recaptcha" data-sitekey="your-site-key"></div>

                <!-- Boton para enviar el formulario -->
                <button id="submit" @click=${this._sendForm} type="submit" ?disabled="${!this._isEnable}">Enviar</button>
            </form> 
            <button-close id="closeForm"></button-close>
        `;
    }

    openForm() {
        this.classList.add('visible');
    }
    _closeForm() {
        this.classList.remove('visible');
    }

    _verifyInput() {
        this._isEnable = this._validationStates.every((state) => state.isValid);
    }

    _sendForm () {
        this._form = this.shadowRoot.querySelector("form");
        this._nameInput = this.shadowRoot.getElementById("name-input");
        this._emailInput = this.shadowRoot.getElementById("email-input");
        this._messageInput = this.shadowRoot.getElementById("message-input");
        this._submitBtn = this.shadowRoot.getElementById("submit");

        this._form.addEventListener("submit", (event) => {
            // evitamos que el formulario se envie por defecto.
            event.preventDefault();

            // obtenemos el div que mostrara los errores en el formulario y lo iniciamos vacio.
            let errorsDiv = this.shadowRoot.getElementById("errors");
            errorsDiv.innerHTML = "";

            // Obtenemos los errores
            if (!this._form.checkVisibility()) {
                // iteramos en los elementos principales del formulario con "elements"
                [...this._form.elements].forEach((input) => {
                    // validamos que el input este vacio
                    if (!input.checkValidity()) {
                        // obtenemos el span de cada elemento
                        let errorSpan = this.shadowRoot.getElementById(`${input.id}-error`);
                        // a su span le agregamos el mensaje de error que tiene el input por estar vacio.
                        errorSpan.textContent = input.validationMessage;
                        // le asignamos la clase "error" al input
                        input.classList.add("error");
                    }
                });
                return;
            };

            const base = "app72qPFLrR2Asym4";
            const table = "tblAR3XGRyj3JdDEm";
            const token = "patOAfocbV4jBXfup.1c8b0a18eff5467231fce879664f5e5285a4207824a0d63428bf367f94a57483";
            const airtableURL = `https://api.airtable.com/v0/${base}/${table}`;

            let clientName = this._nameInput.value;
            let clientEmail = this._emailInput.value;
            let clientSource = this._detectDevice();
            let clientDate = this._getDatePanama();
            let clientMessage = this._messageInput.value;

            // estructura de datos para Airtable
            const clientData = {
                records: [
                    {
                        fields: {
                            name: clientName,
                            email: clientEmail,
                            source: clientSource,
                            date: clientDate,
                            message: clientMessage,
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
                body: JSON.stringify(clientData),
            };

            try {
                // capturamos los datos para enviarse
                fetch(airtableURL, headers)
                    .then((res) => {
                        // validamos que si hay un error
                        if (!res.ok) throw new Error("Nope");
                        return res.json();
                    });

                // reseteamos el formulario
                this._showNotification('sent', this._notificationMessageSent);
                this._form.reset();
            } catch (error) {
                // mostramos el error en el modal de notificaciones
                this._showNotification('error', this._notificationMessageError);
                console.error(error);
            }
        });
    }
}
customElements.define('form-contact', FormContact);
