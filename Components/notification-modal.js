// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { notificationIcon, messageErrorIcon, messageSendIcon } from './icons.js';

export class NotificationModal extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                position: relative;
            }
            .notification-overlay {
                position: fixed;
                width: 35%;
                height: 50%;
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
        _notificationMessage: { type: String },
    }

    constructor() {
        super();
        this.isOpen = false;
        this._notificationMessage = '';
        this.addEventListener("close-modal", (event) => {
            if (event.detail === 'close') {
                this.isOpen = false;
                event.stopPropagation();
            }
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
    }
    closeModal() {
        this.isOpen = false;
    }
}
customElements.define('notification-modal', NotificationModal);
