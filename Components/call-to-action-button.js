// import { LitElement, html, css } from "";
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { messageIcon } from "./icons.js";

class CallToAction extends LitElement {

    static styles = css`

        .call-to-action-button {
            background: var(--gradient-02);
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
            background: var(--gradient-01);
            transform: scale(0.95);
        }
        
        .call-to-action-button svg {
            margin-left: 1rem;
            width: 2rem;
            height: 2rem;
            fill: var(--light);
        }
    `;

    render() {
        return html`
            <button @click=${this._changeColor} class="call-to-action-button"> <slot></slot> ${messageIcon}</button>
        `;
    }

    _changeColor(){
        const svgChild = this.lastElementChild;
        console.log(svgChild);
    }
}

customElements.define("call-to-action-button", CallToAction);
