var se=Object.defineProperty;var re=(o,e,t)=>e in o?se(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var v=(o,e,t)=>re(o,typeof e!="symbol"?e+"":e,t);import{svg as l,LitElement as x,css as E,html as p}from"https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const le=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle cx="11.994" cy="11.979" r="3.003"/></svg>`,ce=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>`,de=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>`,me=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/></svg>`,X=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/></svg>`,he=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5ea176cf"><text x="0" y="25" font-family="Arial" font-size="100%">Platzi</text></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>`;const ue=l`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"/></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z"/></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.653-2.359a2.224 2.224 0 0 1 3.125 0l.224.22.223-.22a2.225 2.225 0 0 1 3.126 0 2.13 2.13 0 0 1 0 3.07L12.002 18l-3.349-3.289a2.13 2.13 0 0 1 0-3.07z"/></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM6 9h4l-.003 9H4V9h2zm6 8V9c0-1.103-.897-2-2-2H7V5h11v12h-6z"/></svg>`;l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"/></svg>`;const J=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"/></svg>`,pe=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"/></svg>`,fe=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"/></svg>`,G=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z"/></svg>`,I=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="m5.705 3.71-1.41-1.42C1 5.563 1 7.935 1 11h1l1-.063C3 8.009 3 6.396 5.705 3.71zm13.999-1.42-1.408 1.42C21 6.396 21 8.009 21 11l2-.063c0-3.002 0-5.374-3.296-8.647zM12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.184 4.073 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"/></svg>`,ge=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"/><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"/></svg>`,ve=l`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--icon-color)"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-7 13h-2v-2h2v2zm0-4h-2V5h2v6z"/></svg>`;class B extends x{constructor(){super(),this.element_menuBox=null,this.CV="../asset/cv/Alexander_Reina_CV.pdf",this._isOpen=!1}showMenuProfile(e){e.preventDefault(),this.element_menuBox=this.shadowRoot.querySelector(".menu-box"),this.element_menuBox.classList.add("active")}hiddenMenuProfile(e){e.preventDefault(),this.element_profileMenu=this.shadowRoot.getElementById("ProfileMenu"),this.element_menuBox.classList.remove("active")}_callModal(){const e=document.querySelector("side-modal");e&&e.openProfileModal()}render(){return p`
            <div id="ProfileMenu" @mouseleave=${this._closeMenu}>
            
                <div class="menu-box ${this._isOpen?"active":""}">
                    <button class="MoreInfoButton button">
                        <a href="${this.CV}" download="Alexander_Reina_CV.pdf" aria-label="download cv Alexander Reina">${fe}Descargar CV</a>
                    </button>
                    
                    <button class="MoreInfoButton button" @click="${this._callModal}">${J}Más sobre mí</button>
                </div>

                <button 
                    class="button option-profile-button" 
                    @mouseover=${this._openMenu} 
                >${pe} Perfil</button>

            </div>
        `}_openMenu(){this._isOpen=!0}_closeMenu(){this._isOpen=!1}}v(B,"properties",{CV:{type:String},_isOpen:{type:Boolean}}),v(B,"styles",E`
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
    `);customElements.define("action-menu",B);const be={img:"./asset/img/profile/alex.webp"},we=[{name:"instagram",href:"https://instagram.com/reinnillo/",icon:le},{name:"linkedin",href:"https://www.linkedin.com/in/alexander-d-reina-p-737626318/",icon:de},{name:"GitHub",href:"https://github.com/reinnillo/",icon:ce},{name:"WhatsApp",href:"https://api.whatsapp.com/send?phone=50768439588&text=Hola,%20me%20gustaría%20contratar%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20discutir%20los%20detalles.%20Gracias.",icon:me},{name:"Email",href:"mailto:30todev@gmail.com?subject=Solicitud%20de%20Servicio&body=Hola,%20me%20gustaría%20contratar%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20discutir%20los%20detalles.%20Gracias.",icon:X},{name:"Referencias de cursos en Tecnologia",href:"https://platzi.com/p/reinnillo/",icon:he}],V=[{title:"Sobre mí",text:`Soy un desarrollador front-end junior apasionado por la
        tecnología y el aprendizaje continuo. He trabajado en varios
        proyectos personales que me han permitido mejorar mis
        habilidades en JavaScript, LitElement, HTML, CSS y otros. Me encanta
        crear interfaces limpias y funcionales que ofrezcan una
        experiencia de usuario óptima y accesible. A lo largo de mi
        trayectoria, he desarrollado soluciones innovadoras y
        personalizadas, como un proyecto reciente para una fotógrafa,
        que puedes ver aquí.`},{title:"Mis Objetivos",text:`Estoy enfocado en mejorar mis habilidades en tecnologías
        modernas como React-Native para el desarrollo de App movil y 
        continuar mejorando en LitElement y React. Mi objetivo es formar 
        parte de un equipo o colaborar en proyectos desafiantes que me 
        permitan crecer profesionalmente, aprender de otros 
        desarrolladores y contribuir con soluciones de calidad.`},{title:"Qué me motiva",text:`"Un humano insaciable de conocimiento e intolerante
        a la injusticia." quise pensar en algo que me describiera y pense 
        en esta franse. Eso es lo que me motiva más que nada, el conocimiento, 
        la curiosidad. Desde que descubrí la programación, la resolución de problemas 
        y el crear cosas, son mis principales motores. Disfruto del proceso de 
        convertir ideas en productos funcionales y crecer en el proceso. La tecnología 
        es mi pasión y busco constantemente oportunidades para mejorar y aprender más.`}],ye=[{skill:"JavaScript",level:60},{skill:"litElement",level:40},{skill:"Css",level:80},{skill:"HTML",level:75},{skill:"React",level:30},{skill:"Python",level:25},{skill:"SQL",level:25},{skill:"Botpress",level:90},{skill:"Wix Studio",level:50}];class A extends x{constructor(){super(),this.profileModal=null,this.dataProfile=be,this.ProfileContact=we,this.TitleAboutMe=V.map(e=>e.title),this.TextAboutMe=V.map(e=>e.text),this.selectedItemIdex=0,this.skills=ye,this.addEventListener("close-modal",e=>{e.detail==="close"&&(this._closeProfileModal(),e.stopPropagation())})}_upgradeIndex(e){this.selectedItemIdex=e}render(){return p`
            <section id="profile-modal" class="show-more">
                <aside>
                    <div class="info">
                        <h2 id="info-heading">Información Adicional</h2>

                        <div id="info-container">
                            <div class="info-profile">
                                <ul class="icon-container">
                                    ${this.ProfileContact.map((e,t)=>p`
                                        <li class="icon">
                                            <a target="_BLANK" href="${e.href}" data-index="${t}" @mouseover=${this._showSpan}>
                                                ${e.icon}
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
                                                ${this.skills.map((e,t)=>p`
                                                    <div class="skill">
                                                        <span>${e.skill} - ${e.level}%</span>
                                                        <div class="progress-bar">
                                                            <div class="progress" style="width:${e.level}%"></div>
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
                                    ${this.TitleAboutMe.map((e,t)=>p`
                                        <li>
                                            <button class="filter button" @click=${()=>{this._upgradeIndex(t)}}>
                                                ${e}
                                            </button>
                                        </li>
                                    `)}
                                </ul>

                                <div class="filter-content">
                                    ${this.TextAboutMe.map((e,t)=>p`
                                        <p class=" aboutText ${t===this.selectedItemIdex?"active":"inactive"}">${e}</p>
                                    `)}
                                </div>

                            </div>
                        </div>
                    </div>

                    <button-close id="btn-close-modal"></button-close>
                </aside>
            </section>
        `}openProfileModal(){this.profileModal=this.shadowRoot.getElementById("profile-modal"),this.profileModal&&this.profileModal.classList.add("enable")}_closeProfileModal(){this.profileModal=this.shadowRoot.getElementById("profile-modal"),this.profileModal&&this.profileModal.classList.remove("enable")}}v(A,"styles",E`
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
        cursor: pointer;
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
        cursor: pointer;
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

        @media (max-width: 992px) {
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
        }        
    `),v(A,"properties",{dataProfile:{type:Array},ProfileContact:{type:Array},TitleAboutMe:{type:Array},TextAboutMe:{type:Array},selectedItemIdex:{type:Number},skills:{type:Array}});customElements.define("side-modal",A);class W extends x{render(){return p`
            <button @click=${this._insertForm} class="call-to-action-button"> <slot></slot> ${G}</button>
        `}_insertForm(){const e=document.getElementById("parentForm"),t=document.createElement("form-contact");e.appendChild(t),t&&t.openForm()}}v(W,"styles",E`

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
    `);customElements.define("call-to-action-button",W);class C extends x{constructor(){super(),this.attachShadow({mode:"open"}),this.addEventListener("input-completed",e=>this._handleInputValidity(e)),this.addEventListener("close-modal",e=>{e.detail==="close"&&(this._closeForm(),e.stopPropagation())}),this._validationStates=[],this._notificationMessageSent="El mensaje fue enviado exitosamente 😍.",this._notificationMessageError="Hubo un error al enviar el mensaje 😭.",this._arrayInputData=[],this._form=null,this._nameInput=null,this._emailInput=null,this._messageInput=null,this._submitBtn=null,this._isEnable}_handleInputValidity(e){const{index:t,isValid:n,value:a}=e.detail;this._validationStates[t]={isValid:n,value:a},this._verifyInput()}_detectDevice(){let e;const t=/Tablet|iPad/i.test(navigator.userAgent),n=/Mobi|Android/i.test(navigator.userAgent);return t&&(e="Tablet"),n&&(e="Mobile"),n&&t||(e="WebSite"),e}_getDatePanama(){const e=new Date,t={timeZone:"America/Panama",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0};return e.toLocaleString("es-PA",t)}_isCompletedInput(e){const t=this.shadowRoot.getElementById(e),n=t.dataset.index,a=t.value,i=a!=="";t.dispatchEvent(new CustomEvent("input-completed",{detail:{index:n,isValid:i,value:a},bubbles:!0,composed:!0}))}_showNotification(e,t){const n=document.querySelector("notification-modal");n&&(n.openModal(),n.notification(e,t))}render(){return p`
            <form>
                <!-- Mostrar errores al usuarios -->
                <div id="errors" role="alert" aria-live="assertive"></div>

                <!--Campo para el nombre del usuario-->
                <div class="form-group">
                    <label for="name-input">${J} Nombre:</label>
                    
                    <input 
                        @input=${()=>this._isCompletedInput("name-input")} 
                        data-index="${0}" 
                        type="text" 
                        id="name-input" 
                        name="name-input" 
                        aria-describedby="name-input-error" 
                        required
                        title="Por favor, ingrese un nombre valido usando solo letras."
                    >
                    <span id="name-input-error" class="error-message"></span>
                </div>

                <!--Campo para el correo electronico del usuario-->
                <div class="form-group">
                    <label for="email-input">${X} Correo:</label>
                    <input 
                        id="email-input" 
                        data-index="${1}" 
                        @input=${()=>this._isCompletedInput("email-input")} 
                        type="email" 
                        name="email-input" 
                        aria-describedby="email-input-error" 
                        required
                        title="Por favor, ingrese un correo valido."
                    >
                    <span id="email-input-error" class="error-message"></span>
                </div>

                <!--Campo para el mensaje del usuario-->
                <div class="form-group">
                    <label for="message-input">${G} Mensaje:</label>
                    <textarea 
                        id="message-input" 
                        data-index="${2}" 
                        @input=${()=>this._isCompletedInput("message-input")} 
                        name="message-input" 
                        rows="2" aria-describedby="message-input-error" 
                        required
                        title="Por favor, ingrese su mensaje."
                    ></textarea>
                    <span id="message-input-error" class="error-message"></span>
                </div>

                <!-- Recaptcha de google -->
                <div class="g-recaptcha" data-sitekey="your-site-key"></div>

                <!-- Boton para enviar el formulario -->
                <button id="submit" @click=${this._sendForm} type="submit" ?disabled="${!this._isEnable}">Enviar</button>
            </form> 
            <button-close id="closeForm"></button-close>
        `}openForm(){this.classList.add("visible")}_closeForm(){this.classList.remove("visible")}_verifyInput(){this._isEnable=this._validationStates.every(e=>e.isValid)}_sendForm(){this._form=this.shadowRoot.querySelector("form"),this._nameInput=this.shadowRoot.getElementById("name-input"),this._emailInput=this.shadowRoot.getElementById("email-input"),this._messageInput=this.shadowRoot.getElementById("message-input"),this._submitBtn=this.shadowRoot.getElementById("submit"),this._form.addEventListener("submit",e=>{e.preventDefault();let t=this.shadowRoot.getElementById("errors");if(t.innerHTML="",!this._form.checkVisibility()){[...this._form.elements].forEach(c=>{if(!c.checkValidity()){let M=this.shadowRoot.getElementById(`${c.id}-error`);M.textContent=c.validationMessage,c.classList.add("error")}});return}const n="app72qPFLrR2Asym4",a="tblAR3XGRyj3JdDEm",i="patOAfocbV4jBXfup.1c8b0a18eff5467231fce879664f5e5285a4207824a0d63428bf367f94a57483",s=`https://api.airtable.com/v0/${n}/${a}`;let r=this._nameInput.value,u=this._emailInput.value,d=this._detectDevice(),m=this._getDatePanama(),g=this._messageInput.value;const w={records:[{fields:{name:r,email:u,source:d,date:m,message:g}}]},h={method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify(w)};try{fetch(s,h).then(c=>{if(!c.ok)throw new Error("Nope");return c.json()}),this._showNotification("sent",this._notificationMessageSent),this._form.reset()}catch(c){this._showNotification("error",this._notificationMessageError),console.error(c)}})}}v(C,"styles",[E`
            :host {
                display: none;
                transform: translate(50%, 20%);
                width: 50vw;
                height: 70vh; 
                background: rgba(0, 0, 0,0.5); 
                position: absolute; 
                top: 0;
                bottom: 0;
                backdrop-filter: blur(1rem);
                z-index: 5000;
                border-radius: var(--b-radius-large);
            }
            :host(.visible) {
                display: grid;
                place-content: center;
            }
            form {
                width: 100%;
                display: flex;
                flex-direction: column;
                text-align: left;
            }
            /* contenedor de errores generales */
            #errors {
                color: red;
                margin-bottom: 1rem;
            } 
            
            /* Contenedor de cada input, label y span */
            .form-group {
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;
            }
            .form-group label {
                font-size: 1rem;
                color: var(--light);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 0.5rem;
            }
            .form-group label svg {
                width: 2rem;
                height: 2rem;
                fill: var(--light);
            }

            /* inputs y textareas */
            .form-group input[type="text"],
            .form-group input[type="email"],
            .form-group textarea {
                outline: none;
                border: none;
                color: var(--light);
                width: 80%;
                padding: 1rem;
                border-radius: var(--b-radius-large);
                font-size: 1rem;
                background: var(--dark);
                box-shadow: var(--shadow-01);
            }
            .form-group input:nth-child(1) {
                text-transform: capitalize;
            }
            
            /* aplicar un border rojo a los campos de errores */
            .form-group input.error,
            .form-group textarea.error {
                border: 2px solid red;
            }
            /* Mensaje de errores "span" perteneciente a cada input-textarea */
            .form-group .error-message {
                color: red;
                font-size: 0.875rem;
                text-shadow: var(--light);
            }
            
            /* Captcha */
            form .g-recaptcha {
                margin-bottom: 1rem;
            }

            /* Boton para enviar el formulario */
            form button#submit[type="submit"] {
                width: -moz-fit-content;
                width: fit-content;
                padding: 0.8rem 2rem;
                font-size: 1rem;
                color: var(--text-color);
                background-color: var(--dark);
                border: none;
                border-radius: var(--b-radius-small);
                cursor: pointer;
                box-shadow: none;
                transition: all 0.2s ease;
            }
            /* Submit Hover */
            form button#submit[type="submit"]:hover {
                background-color: var(--light);
                transform: scale(1.05);
                box-shadow: var(--shadow-01);
            }
            /* Submit Disabled */
            form button#submit[type="submit"]:disabled {
                background-color: #141719;
                cursor: not-allowed;
                text-shadow: var(--light);
                color: var(--light);
                border: none;
            }
            
            /* componente Boton para cerrar el formulario */
            :host #closeForm {
                position: absolute;
                top: 0;
                right: 0;
            }
        `]),v(C,"properties",{_arrayInputData:{type:Array},_validationStates:{type:Array},_isEnable:{type:Boolean},_notificationMessageSent:{type:String},_notificationMessageError:{type:String}});customElements.define("form-contact",C);class Y extends x{render(){return p`<button @click=${this._emitCloseEvent} class="btn-close">${ue}</button>`}_emitCloseEvent(){this.dispatchEvent(new CustomEvent("close-modal",{detail:"close",bubbles:!0,composed:!0}))}}v(Y,"styles",[E`
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
                cursor: pointer;
            }
        `]);customElements.define("button-close",Y);class $ extends x{constructor(){super(),this.isOpen=!1,this._notificationMessage="",this.addEventListener("close-modal",e=>{e.detail==="close"&&(this.isOpen=!1,e.stopPropagation())})}notification(e="",t){e==="sent"&&(this._notificationMessage=p`${I} <p>${ge} ${t}</p>`),e==="error"&&(this._notificationMessage=p`${I} <p>${ve} ${t}</p>`),e===""&&(this._notificationMessage=p`${I} <p>${t}</p>`)}render(){return p`
            ${this.isOpen?p`
                    <div class="notification-overlay">
                        <div class="notification-content">
                            ${this._notificationMessage}
                            <button-close class="close-button"></button-close>
                        </div>
                    </div>
                `:""}
        `}openModal(){this.isOpen=!0}closeModal(){this.isOpen=!1}}v($,"styles",[E`
            :host {
                display: block;
                position: relative;
            }
            .notification-overlay {
                position: fixed;
                width: 35%;
                height: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: var(--b-radius-large);
                background: var(--darkGlass);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 6000;
                box-shadow: var(--shadow-01);
            }
            .notification-content {
                background: var(--light);
                padding: 2rem;
                border-radius: var(--b-radius-medium);
                width: 80%;
                text-align: center;
                max-width: 300px;
                box-shadow: var(--shadow-00);
                position: relative;
                color: var(--dark);
                font-weight: 600;
            }
            /* boton de cierre */
            .close-button {
                position: absolute;
                top: 10px;
                right: 10px;
            }
            /* icono de modal notificacion */
            .notification-overlay .notification-content svg {
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                fill: #7e66b13b;
            }
            /* icono de notificacion */
            .notification-overlay .notification-content p svg {
                width: 1.5rem;
                height: 1.5rem;
                fill: var(--icon-color);
                position: initial;
            }
        `]),v($,"properties",{isOpen:{type:Boolean},_notificationMessage:{type:String}});customElements.define("notification-modal",$);document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("App"),e=document.querySelectorAll(".nav-link"),t=document.querySelectorAll(".section"),n=document.querySelector(".footer-navigation"),a=document.getElementById("openFooter");function i(d,m){setTimeout(()=>{m()},d)}const s=()=>{n.classList.add("enable"),a.style.bottom="-4.5rem",o.style.transform="scale(0.9)"},r=()=>{n.classList.remove("enable"),a.style.bottom="-1.8rem",o.style.transform="scale(1)"};a.addEventListener("mouseenter",()=>{i(500,s),i(8e3,r)}),a.addEventListener("click",()=>{i(500,s),i(8e3,r)}),i(500,s),i(8e3,r),e.forEach(d=>{d.addEventListener("click",m=>{m.preventDefault();const g=d.getAttribute("data-target"),w=document.getElementById(g);t.forEach(c=>{c.classList.remove("active")}),w.classList.add("active");const h=Array.from(t).indexOf(w);t.forEach((c,M)=>{h===M?(c.style.transform=`translateX(-${h*100}vw) scale(1)`,c.style.opacity="1"):(c.style.transform=`translateX(-${h*100}vw) scale(0.5)`,c.style.opacity="0.2")})})}),document.getElementById("home").classList.add("active")});const L=document.getElementById("dark-mode-button"),z=document.getElementById("light-mode-button");function P(){document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),z.style.zIndex=1,z.style.display="block",L.style.zIndex=0}function j(){document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),L.style.zIndex=1,L.style.display="block",z.style.zIndex=0}L.addEventListener("click",P);z.addEventListener("click",j);const xe=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,Ee=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches,S=localStorage.getItem("theme");S?S==="dark"?P():S==="light"&&j():xe?P():Ee&&j();const k=document.querySelector(".nav"),Me=document.querySelector(".navDiv").firstElementChild,ke=k.firstElementChild;Me.addEventListener("click",()=>{k.style.transform="translateX(0%)",Array.from(k.children).forEach(o=>{Array.from(o.children).forEach(e=>{e.className==="nav-link"&&e.addEventListener("click",function(t){t.preventDefault(),k.style.transform="translateX(-100%)"})})})});ke.addEventListener("click",()=>{k.style.transform="translateX(-100%)"});const y=document.querySelector("form");document.querySelector("#name-input");document.querySelector("#email-input");document.querySelector("#message-input");const Le=document.getElementById("submit"),ze=document.querySelectorAll("input, textarea");function _e(){let o;const e=/Tablet|iPad/i.test(navigator.userAgent),t=/Mobi|Android/i.test(navigator.userAgent);return e?o="Tablet":t?o="Mobile":o="WebSite",o}function Ie(){const o=new Date,e={timeZone:"America/Panama",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0};return o.toLocaleString("es-PA",e)}ze.forEach(o=>{o.addEventListener("input",()=>{let e=document.getElementById(`${o.id}-error`);o.checkValidity()?(o.classList.remove("error"),e.textContent=""):(o.classList.add("error"),e.textContent=o.validationMessage)})});y.addEventListener("submit",o=>{o.preventDefault();let e=document.getElementById("errores");if(e.innerHTML="",!y.checkVisibility()){[...y.elements].forEach(h=>{if(!h.checkValidity()){let c=document.getElementById(`${h.id}-error`);c.textContent=h.validationMessage,h.classList.add("error")}});return}const t="app72qPFLrR2Asym4",n="tblAR3XGRyj3JdDEm",a="patOAfocbV4jBXfup.1c8b0a18eff5467231fce879664f5e5285a4207824a0d63428bf367f94a57483",i=`https://api.airtable.com/v0/${t}/${n}`;let s=document.getElementById("name-input").value,r=document.getElementById("email-input").value,u=_e(),d=Ie(),m=document.getElementById("message-input").value;const g={records:[{fields:{name:s,email:r,source:u,date:d,message:m}}]},w={method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify(g)};try{fetch(i,w).then(h=>{if(!h.ok)throw new Error("Error al enviar el formulario 😭.");return alert("Formulario enviado con exito 😍."),h.json()}),y.reset()}catch{e.textContent="Hubo un problema al enviar el formulario 😭."}});y.addEventListener("input",()=>{let o=[...y.elements].every(e=>e.validity.valid);Le.disabled=!o});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".orbital-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tech"),n=document.querySelector(`.card[data-tech="${t}"]`),a=document.querySelector(".orbital-container"),i=document.querySelector(".modal-card");i.querySelector("modal-content"),a.classList.add("hidden-orbital-container");let s=Math.random()<.5?"left":"right";(i.classList.contains("desable-modal-left")||i.classList.contains("desable-modal-right"))&&(i.classList.remove("desable-modal-left"),i.classList.remove("desable-modal-right"),i.classList.add("enable-modal"),n.style.zIndex="200",n.addEventListener("click",r=>r.stopPropagation())),i.classList.contains("enable-modal")&&i.addEventListener("click",function(){i.classList.remove("enable-modal"),i.classList.remove("desable-modal-left"),i.classList.remove("desable-modal-right"),i.classList.add(`desable-modal-${s}`),n.style.zIndex=0,a.classList.remove("hidden-orbital-container")})})})});const f=[{projectName:"Helen Miranda",description:"Desarrollé un portafolio elegante y minimalista para Helen Miranda, destacando su increíble trabajo como fotógrafa. La web presenta sus mejores proyectos con una navegación intuitiva y un diseño moderno que resalta la belleza de sus imágenes.",imageDesktop:"./asset/img/helen-miranda/helen-desktop.png",imageMobile:"./asset/img/helen-miranda/helen-mobile.png",href:"https://helenmiranda00.github.io/Portafolio/",title:"imagen del sitio web helen miranda, creado por reinnillo",alt:"imagen del sitio web helen miranda, creado por reinnillo",slideImages:["./asset/img/helen-miranda/slide-01.png","./asset/img/helen-miranda/slide-02.png","./asset/img/helen-miranda/slide-03.png","./asset/img/helen-miranda/slide-04.png","./asset/img/helen-miranda/slide-05.png"]}],Se="appWCzcJZsQLQBxcW",Be="tbl3ZktcIseSjkjyH",Ae="patBKS3jPPOwNgy6L.ee585596b28824c969a1b83e73ec50812c336c24aadb50399ebf7cfb30498a86",Ce=`https://api.airtable.com/v0/${Se}/${Be}?listRecords&view=reinnillo_web`;async function $e(o,e,t={}){const n={Authorization:`Bearer ${e}`,"Content-Type":"application/json"},a={...t,headers:n};try{const i=await fetch(o,a);if(!i.ok)throw new Error(`HTTP error! Status: ${i.status}`);return await i.json()}catch(i){throw console.error("Hubo un error:",i),i}}const Pe=o=>o.map(e=>{var t,n,a,i,s,r,u,d,m,g,w,h;if(e.fields.status==="Done"){const c=(t=e==null?void 0:e.fields)==null?void 0:t.project_name,M=(n=e==null?void 0:e.fields)==null?void 0:n.description,Q=(i=(a=e==null?void 0:e.fields)==null?void 0:a.image_desktop[0])==null?void 0:i.url,U=(r=(s=e==null?void 0:e.fields)==null?void 0:s.image_mobile[0])==null?void 0:r.url,Z=(u=e==null?void 0:e.fields)==null?void 0:u.href,ee=(d=e==null?void 0:e.fields)==null?void 0:d.img_title,te=(m=e==null?void 0:e.fields)==null?void 0:m.img_alt,ie=((g=e==null?void 0:e.fields)==null?void 0:g.slide_image).map(ne=>ne.url),oe=(w=e==null?void 0:e.fields)==null?void 0:w.slide_img_alt,ae=(h=e==null?void 0:e.fields)==null?void 0:h.slide_img_title;return{projectName:c,description:M,imageDesktop:Q,imageMobile:U,href:Z,title:ee,alt:te,slideImages:ie,slideImagesTitle:oe,slideImagesAlt:ae}}return null}).filter(e=>e!==null);function H(o,e="",t="",n="",a="",i="lazy"){const s=new Image;return s.src=o,s.onload=function(){e&&(s.alt=e),t&&(s.title=t),a&&(s.className=a),n&&(s.id=n),i&&(s.loading=i)},s.onerror=function(){console.error("Error al cargar la imagen.")},s}const D=document.getElementById("img-desktop"),T=document.getElementById("img-mobile"),R=document.getElementById("slide"),q=document.querySelectorAll(".arrow"),_=document.getElementById("counter-slider").children[1],je=document.querySelector(".prev"),He=document.querySelector(".next");let b=0;const K=(o,e)=>{const t=document.createElement("a");return t.textContent="Visitar",t.classList.add(e),t.classList.add("button"),t.href=o,t.rel="noopener",t.target="blank",t},O=(o,e,t,n,a,i)=>{o.innerHTML="";const s=H(e,t,n),r=document.createElement("figcaption");r.classList.add("desc-proj");const u=document.createElement("div");u.classList.add("text");const d=document.createElement("p");d.textContent=a;const m=K(i,"button-1");u.appendChild(d),r.appendChild(u),r.appendChild(m),o.appendChild(s),o.appendChild(r)},N=(o,e,t,n,a)=>{o.innerHTML="";const i=K(a,"button-2"),s=H(e,t,n);o.appendChild(s),o.appendChild(i)},F=(o,e,t,n,a)=>{o.innerHTML="";const i=document.createElement("div");i.classList.add("title-slide");const s=document.createElement("h2");s.textContent=e,i.appendChild(s);const r=document.createElement("div");r.classList.add("image-slide"),Array.from(t).forEach(m=>{const g=H(m,n,a);r.appendChild(g)}),o.appendChild(i),o.appendChild(r);const u=r.querySelectorAll("img");let d=0;setInterval(()=>{Array.from(u).forEach((m,g)=>{g===d?(m.style.transform="translateY(0) scale(1)",m.style.opacity="1"):(m.style.transform="translateY(5px) scale(0.95)",m.style.opacity="0")}),d=d===u.length-1?0:d+1},4e3)};Array.from(q).forEach(o=>{o.addEventListener("mouseover",()=>{_.style.textShadow="none",_.style.transform="scale(0.95)"})});Array.from(q).forEach(o=>{o.addEventListener("mouseout",()=>{_.style.textShadow="var(--shadow-00)",_.style.transform="scale(1)"})});const qe=$e(Ce,Ae);qe.then(o=>{const e=Pe(o.records),t=a=>{Array.from(e).forEach((i,s)=>{a===s&&(O(D,i.imageDesktop,i.alt,i.title,i.description,i.href),N(T,i.imageMobile,i.alt,i.title,i.href),F(R,i.projectName,i.slideImages,i.alt,i.title))})},n=document.querySelector(".counter");n.textContent=`${b+1}/${e.length}`,He.addEventListener("click",()=>{b=(b+1)%e.length,t(b),n.textContent=`${b+1}/${e.length}`}),je.addEventListener("click",()=>{b=b===0?e.length-1:b-1,t(b),n.textContent=`${b+1}/${e.length}`}),t(b)}).catch(o=>{console.error(o),console.error("Cargando datos de emergencia..."),O(D,f[0].imageDesktop,f[0].alt,f[0].title,f[0].description,f[0].href),N(T,f[0].imageMobile,f[0].alt,f[0].title,f[0].href),F(R,f[0].projectName,f[0].slideImages,f[0].alt,f[0].title),[...q].forEach(e=>{e.addEventListener("click",()=>{alert("Estás viendo el proyecto por defecto, debido que hubo un problema al cargar los proyectos o tu navegador no soporte JavaScript.")})})});
//# sourceMappingURL=main.DSHJ90F3.js.map
