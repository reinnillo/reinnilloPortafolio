// archivo: faq-social-reviews.js
import { LitElement, html, css } from 'lit';
//import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { instagramIcon, linkedinIcon } from './icons.js';
import { ProfileContact } from './ProfileContent.js';

class FaqSocialReviews extends LitElement {
  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      background: rgba(0, 0, 0,0.5);
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .tabs {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
    }
    .tab {
      border: none;
      cursor: var(--cursor);
      padding: 10px 20px;
      background: var(--icon-color);
      border-radius: 5px;
      transition: all 0.3s ease;
    }
    .tab:hover {
      background: var(--light);
      color: var(--text-color);
      box-shadow: var(--shadow-02);
    }
    .tab[selected] {
      background: var(--gradient-01);
      color: var(--text-color);
    }
    .content {
      display: none;
    }
    .content[active] {
      display: block;
    }
    .faq-item, .review-item {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid var(--light);
      border-radius: 5px;
    }
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 20px;
    }
    .social-icon {
      width: 40px;
      height: 40px;
      cursor: var(--cursor);
      transition: transform 0.3s ease;
    }
    .social-icon svg {
        width: 100%;
        height: 100%;
    }
    .social-icon:hover {
      transform: scale(1.2);
    }
  `;

  constructor() {
    super();
    this.activeTab = 'faq'; // valor por defecto
    this.faqs = [
      { question: '¿Cuál es tu horario de atención?', answer: 'Estamos disponibles de 9 AM a 6 PM de lunes a viernes.' },
      { question: '¿Ofrecen consultas en línea?', answer: 'Sí, ofrecemos consultas virtuales bajo solicitud.' },
    ];
    this.reviews = [
      { reviewer: 'Juan Pérez', comment: 'Excelente servicio, muy recomendado.' },
      { reviewer: 'Ana Gómez', comment: 'Atención rápida y amable.' },
    ];
  }

  changeTab(tab) {
    this.activeTab = tab;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="container">
        <div class="tabs">
          <button class="tab" @click="${() => this.changeTab('faq')}" ?selected=${this.activeTab === 'faq'}>Preguntas Frecuentes</button>
          <button class="tab" @click="${() => this.changeTab('reviews')}" ?selected=${this.activeTab === 'reviews'}>Reseñas</button>
          <!--<button class="tab" @click="${() => this.changeTab('social')}" ?selected=${this.activeTab === 'social'}>Redes Sociales</button>-->
        </div>

        <div class="content" ?active=${this.activeTab === 'faq'}>
          ${this.faqs.map(
            (faq) => html`
              <div class="faq-item">
                <h3>${faq.question}</h3>
                <p>${faq.answer}</p>
              </div>
            `
          )}
        </div>

        <div class="content" ?active=${this.activeTab === 'reviews'}>
          ${this.reviews.map(
                (review) => html`
                <div class="review-item">
                    <p><strong>${review.reviewer}</strong>: ${review.comment}</p>
                </div>
                `
          )}
        </div>

        <div class="content" ?active=${this.activeTab === 'social'}>
            <div class="social-icons">
                ${ProfileContact.map(social => html`
                    ${social.name === 'Instagram' || social.name === 'Linkedin' || social.name === 'GitHub' ? html`
                        <a class="social-icon" href="${social.href}" alt="${social.name} de Alexander Reina Pinillo">${social.icon}</a>
                    ` : ''}
                `)}
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('faq-social-reviews', FaqSocialReviews);
