// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from 'lit';
import { notificationIcon, messageErrorIcon, messageSendIcon } from './icons.js';

export class NotificationModal extends LitElement {
    static styles = [
        css`
            :host {
                display: contents;
            }

            dialog {
                border: none;
                border-radius: var(--b-radius-large);
                background: var(--darkGlass);
                padding: 0;
                max-width: 320px;
                width: 90%;
                box-shadow: var(--shadow-01);
                cursor: grab;
            }
            dialog:active {
                cursor: grabbing;
            }
            dialog::backdrop {
                background: rgba(0, 0, 0, 0.4);
                backdrop-filter: blur(2px);
            }

            .notification-content {
                background: var(--light);
                padding: 2rem;
                border-radius: var(--b-radius-medium);
                text-align: center;
                box-shadow: var(--shadow-00);
                position: relative;
                color: var(--dark);
                font-weight: 600;
            }
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
            }
            .notification-content svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                fill: #7e66b13b;
            }
            .notification-content p svg {
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
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        this._dialog = null;

        this.addEventListener("close-modal", (event) => {
            if (event.detail === 'close') this.closeModal();
        });
    }

    firstUpdated() {
        this._dialog = this.shadowRoot.querySelector('dialog');

        // Cerrar al hacer click en el backdrop (fuera del contenido)
        this._dialog?.addEventListener('click', (e) => {
            if (e.target === this._dialog) this.closeModal();
        });

        // Drag dentro del dialog
        this._dialog?.addEventListener('mousedown', (e) => {
            const startX = e.clientX - this._dialog.offsetLeft;
            const startY = e.clientY - this._dialog.offsetTop;

            const onMove = (ev) => {
                this._dialog.style.marginLeft = `${ev.clientX - startX}px`;
                this._dialog.style.marginTop  = `${ev.clientY - startY}px`;
            };
            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });
    }

    notification(icon = '', message) {
        if (icon === 'sent')  this._notificationMessage = html`${notificationIcon} <p>${messageSendIcon} ${message}</p>`;
        if (icon === 'error') this._notificationMessage = html`${notificationIcon} <p>${messageErrorIcon} ${message}</p>`;
        if (icon === '')      this._notificationMessage = html`${notificationIcon} <p>${message}</p>`;
    }

    render() {
        return html`
            <dialog aria-modal="true" aria-live="polite">
                <div class="notification-content">
                    ${this._notificationMessage}
                    <button-close class="close-button"></button-close>
                </div>
            </dialog>
        `;
    }

    openModal() {
        this.isOpen = true;
        this.updateComplete.then(() => {
            this._dialog = this.shadowRoot.querySelector('dialog');
            this._dialog?.showModal();
        });
    }

    closeModal() {
        this._dialog?.close();
        this.isOpen = false;
    }
}
customElements.define('notification-modal', NotificationModal);
