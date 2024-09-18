import { LitElement, html, css } from 'lit';

export class ImpactStats extends LitElement {
    static properties = {
        stats: { type: Array }, // Array de estadísticas con título, frase y número objetivo
        currentIndex: { type: Number }, // Índice actual de la tarjeta visible
    };

    constructor() {
        super();
        this.stats = [
            { title: 'Proyectos Completados', phrase: 'Cada línea de código cuenta.', number: 45 },
            { title: 'Cafés Consumidos', phrase: 'El combustible de los desarrolladores.', number: 350 },
            { title: 'Horas Programando', phrase: 'Solo los valientes llegan tan lejos.', number: 1500 },
        ];
        this.currentIndex = 0;
        this.currentProgress = 0;
    }

    // Función que se ejecuta cuando se cambia de tarjeta
    changeCard(direction) {
        const totalCards = this.stats.length;
       
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % totalCards;
        } else {
            this.currentIndex = (this.currentIndex - 1 + totalCards) % totalCards;
        }

        this.animateProgressBar(); // Inicia la animación de la barra de progreso al cambiar de tarjeta
    }

    // Función para animar la barra de progreso desde 0 hasta el número objetivo
    animateProgressBar() {
        this.currentProgress = 0; // Reseteamos el progreso antes de iniciar la animación
        const targetNumber = this.stats[this.currentIndex].number;
        
        const incrementProgress = () => {
            if (this.currentProgress < targetNumber) {
                this.currentProgress += 10; // Incrementamos el progreso en 1
                this.requestUpdate(); // Actualizamos el componente
                setTimeout(incrementProgress, 10); // Controlamos la velocidad de la animación (30 ms por incremento)
            }
        };

        incrementProgress(); // Inicia la animación
    }

    // Renderiza la barra de progreso, que se llena y muestra el número incrementando
    renderProgressBar() {
        const currentStat = this.stats[this.currentIndex];
        const progressPercentage = (this.currentProgress / currentStat.number) * 100;

        return html`
            <div class="progress-container">
                <svg class="icon-placeholder"></svg> <!-- SVG que puedes personalizar -->
                <div class="progress-bar">
                <div class="fill" style="width: ${progressPercentage}%"></div> <!-- Barra de progreso animada -->
                <span class="number">${this.currentProgress}</span> <!-- Número que se incrementa -->
                </div>
            </div>
        `;
    }

    // Renderiza los botones de navegación y los indicadores de las tarjetas
    renderNavigation() {
        return html`
            <div class="navigation">
                <button @click="${() => this.changeCard('prev')}">Prev</button>
                <div class="indicators">
                    ${this.stats.map((_, index) => html`
                        <span class="dot ${index === this.currentIndex ? 'active' : ''}"></span>
                    `)}
                </div>
                <button @click="${() => this.changeCard('next')}">Next</button>
            </div>
        `;
    }

    render() {
        const currentStat = this.stats[this.currentIndex];

            return html`
                <div class="container">
                    <h2>${currentStat.title}</h2> <!-- Título de la tarjeta -->
                    <p class="phrase">${currentStat.phrase}</p> <!-- Frase inspiradora o humorística -->
                    ${this.renderProgressBar()} <!-- Barra de progreso -->
                    ${this.renderNavigation()} <!-- Botones de navegación y puntos indicadores -->
                </div>
            `;
        }

    static styles = css`
        :host {
            display: block;
            position: relative;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
        }
            
        .container {
            position: relative;
            padding: 20px;
            text-align: center;
            background-color: var(--bg-transparent-color);
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        /* Animación suave para las tarjetas */
        .container {
            opacity: 1;
            animation: slide-in 0.5s forwards;
        }

        @keyframes slide-in {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        h2 {
            margin: 0;
            font-size: 24px;
            color: var(--light);
        }

        .phrase {
            font-size: 14px;
            color: var(--light);
            margin-bottom: 20px;
        }

        .progress-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        .icon-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.1;
            width: 100%;
            height: 100%;
        }

        .progress-bar {
            width: 100%;
            background: var(--clr-progress-bar-outside);
            border-radius: 20px;
            overflow: hidden;
            position: relative;
        }
        .fill {
            height: 1.5rem;
            background: var(--clr-progress-bar-inside);
            border-radius: var(--b-radius-large);
            transition: width 1s ease;
        }

        .number {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1rem;
            color: var(--dark);
            font-weight: bold;
        }

        .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .indicators {
            display: flex;
            gap: 5px;
        }
        .dot {
            width: 10px;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .dot.active {
            background: var(--light);
            transform: scale(1.3);
        }

        button {
            background-color: transparent;
            border: none;
            font-size: 16px;
            font-weight: bold;
            color: var(--icon-color);
            cursor: var(--cursor);
            padding: 10px;
        }
        button:hover {
            color: var(--text-btn-color);
        }
    `;
}

// Registrar el componente
customElements.define('impact-stats', ImpactStats);
