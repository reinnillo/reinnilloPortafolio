// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";


export class SectionContact extends LitElement {
    static styles = [
        css`
            .contact-container {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto repeat(2, 1fr) auto repeat(2, 1fr);
                align-items: start;
                gap: 2rem;
            }
            /* 1 */    
            .title-contact {
                grid-column: span 2 / span 2;
                font-size: 4rem;
            }
            /* 2 */ 
            .cards-contact {
                grid-column: span 2 / span 2;
                grid-row-start: 2;
            }
            .cards-contact > contact-info, .cards-contact > download-vcard {
                width: calc(50% - 1rem);
                height: 100%;
            }
            .cards-contact, .form {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                gap: 2rem;
            }
            /* 3 */ 
            .form {
                grid-column: span 2 / span 2;
                grid-row-start: 3;
                align-items: center;
                flex-direction: column;
            }
            .form .title-formulary {
                font-size: 2rem;
            }
            .form form-contact {
                width: 80%;
            }

            /* 4 */ 
            .title-experience-methods {
                grid-column: span 2 / span 2;
                grid-row-start: 4;
                font-size: 3rem;
            }
            /* 5 */ 
            faq-social-reviews {
                grid-column: span 2 / span 2;
                grid-row-start: 5;
            }
            /* 6 */ 
            work-process-section {
                grid-column: span 2 / span 2;
                grid-row-start: 6;
            }
        
            @media (max-width: 768px) {
                .contact-container {
                    grid-template-rows: repeat(2, auto);
                }
                .cards-contact {
                    flex-direction: column;
                }
                .cards-contact > contact-info, .cards-contact > download-vcard {
                    width: 100%;
                }
                .contact-container h2 {
                    line-height: initial;
                }
            }
        `
    ];

    render() {
        return html`
            
            <div class="contact-container">
                <h2 class="title-contact">Ponte en Contacto Conmigo</h2>

                <div class="cards-contact">
                    <!-- Información de Contacto -->
                    <contact-info></contact-info>

                    <!-- Descargar vCard -->
                    <download-vcard></download-vcard>
                </div>
     
                <div class="form">
                    <!-- Formulario de Contacto -->
                    <h2 class="title-formulary">Formulario</h2>
                    <form-contact></form-contact>
                </div>

                <h2 class="title-experience-methods">Tu Experiencia y Mis Métodos</h2>

                <!-- Preguntas Frecuentes, Reseñas y Redes Sociales -->
                <faq-social-reviews></faq-social-reviews>
                
                <!-- procesos de trabajo -->
                <work-process-section id="experience-methods"></work-process-section>

            </div>
        `;
    }
}
customElements.define('section-contact', SectionContact);
