// import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { userIcon, userDetailIcon, downloadIcon } from "./icons.js";

class ProfileMenu extends LitElement {
    static properties = {
        CV: { type: String },
        _isOpen: { type: Boolean }
    }
    static styles = css`
        *,
        *::before,
        *::after,
        *:focus {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            vertical-align: baseline;
            text-decoration: none;
            color: inherit;
            cursor: auto;
            border: none;
            outline: none;
            line-height: 1.4rem;
        }
        #ProfileMenu {
            position: relative;
            width: 12rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .button {
            background: var(--dark);
            font-family: var(--text-font-family);
            padding: 0.5rem 1.5rem;
            color: var(--text-btn-color);
            border: none;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
        }
        .MoreInfoButton, .MoreInfoButton a {
            width: 100%;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
        }
        .MoreInfoButton:hover{
            background-color: var(--light);
            color: var(--dark);
        }
        .MoreInfoButton svg {
            margin-right: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            fill: var(--icon-color);
        }
        .option-profile-button {
            position: absolute;
            bottom: 1px;
            padding: 1rem 3rem;
            font-size: 1.3rem;
            color: var(--text-btn-color);
            display: flex;
            align-items: center;
            justify-content: space-around;
            box-shadow: var(--shadow-00);
        }
        .option-profile-button svg {
            margin-right: 1rem;
            width: 2rem;
            height: 2rem;
            fill: var(--icon-color);
        }
        .menu-box{
            position: absolute;
            top: -75px;
            left: 0px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: rebeccapurple;
            border-radius: var(--b-radius-medium);
            overflow: hidden;
            box-shadow: var(--shadow-00);
            transform-origin: bottom;
            transform: scale(0);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .active{
            transform: scale(1);
            opacity: 1;
        }
    `;
    
    // inicializacion de propiedades
    constructor(){
        super();
        this.element_menuBox = null;
        this.CV = '../asset/cv/Alexander_Reina_CV.pdf';
        this._isOpen = false;
    }

    // Metodo
    showMenuProfile(event) {
        event.preventDefault();
        this.element_menuBox = this.shadowRoot.querySelector('.menu-box');
        this.element_menuBox.classList.add('active');
    }
    hiddenMenuProfile(event) {
        event.preventDefault();
        this.element_profileMenu = this.shadowRoot.getElementById('ProfileMenu');
        this.element_menuBox.classList.remove('active');
    }

    // llamar metodo del litComponent  PROFILE MODAL
    _callModal() {
        const modal = document.querySelector('side-modal');
        if( modal ) { modal.openProfileModal()};
    }

    render() {
        return html`
            <div id="ProfileMenu" @mouseleave=${ this._closeMenu }>
            
                <div class="menu-box ${this._isOpen ? "active" : ''}">
                    <button class="MoreInfoButton button">
                        <a href="${this.CV}" download="Alexander_Reina_CV.pdf" aria-label="download cv Alexander Reina">${downloadIcon}Descargar CV</a>
                    </button>
                    
                    <button class="MoreInfoButton button" @click="${this._callModal}">${userIcon}Más sobre mí</button>
                </div>

                <button 
                    class="button option-profile-button" 
                    @mouseover=${ this._openMenu } 
                >${userDetailIcon} Perfil</button>

            </div>
        `;
    }

    _openMenu() {
        this._isOpen = true;
    }
    _closeMenu() {
        this._isOpen = false;
    }
}

customElements.define("profile-menu", ProfileMenu);
