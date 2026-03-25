// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from 'lit';

export class MessageForm extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                justify-content: center;
                width: 60vw;
                height: auto;
                overflow: hidden;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(1rem);
                border-radius: var(--b-radius-large);
                border: none;
                padding: 0;
                /* Popover API oculta el elemento por defecto con display:none */
            }

            /* Backdrop nativo del Popover — sin JS extra */
            :host::backdrop {
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(3px);
            }

            .info-container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                padding: 0 1.5rem 1rem 1.5rem;
                width: 100%;
                height: 100%;
            }
            .info-box {
                width: 50%;
                color: var(--light);
            }
            #message-for-formModal {
                margin: 1.5rem 0;
            }

            :host #closeModal {
                position: absolute;
                top: 0;
                right: 0;
            }

            @media (max-width: 998px) {
                :host {
                    width: 90vw;
                    max-height: 85vh;
                }
                .info-container .info-box {
                    display: none;
                }
            }
        `
    ];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Activar Popover API con fallback automático
        if ('popover' in HTMLElement.prototype) {
            this.setAttribute('popover', 'auto');
        }

        this.addEventListener("close-modal", (event) => {
            if (event.detail === "close") {
                this._closeModal();
                event.stopPropagation();
            }
        });
    }

    render() {
        return html`
            <div class="info-container">
                <div class="info-box">
                    <div id="message-for-formModal">
                        <h3>¿Tienes alguna consulta?</h3>
                        <p>Si necesitas más información sobre mis proyectos o tienes alguna consulta rápida,
                            utiliza este formulario para ponerte en contacto conmigo.
                        </p>
                        <p>No dudes en preguntar cualquier cosa sobre mi trabajo o colaboración en proyectos.</p>
                    </div>
                </div>
                <form-contact></form-contact>
            </div>
            <button-close id="closeModal"></button-close>
        `;
    }

    openModal() {
        if ('showPopover' in this) {
            this.showPopover();
        } else {
            // Fallback para navegadores sin Popover API
            this.classList.add('visible');
        }
    }

    _closeModal() {
        if ('hidePopover' in this) {
            this.hidePopover();
        } else {
            this.classList.remove('visible');
        }
    }
}
customElements.define('message-form', MessageForm);
