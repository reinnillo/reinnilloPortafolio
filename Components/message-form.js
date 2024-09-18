// import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { LitElement, html, css } from 'lit';

export class MessageForm extends LitElement {
    static styles = [
        css`
            :host {
                display: none;
                transform: translate(20vw, 10vh);
                width: 60vw;
                height: auto;
                overflow: hidden;
                background: rgba(0, 0, 0,0.5); 
                backdrop-filter: blur(1rem);
                position: absolute; 
                top: 0;
                left: 0;
                z-index: 5000;
                border-radius: var(--b-radius-large);
            }
            :host(.visible) {
                display: flex;
                justify-content: center;
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
            
            /* componente Boton para cerrar el formulario */
            :host #closeModal {
                position: absolute;
                top: 0;
                right: 0;
            }

            @media (max-width: 998px) {
                :host {
                    transform: translate(5vw, 9vh);
                    width: 90vw;
                    height: 85vh;
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
        this.addEventListener("close-modal", (event) => {
            if(event.detail === "close") {
                this._closeModal()
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
                            utiliza este formulario para para ponerte en contacto conmigo.
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
        this.classList.add('visible');
    }
    _closeModal() {
        this.classList.remove('visible');
    }

}
customElements.define('message-form', MessageForm);
