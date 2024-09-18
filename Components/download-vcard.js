// archivo: download-vcard.js
// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { downloadIcon } from './icons.js';

class DownloadVCard extends LitElement {
    static styles = css`
        .download-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            align-items: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            text-align: center;
            height: 100%;
        }
        .buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 1rem;
        }
        .download-button {
            padding: 10px 20px;
            background: #7f5ccb;
            color: var(--text-color);
            border: none;
            border-radius: var(--b-radius-small);
            cursor: var(--cursor);
            font-size: 16px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .buttons .download-button svg {
            fill: var(--text-color);
        }
        .buttons .download-button:hover svg {
            fill: var(--dark);
        }
        .download-button:hover {
            background: var(--light);
            box-shadow: var(--shadow-02);
        }
    `;

    createVCard() {
        const vCardData = `
            BEGIN:VCARD
            VERSION:3.0
            N:Apellido;Nombre;;;
            FN:Alexander David Reina Pinillo
            ORG:reinnillo
            TEL;TYPE=work,voice;VALUE=uri:tel:+50767053532
            EMAIL:30todev@gmail.com
            ADR;TYPE=WORK:;;Santiago;Veraguas;;;Panamá
            URL:https://reinnillo.github.io/reinnilloPortafolio/
            END:VCARD
        `;
    
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contacto.vcf';
        a.click();
        
        URL.revokeObjectURL(url);
    }

    createCV() {
        const a = document.createElement('a');
        a.href = './asset/cv/Alexander_Reina_CV.pdf';
        a.download = 'Alexander_Reina_CV.pdf';
        a.ariaLabel = 'download cv Alexander Reina';
        a.click();
    }

    render() {
        return html`
            <div class="download-container">
                <h3>Descargar Información de Contacto</h3>
                <div class="buttons">
                    <button class="download-button" @click="${this.createVCard}">${downloadIcon}Descargar vCard</button>
                    <button class="download-button" @click="${this.createCV}">${downloadIcon}Descargar CV</button>
                </div>
            </div>
        `;
    }
}

customElements.define('download-vcard', DownloadVCard);
