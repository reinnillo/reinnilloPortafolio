
import { LitElement, html, css } from 'lit';
//import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class AnimatedBackground extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block; /* Hace que el componente ocupe todo el espacio de su contenedor */
                position: relative;
                width: 100%;
                height: 100%;
            }
        
            .container {
                width: 100%;
                height: 100%;
                position: relative;
            }
        
            .circle {
                position: absolute;
                border-radius: 50%;
                background: var(--light); /* Por defecto */
                opacity: 0.7;
            }
        
            @keyframes move-up {
                0% {
                    transform: translateY(120vh); /* Inicia desde abajo de la pantalla */
                    opacity: 1;
                }
                50% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(50vh); /* Llega hasta la mitad */
                    opacity: 0;
                }
            }
        
            @keyframes move-down {
                0% {
                    transform: translateY(-100vh); /* Inicia desde arriba de la pantalla */
                    opacity: 1;
                }
                50% {
                    opacity: 0.3;
                }
                100% {
                    transform: translateY(50vh); /* Llega hasta la mitad */
                    opacity: 0;
                }
            }
        
            .circle.up {
                bottom: 0;
                background: var(--dark);
                animation: move-up 8s infinite ease-in-out;
            }
        
            .circle.down {
                top: 0;
                background: var(--light);
                animation: move-down 8s infinite ease-in-out;
            }
        `;}

    static properties = {
        _totalCircles: { type: Number },
        _circles: { typer: Array },
    }

    constructor() {
        super();
        this._totalCircles = 20;
        this.circles = Array.from({ length: this._totalCircles }, (_, index) => ({
            index,
            size: Math.round(Math.random() * 50 + 10),
            positionX: Math.round(Math.random() * 100),
            direction: index < this._totalCircles / 2 ? 'up' : 'down',
            animationDelay: Math.random().toString().slice(0, 4),
            blur: Math.random().toString().slice(2, 3),
        }));
    }

    render() {
        return html`
            ${
                this._totalCircles
                ?   html`<div class="container">${this.circles.map((circle, index) => html`

                        <div 
                            class=" circle ${circle.direction}"
                            style="
                                width: ${circle.size}px;
                                height: ${circle.size}px;
                                left: ${circle.positionX}%;
                                animation-delay: ${circle.animationDelay}s;
                                filter: blur(${circle.blur}px);
                            "
                        ></div>

                    `)}</div>`
                : ''
            }
        `;
    }
}
customElements.define('animated-background', AnimatedBackground);
