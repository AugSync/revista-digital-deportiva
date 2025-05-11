class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-blue-900 text-white p-4 text-center">
                <p>© 2025 CésarSport Revista Deportiva | Todos los derechos reservados</p>
                <p class="text-sm mt-1">Revista Digital Educativa - Volumen 1, Edición 1</p>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent); 