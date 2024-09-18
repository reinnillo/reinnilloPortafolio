// archivo: contact-info.js
// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { ProfileContact } from './ProfileContent.js';


class ContactInfo extends LitElement {
    static styles = css`
        .contact-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 20px;
            background: rgba(0, 0, 0,0.5);
            border-radius: 10px;
            height: 100%;
        }
        .contact-details, .resources {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .cta-buttons {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }
        .cta-button {
            padding: 10px 20px;
            border: none;
            background: var(--icon-color);
            color: white;
            cursor: var(--cursor);
            border-radius: 5px;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        .cta-button:hover {
            background: var(--light);
            box-shadow: var(--shadow-02);
        }
        .resource-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .resource-links a {
            text-decoration: none;
            color: #6e4ab7;
            font-weight: bold;
            cursor: var(--cursor);
        }
    `;
    
    constructor() {
        super();
        this.phone = ProfileContact.find(social => social.name === 'Telefono');
        this.message = ProfileContact.find(social => social.name === 'WhatsApp');
    }

    _call() {
        window.location.href = this.phone.href;
    }
    _sendMessage() {
        window.location.href = this.message.href;
    }
    
    render() {
        return html`
            <div class="contact-container">

                <div class="contact-details">
                    <a><strong>Dirección:</strong> Santiago de Veraguas, Panamá</a>
                    <a><strong>Teléfono:</strong> +507 6705 3532</a>
                    <a><strong>Email:</strong> 30todev@gmail.com</a>
                </div>

                <div class="cta-buttons">
                    <button @click="${this._call}" class="cta-button">Llamar Ahora</button>
                    <button @click="${this._sendMessage}" class="cta-button">Enviar Mensaje</button>
                </div>

                <div class="resources">
                    <h3>Recursos Útiles</h3>
                    <div class="resource-links">
                        <!-- <a href="#">Redes Sociales</a> -->
                        <a href="https://platzi.com/p/reinnillo/">Referencias de Cursos en Tecnologia - Platzi -</a>
                    </div>
                </div>

            </div>
        `;
    }
}

customElements.define('contact-info', ContactInfo);
