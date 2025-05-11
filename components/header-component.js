class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="bg-blue-900 text-white p-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <h1 class="text-4xl font-bold">CésarSport</h1>
                        <span class="ml-2 text-sm">Revista Deportiva Digital • Edición 1 • Mayo 2025</span>
                    </div>
                    <div>
                        <span class="text-sm">Precio: 500 Bs.</span>
                    </div>
                </div>
                <nav class="mt-4">
                    <ul class="flex space-x-6 text-sm font-bold">
                        <li class="hover:text-blue-300">APTITUD FÍSICA</li>
                        <li class="hover:text-blue-300">FRECUENCIA CARDÍACA</li>
                        <li class="hover:text-blue-300">VALENCIAS FÍSICAS</li>
                        <li class="hover:text-blue-300">MÉTODOS DE EVALUACIÓN</li>
                        <li class="hover:text-blue-300">AERÓBICO VS ANAERÓBICO</li>
                        <li class="hover:text-blue-300">NOTICIAS</li>
                        <li class="hover:text-blue-300">ENTREVISTAS</li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent); 