import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
// import { LitElement, html, css } from 'lit';

class WorkProcessSection extends LitElement {
    static styles = css`
        :host {
            display: block;
            font-family: Arial, sans-serif;
            margin: 0 auto;
            width: 100%;
        }
        .title {
            text-align: center;
            width: 100%;
            color: var(--text-color);
            font-size: 2rem;
            line-height: normal;
        }

        .container {
            display: flex;
            position: relative;
            overflow: hidden;
            gap: 1rem;
            padding: 1.5rem;
            background: var(--bg-transparent-color);
            border-radius: var(--b-radius-medium);
        }

        /* Left side: Titles */
        .titles {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1.5rem;
            position: relative;
            align-items: stretch;
            text-align: left;
        }

        .title-item {
            position: relative;
            padding: 0.5rem;
            font-size: 1rem;
            cursor: var(--cursor);
            overflow: hidden;
            transform: scale(1);
            border: solid 1px transparent;
            border-radius: var(--b-radius-medium);
        }
        /* animacion para el gradiente de fondo del titulo */
        .title-item:hover,
        .title-item[aria-disabled = true] {
            border-color: var(--clr-progress-bar-outside);
            background: linear-gradient(90deg, transparent, var(--light), transparent);
            background-size: 200% 200%; /* Esto hará que el gradiente se desplace */
            animation: gradient 5s ease infinite;
            transform: scale(1.04);
            transition: all 0.3s ease;
        }

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        /* Right side: Text content */
        .content {
            flex: 2;
            position: relative;
            padding: 1.5rem;
            border-left: solid var(--clr-progress-bar-outside);
            text-align: justify;
            display: flex;
            align-items: center;
        }

        .text {
            display: none;
            position: absolute;
            margin: 0.5rem 0;
            padding: 0.5rem;
        }
        .text li {
            margin-bottom: 1rem;
            list-style-type: disc;
        }

        .text.active {
            display: block;
        }
    `;

    static properties = {
        currentStep: { type: Number },
        hoverTitle: { type: Boolean },
    };

    constructor() {
        super();
        this.currentStep = 0;
        this.hoverTitle = false;
    }

    setActiveStep(event, index) {
        this.currentStep = index;
        const target = event.target;
        const parent = target.parentElement;
        Array.from(parent.children).forEach(child => child !== target ? child.ariaDisabled = this.hoverTitle: child.ariaDisabled = !this.hoverTitle);
    }

    render() {
        return html`
            <h2 class="title">Mi Proceso de Trabajo: De la Idea a la Entrega del Proyecto</h2>
            <div class="container">
                <!-- Titles Column -->
                <div class="titles">
                    ${this.renderTitle('Primer Contacto:', 0)}
                    ${this.renderTitle('Investigación y Propuesta:', 1)}
                    ${this.renderTitle('Planificación:', 2)}
                    ${this.renderTitle('Desarrollo:', 3)}
                    ${this.renderTitle('Revisión y Ajustes:', 4)}
                    ${this.renderTitle('Optimización y Entrega:', 5)}
                    ${this.renderTitle('Soporte Post-Proyecto:', 6)}
                </div>

                <!-- Text Content Column -->
                <div class="content">

                    <div class="text ${this.currentStep === 0 ? 'active' : ''}">
                        El proceso comienza con una reunión inicial, ya sea por videollamada o a través de un intercambio de correos, donde escucho detalladamente los objetivos del cliente. En esta etapa me aseguro de comprender completamente las necesidades del proyecto, los plazos, y las expectativas generales. Hago preguntas clave para clarificar qué resultados busca el cliente y cuál es el propósito del producto. Este paso es esencial para garantizar que ambos estemos alineados.
                    </div>

                    <div class="text ${this.currentStep === 1 ? 'active' : ''}">
                        Con la información recabada, paso a investigar y analizar el mercado o el tipo de solución que el cliente necesita. Esto incluye revisar referencias, explorar tecnologías o herramientas que se adapten mejor a las necesidades del proyecto y preparar una propuesta detallada. La propuesta generalmente incluye una descripción del trabajo a realizar, plazos estimados, y el coste. En esta fase me aseguro de ofrecer opciones personalizadas y flexibles para cumplir con las expectativas del cliente.
                    </div>

                    <div class="text ${this.currentStep === 2 ? 'active' : ''}">
                        Una vez que la propuesta es aprobada, empiezo con la planificación detallada del proyecto. Creo un cronograma de trabajo que divide el proyecto en fases, definiendo los hitos clave. En proyectos web, por ejemplo, divido las tareas en fases como diseño de interfaz, desarrollo front-end, y pruebas. Me aseguro de establecer canales de comunicación claros y frecuentes con el cliente para evitar malentendidos durante la ejecución.
                    </div>

                    <div class="text ${this.currentStep === 3 ? 'active' : ''}">
                        Aquí es donde la mayor parte del trabajo técnico se realiza. Comienzo a escribir el código, ya sea construyendo la interfaz en HTML, CSS, JavaScript, o utilizando tecnologías como LitElement o React, según el proyecto. Durante esta fase, mantengo al cliente informado sobre el progreso, mostrando avances parciales o iteraciones del trabajo. Esto permite al cliente hacer ajustes o dar feedback sobre cambios, lo que ayuda a mantener el proyecto en la dirección correcta.
                    </div>

                    <div class="text ${this.currentStep === 4 ? 'active' : ''}">
                        Cuando el desarrollo está cerca de finalizar, realizo una serie de revisiones para pulir detalles y corregir errores. También involucro al cliente en este proceso, mostrándole versiones casi terminadas para garantizar que el resultado esté alineado con sus expectativas. Los ajustes y cambios se manejan rápidamente en esta fase, asegurando que el producto final sea óptimo tanto en funcionalidad como en diseño.
                    </div>

                    <div class="text ${this.currentStep === 5 ? 'active' : ''}">
                        Una vez que el producto ha sido completado y cumple con todos los requisitos acordados, procedo a la entrega final. Proveo al cliente con todos los archivos necesarios, como código fuente, documentación y cualquier recurso adicional que se haya generado durante el proyecto. En esta etapa me aseguro de que el cliente tenga todo lo necesario para gestionar el producto de manera independiente si así lo desea.
                    </div>

                    <div class="text ${this.currentStep === 6 ? 'active' : ''}">
                        Después de la entrega, ofrezco un periodo de soporte post-proyecto. Esto incluye resolver posibles dudas que el cliente pueda tener sobre el uso del producto, corregir errores menores que puedan surgir, o realizar pequeños ajustes. Esta fase es crucial para garantizar la satisfacción del cliente y asegurar que todo funcione perfectamente después de la implementación.
                    </div>
                </div>
            </div>
        `;
    }

    renderTitle(title, index) {
        return html`
            <div class="title-item sele" aria-disabled="${index === 0 ? !this.hoverTitle : this.hoverTitle}" @mouseenter="${(event) => this.setActiveStep(event, index)}">
                ${title}
            </div>
        `;
    }
}

customElements.define('work-process-section', WorkProcessSection);
