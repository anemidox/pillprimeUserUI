import Category from "../components/Home/Category.js";

const template = document.createElement('template');
template.innerHTML = `
    <div class="main">
        <category-box></category-box>
    </div>
`;

const style = document.createElement('style');
style.textContent = ` 
    .main {
        
    }
`;

class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Any additional logic when the element is added to the DOM
    }
}

customElements.define('home-page', Home);

const HomeComponent = () => {
    return (`
        <home-page></home-page>   
    `);
}

export default HomeComponent;
