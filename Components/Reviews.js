import { LitElement, html, css } from 'lit';

export class Reviews extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            
            .reviews-container {
                width: 80%;
                margin: 0 auto;
                padding: 1rem;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            .reviews-container h2 {
                font-size: 2rem;
                color: var(--dark);
            }
            #list-reviews{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .review {
                border: 1px solid #ccc;
                width: 400px;
                height: 300px;
                border-radius: 5px;
            }
            .review h3 {
                margin: 0;
                font-size: 1.2rem;
                color: var(--primary-color, #333);
            }
            .review p {
                margin: 0.3rem 0;
            }
            .review p span {
                font-weight: bold;
                color: #ffaa00;
            }
        `
    ];
    
    static properties = {
        reviews: { type: Array },
    }

    constructor() {
        super();
        this.reviews = [
            {name: 'alice', instagram: 'https://wwww.instagram.com/reinnillo/', comment: 'Great product', rating: 4},
            {name: 'Bob', instagram: 'https://wwww.instagram.com/reinnillo/', comment: 'cool', rating: 5},
            {name: 'Bob', instagram: 'https://wwww.instagram.com/reinnillo/', comment: 'cool', rating: 5},
        ];
    }

    render() {
        return html`
            <div class="reviews-container">
                <h2>Lo que dicen mis clientes</h2>
                <div id="list-reviews">
                    ${this.reviews.map(review => html`
                        <div class="review">
                            <h3>${review.name}</h3>
                            <p>${review.comment}</p>
                            <p>Rating: <span>${'⭐'.repeat(review.rating)}</span> </p>
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}
customElements.define('reviews-element', Reviews);