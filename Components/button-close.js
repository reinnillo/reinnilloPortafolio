import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
// import { LitElement, html, css } from 'lit';
import { closeIcon } from './icons.js';

export class ButtonClose extends LitElement {
    static styles = [
        css`
            .btn-close {
                width: 2.5rem;
                height: 2.5rem;
                background: none;
                border-radius: 50%;
                border: none;
                outline: none;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: var(--shadow-00);
                transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            .btn-close:hover {
                transform: scale(0.97);
                box-shadow: none;
            }

            .btn-close svg {
                width: 100%;
                height: 100%;
                fill: #957ebc8f;
            }
            .btn-close svg,
            path {
                cursor: var(--cursor);
            }
        `
    ];

    render() {
        return html`<button @click=${ this._emitCloseEvent } class="btn-close">${closeIcon}</button>`;
    }

    _emitCloseEvent() {
        this.dispatchEvent(new CustomEvent(
            'close-modal',
            {
                detail: 'close',
                bubbles: true,
                composed: true
            }
        ));
    }
}
customElements.define('button-close', ButtonClose);
