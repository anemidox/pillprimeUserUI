export class Return extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .return {
                    font-size: 1.5rem;
                    color: #ffffff;
                }
            </style>
            <p class="return">Return</p>
        `;
    }
}

customElements.define('app-return', Return);