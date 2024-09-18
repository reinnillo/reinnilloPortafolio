import { LitElement, html, css } from "lit";
// import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { messageIcon } from "./icons.js";

class CallToAction extends LitElement {

    static styles = css`

        .call-to-action-button {
            background: var(--gradient-01);
            font-family: var(--text-font-family);
            color: var(--text-color);
            padding: 0.5rem 2rem;
            border-radius: var(--b-radius-small);
            margin: auto;
            border: none;
            text-decoration: none;
            cursor: pointer;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            box-shadow: var(--shadow-00);
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .call-to-action-button:hover {
            transform: scale(0.97);
        }
        
        .call-to-action-button svg {
            margin-left: 1rem;
            width: 2rem;
            height: 2rem;
            fill: var(--light) !important;
            animation: tada 1s ease infinite;
        }
        @keyframes tada {
            0% {
                transform: scale(1);
            }
            10%, 20% {
                transform: scale(0.9) rotate(-5deg);
            }
            30%, 50%, 70% {
                transform: scale(1.1) rotate(5deg);
            }
            40%, 60% {
                transform: scale(1.1) rotate(-5deg);
            }
            80% {
                transform: scale(1.1) rotate(5deg);
            }
            100% {
                transform: scale(1) rotate(0);
            }
        }
    `;
  
    render() {
        return html`
            <button @click=${ this._openModalForm } class="call-to-action-button"> <slot></slot> ${messageIcon}</button>
        `;
    }

    _openModalForm() {
        const modal = document.querySelector('message-form');
        if (modal) modal.openModal();
    }
}

customElements.define("call-to-action-button", CallToAction);
