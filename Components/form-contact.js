// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { userIcon, messageIcon, emailIcon} from './icons.js';

export class FormContact extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                justify-content: center;
            }
            form {
                height: 100%;
                display: flex;
                flex-direction: column;
                text-align: left;
                position: relative;
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
                width: fit-content;
            }
            .form-group label {
                font-size: 1rem;
                color: var(--light);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
                width: fit-content;
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
                min-width: 30em;
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
                cursor: var(--cursor);
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

            form .progress-bar {
                position: absolute;
                top: 0;
                left: 1%;
                height: 0.3rem;
                width: 83%;
                overflow: hidden;
                background: var(--clr-progress-bar-outside);
            }
            form .progress-bar .progress-bar-inside {
                position: absolute;
                height: 100%;
                width: 0;
                background: var(--clr-progress-bar-inside);
                transition: width 0.3s;
            }
            form .progress-bar .width-bar {
                width: calc(100% / 3);
            }

            @media (max-width: 992px) {
                form {
                    width: 90% !important;
                }
                /* inputs y textareas */
            .form-group input[type="text"],
            .form-group input[type="email"],
            .form-group textarea {
                min-width: 13em;
            }
            }            
            @media (max-width: 768px) {
                :host {
                    transform: none;
                    width: 90% !important;
                }
                /* inputs y textareas */
            .form-group input[type="text"],
            .form-group input[type="email"],
            .form-group textarea {
                min-width: 13em;
            }
            }
            @media (max-width: 480px) {
                
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
        this._isEnable = this._validationStates.every((state) => state.isValid);
    }

    // Metodo para actualizar la barra de progreso

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
    // Metodo para sanitizar inputs antes de enviarlos
    _sanitize(value, maxLength = 1000) {
        return value
            .trim()
            .replace(/<[^>]*>/g, '')      // elimina etiquetas HTML
            .replace(/[<>"'`]/g, '')       // elimina caracteres peligrosos restantes
            .substring(0, maxLength);
    }

    // Metodo para emitir el estado de los eventos input
    _isCompletedInput(inputID) {
        const input = this.shadowRoot.getElementById(inputID);
        const index = input.dataset.index;
        const value = input.value;
        const isValid = input.value.trim() !== '';

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
            <form id="quickContactForm">
                <div class="progress-bar"> <div clas="progress-bar-inside"></div> </div>

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
                        maxlength="100"
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
                        maxlength="254"
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
                        rows="2"
                        aria-describedby="message-input-error"
                        required
                        maxlength="2000"
                        title="Por favor, ingrese su mensaje."
                    ></textarea>
                    <span id="message-input-error" class="error-message"></span>
                </div>

                <!-- Honeypot antispam: campo invisible — los bots lo rellenan, los humanos no -->
                <input
                    type="text"
                    id="hp-field"
                    name="website"
                    autocomplete="off"
                    tabindex="-1"
                    aria-hidden="true"
                    style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;"
                >

                <!-- Boton para enviar el formulario -->
                <button id="submit" @click=${this._sendForm} type="submit" ?disabled="${!this._isEnable}">Enviar</button>
            </form>
        `;
    }

    async _sendForm(event) {
        event.preventDefault();

        this._form       = this.shadowRoot.querySelector("form");
        this._nameInput  = this.shadowRoot.getElementById("name-input");
        this._emailInput = this.shadowRoot.getElementById("email-input");
        this._messageInput = this.shadowRoot.getElementById("message-input");
        this._submitBtn  = this.shadowRoot.getElementById("submit");

        // — Honeypot: si el campo oculto tiene valor, es un bot —
        const honeypot = this.shadowRoot.getElementById("hp-field");
        if (honeypot && honeypot.value !== '') {
            // silenciosamente "fingimos" éxito para no alertar al bot
            this._showNotification('sent', this._notificationMessageSent);
            this._form.reset();
            return;
        }

        // — Limpiar errores previos —
        const errorsDiv = this.shadowRoot.getElementById("errors");
        errorsDiv.innerHTML = "";

        // — Validación HTML5 —
        let hasErrors = false;
        [...this._form.elements].forEach((input) => {
            if (input.id && !input.checkValidity()) {
                const errorSpan = this.shadowRoot.getElementById(`${input.id}-error`);
                if (errorSpan) errorSpan.textContent = input.validationMessage;
                input.classList.add("error");
                hasErrors = true;
            }
        });
        if (hasErrors) return;

        // — Sanitizar valores antes de enviar —
        const clientName    = this._sanitize(this._nameInput.value, 100);
        const clientEmail   = this._sanitize(this._emailInput.value, 254);
        const clientMessage = this._sanitize(this._messageInput.value, 2000);
        const clientSource  = this._detectDevice();
        const clientDate    = this._getDatePanama();

        const base  = import.meta.env.VITE_AIRTABLE_CONTACT_BASE;
        const table = import.meta.env.VITE_AIRTABLE_CONTACT_TABLE;
        const token = import.meta.env.VITE_AIRTABLE_CONTACT_TOKEN;
        const airtableURL = `https://api.airtable.com/v0/${base}/${table}`;

        const clientData = {
            records: [{
                fields: {
                    name: clientName,
                    email: clientEmail,
                    source: clientSource,
                    date: clientDate,
                    message: clientMessage,
                },
            }],
        };

        // — Deshabilitar botón durante el envío —
        this._submitBtn.disabled = true;

        try {
            const res = await fetch(airtableURL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(clientData),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            this._showNotification('sent', this._notificationMessageSent);
            this._form.reset();
            this._validationStates = [];
            this._isEnable = false;
        } catch (error) {
            this._showNotification('error', this._notificationMessageError);
            console.error(error);
        } finally {
            this._submitBtn.disabled = false;
        }
    }
}
customElements.define('form-contact', FormContact);
