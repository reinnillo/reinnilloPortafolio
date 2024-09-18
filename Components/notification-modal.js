import { LitElement, html, css } from 'lit';
// import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { notificationIcon, messageErrorIcon, messageSendIcon } from './icons.js';

export class NotificationModal extends LitElement {
    static styles = [
        css`
            :host {
                display: none;
                position: absolute;
            }
            :host(.active){
                display: block;
                width: 30%;
                height: 30%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 7000;
            }

            .notification-overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: var(--b-radius-large);
                background: var(--darkGlass);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 6000;
                box-shadow: var(--shadow-01);
                cursor: grab;
            }
            .notification-overlay:active {
                cursor: grabbing;
            }

            .notification-content {
                background: var(--light);
                padding: 2rem;
                border-radius: var(--b-radius-medium);
                width: 80%;
                text-align: center;
                max-width: 300px;
                box-shadow: var(--shadow-00);
                position: relative;
                color: var(--dark);
                font-weight: 600;
            }
            /* boton de cierre */
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
            }
            /* icono de modal notificacion */
            .notification-overlay .notification-content svg {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                fill: #7e66b13b;
            }
            /* icono de notificacion */
            .notification-overlay .notification-content p svg {
                width: 1.5rem;
                height: 1.5rem;
                fill: var(--icon-color);
                position: initial;
            }
        `
    ];

    static properties = {
        isOpen: { type: Boolean },
        notificationMessage: { type: String },
        
        isDragging: { type: Boolean },
        startX: { type: Number }, 
        startY: { type: Number }, 
        initialX: { type: Number }, 
        initialY: { type: Number },
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        this.notificationMessage = '';
        this.addEventListener("close-modal", (event) => {
            if (event.detail === 'close') {
                this.isOpen = false;
                event.stopPropagation();
            }
        });

        // Propiedades para el drag
        this.isDragging = false;
        this.startX, this.startY, this.initialX, this.initialY;
        this.addEventListener("mousedown", (e) => {
            this.isDragging = true;
            
            // Guardamos la posición inicial del mouse y la posición inicial del modal
            this.startX = e.clientX;
            this.startY = e.clientY;
            this.initialX = this.offsetLeft;
            this.initialY = this.offsetTop;
            
            // Añadir eventos al mover el mouse
            this.addEventListener("mousemove", this.drag.bind(this));
            this.addEventListener("mouseup", this.stopDrag.bind(this));
        });
    }

    notification(icon='', message) {
        if (icon === 'sent') this._notificationMessage = html`${notificationIcon} <p>${messageSendIcon} ${message}</p>`;
        if (icon === 'error') this._notificationMessage = html`${notificationIcon} <p>${messageErrorIcon} ${message}</p>`;
        if (icon === '') this._notificationMessage = html`${notificationIcon} <p>${message}</p>`;
    }

    render() {
        return html`
            ${this.isOpen
                ? html`
                    <div class="notification-overlay">
                        <div class="notification-content">
                            ${this._notificationMessage}
                            <button-close class="close-button"></button-close>
                        </div>
                    </div>
                `
                : 
                ''
            }
        `;
    }

    openModal() {
        this.isOpen = true;
        this.classList.add('active');
    }
    closeModal() {
        this.isOpen = false;
        this.classList.remove('active');
    }

    // metodos que ejecuta el arrastre
    drag(e) {
        if (this.isDragging && this.classList.contains('active') && this.isOpen) {
            // Calcular el nuevo desplazamiento
            let ndx = e.clientX - this.startX;
            let ndy = e.clientY - this.startY;
            
            // Actualizar la posición del modal
            this.style.left = this.initialX + ndx + "px";
            this.style.top = this.initialY + ndy + "px";
        }
    }

    // metodos para detener el arrastre
    stopDrag() {
        this.isDragging = false;
        
        // Remover los eventos cuando se suelta el mouse
        this.removeEventListener("mousemove", this.drag.bind(this));
        this.removeEventListener("mouseup", this.stopDrag.bind(this));
    }
}
customElements.define('notification-modal', NotificationModal);
