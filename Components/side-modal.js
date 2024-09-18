// import { LitElement, html, css } from "lit";
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { dataProfile, AboutMe, ProfileContact, skills } from "./ProfileContent.js";

class SideModal extends LitElement {
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

        .show-more {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0vw;
            height: 100vh;
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .enable {
            width: 100vw;
            opacity: 1;
            backdrop-filter: blur(70px);
        }
        aside {
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 85%;
            height: 85%;
            border-radius: var(--b-radius-large);
            box-shadow: var(--shadow-00);
            transform: scale(0);
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .enable aside {
            transform: scale(1);
        }

        .info {
            height: 100%;
            width: 100%;
            padding: 1.5rem;
        }
        .info #info-heading {
            height: 10%;
            width: 100%;
            font-size: 2rem;
            text-align: center;
        }
        .info #info-container {
            width: 100%;
            height: 90%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Seccion del perfil */
        .info-profile {
            width: 60%;
            height: 100%;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .info-profile img {
            width: 15rem;
            height: 17rem;
            object-fit: cover;
            border-radius: var(--b-radius-medium);
            box-shadow: var(--shadow-01);
            border: 1px solid var(--light);
        }

        /* Contenedor de los iconos de contacto en el modal */
        .icon-container {
            width: 3.5rem;
        }
        /* contenedor de la imagen de perfil, las skill y el CTA */
        .image-skill-content {
            display: flex;
            flex-direction: column;
        }
        .image-skill-content .image-skill {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .icon-container .icon a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
        }
        .icon-container .icon a:hover {
            background: rgba(0, 0, 0, 0.7);
        }
        .icon-container .icon a svg {
            width: 2.5rem;
            height: 2.5rem;
            fill: var(--icon-color);
        }
        ul,
        a,
        svg,
        path,
        circle,
        text {
            cursor: var(--cursor);
        }

        /* Seccion para las Habilidades */
        .skills-section {
            width: 13rem;
        }
        /*.skills-section h2 {}*/
        /*.skills-container {}*/

        .skill {
            position: relative;
            height: 1.4rem;
            overflow: hidden;
            margin-top: 0.5rem;
        }
        .skill span {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            font-size: 0.9rem;
            margin-left: 0.5rem;
            color: #b8aae3;
            font-weight: 500;
        }
        .skill .progress-bar {
            background-color: #ae90f363;
            border-radius: var(--b-radius-small);
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
        }
        .skill .progress-bar .progress {
            position: absolute;
            background: #ae90f38f;
            height: 100%;
            transition: width 0.5s ease;
        }

        /* Informacion del contenido de More About me */
        #info-content {
            height: 100%;
            width: 40%;
            background: var(--darkGlass);
            border: 1px solid var(--light);
            border-radius: var(--b-radius-large);
            padding: 0.5rem;
            box-shadow: var(--shadow-01);
            font-family: "Arial", sans-serif;
            line-height: 1.6;
            overflow: hidden;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        /* Lista de Botones */
        .filter-list {
            width: 100%;
            height: 25%;
            padding: 1rem;
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
        }
        .filter-list li {
            width: calc(100% / 3 - 1rem);
            height: 5rem;
        }
        .filter-list .filter {
            padding: 1rem 1.5rem;
            width: 100%;
            height: 100%;
            cursor: var(--cursor);
            border-radius: var(--b-radius-large);
            color: var(--dark);
            background: var(--gradient-02);
            box-shadow: var(--shadow-01);
            font-size: 1rem;
            font-weight: 500;
        }
        .filter-list .filter:hover {
            transform: scale(0.98);
        }
        /* Texto sobre mi filtrado */
        .filter-content {
            position: relative;
            width: 100%;
            height: 75%;
            padding-left: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .aboutText {
            position: absolute;
            font-size: 1.1rem;
            color: var(--light);
            margin-bottom: 1.5rem;
            transition: all 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        .inactive {
            opacity: 0;
            transform: translateY(60%);
        }
        .active {
            opacity: 1;
            transform: translateY(0%);
        }

        #info-content h3 {
            font-size: 1.8rem;
            color: #4d347e;
            margin-bottom: 1rem;
        }

        /* posicion del componente Boton para cerrar el modal */
        #btn-close-modal {
            position: absolute;
            top: -12px;
            right: -12px;
        }

        @media (max-width: 1100px) {
            .image-skill-content .image-skill {
                gap: 1rem;
                margin-bottom: 1rem;
            }
            .image-skill-content .image-skill .skills-section {
                width: 9rem;
            }
            .image-skill-content .image-skill .skills-section h2 {
                font-size: large;
            }
            .filter-list {
                padding: 0.5rem;
            }
            .filter-list .filter {
                padding: 0;
            }
            .filter-content {
                overflow-y: auto;
                padding: 0.5rem;
            }
            .filter-content .active {
                font-size: 1rem;
                height: 100%;
                margin: 0;
            }
        }

        @media (max-width: 768px) {
            .enable {
                font-size: 1rem;
            }

            .info {
                overflow-y: scroll;
                height: max-content;
            }
            .info #info-heading {
                height: auto;
                margin-bottom: 2rem;
                line-height: 2.5rem;
            }
            .info #info-container {
                flex-direction: column;
                height: auto;
            }

            #info-container .info-profile {
                flex-direction: column;
                width: 100%;
                padding: 0;
            }
            #info-container .info-profile .icon-container {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                flex-wrap: wrap;
                margin-bottom: 1.5rem;
            }
            #info-container .info-profile .image-skill {
                flex-direction: column;
            }
            .image-skill-content .image-skill .skills-section {
                width: 100%;
            }
            #info-content {
                width: 100%;
                height: auto;
                margin-top: 2rem;
                padding: 0;
            }
            #info-content .filter-list {
                margin: 0;
            }
            #info-content .filter-list li {
                margin: 0 0.5rem;
            }
            #info-content .filter-list li .filter {
                font-size: 0.9rem;
                padding: 0.5rem;
            }

            #info-content .filter-content {
                min-height: 416px;
                height: auto;
                padding: 0.5rem;
            }

            #info-content .filter-content .active {
                padding: 0.5rem;
                margin: 0;
            }

            #btn-close-modal {
                top: 3px;
                right: 3px;
            }
        }        
    `;

    static properties = {
        dataProfile: { type: Array },
        ProfileContact: { type: Array },
        TitleAboutMe: { type: Array },
        TextAboutMe: { type: Array },
        selectedItemIdex: { type: Number },
        skills: { type: Array },
    };

    constructor() {
        super();
        this.profileModal = null;
        this.dataProfile = dataProfile;
        this.ProfileContact = ProfileContact;
        this.TitleAboutMe = AboutMe.map((title) => title.title);
        this.TextAboutMe = AboutMe.map((text) => text.text);
        this.selectedItemIdex = 0;
        this.skills = skills;
        this.addEventListener("close-modal", (event) => { 
            if(event.detail === 'close') {
                this._closeProfileModal();
                event.stopPropagation();
            }
        });
    }

    _upgradeIndex(index) {
        this.selectedItemIdex = index;
    }

    render() {
        return html`
            <section id="profile-modal" class="show-more">
                <aside>
                    <div class="info">
                        <h2 id="info-heading">Información Adicional</h2>

                        <div id="info-container">
                            <div class="info-profile">
                                <ul class="icon-container">
                                    ${this.ProfileContact.map((icon, index) => html`
                                        <li class="icon">
                                            <a target="_BLANK" href="${icon.href}" data-index="${index}" @mouseover=${this._showSpan}>
                                                ${icon.icon}
                                            </a>
                                        </li>
                                    `)}
                                </ul>

                                <div class="image-skill-content">
                                    <div class="image-skill">
                                        <img src="${this.dataProfile.img}" alt="Fotografia de Alexander David Reina Pinillo" title="Fotografia de Alexander David Reina Pinillo"/>
                                        <div class="skills-section">
                                            <h2>Mis Habilidades</h2>
                                            <div id="skills-container">
                                                ${this.skills.map((skll, index) => html`
                                                    <div class="skill">
                                                        <span>${skll.skill} - ${skll.level}%</span>
                                                        <div class="progress-bar">
                                                            <div class="progress" style="width:${skll.level}%"></div>
                                                        </div>
                                                    </div>
                                                `)}
                                            </div>
                                        </div>
                                    </div>
                                    <slot name="callToActionButon"></slot>
                                </div>
                            </div>

                            <div id="info-content" role="region" aria-labelledby="info-heading">
                                <ul class="filter-list">
                                    ${this.TitleAboutMe.map((title, index) => html`
                                        <li>
                                            <button class="filter button" @click=${() => {this._upgradeIndex(index)}}>
                                                ${title}
                                            </button>
                                        </li>
                                    `)}
                                </ul>

                                <div class="filter-content">
                                    ${this.TextAboutMe.map((text, index) => html`
                                        <p class=" aboutText ${ index === this.selectedItemIdex ? "active" : "inactive" }">${text}</p>
                                    `)}
                                </div>

                            </div>
                        </div>
                    </div>

                    <button-close id="btn-close-modal"></button-close>
                </aside>
            </section>
        `;
    }

    // metodo - abrir perfil modal
    openProfileModal() {
        this.profileModal = this.shadowRoot.getElementById("profile-modal");
        if (this.profileModal) this.profileModal.classList.add("enable");
    }
    _closeProfileModal() {
        this.profileModal = this.shadowRoot.getElementById("profile-modal");
        if (this.profileModal) this.profileModal.classList.remove("enable");
    }
}

customElements.define("side-modal", SideModal);
