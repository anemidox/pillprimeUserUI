export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = ` 
            <style>
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
                .login {
                    font-size: 2.5rem;
                    color: #ffffff;
                }
            </style>
            <div class="login"><i class='fas fa-user'></i></div>
        `;
    }
}

customElements.define('app-login', Login);