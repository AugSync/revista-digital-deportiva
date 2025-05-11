class SidebarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="col-span-1 space-y-4 contenido-seccion">
                <div class="bg-blue-900 text-white p-3 rounded">
                    <h3 class="text-xl font-bold">NOTICIAS DE SALUD</h3>
                </div>

                <div class="border-b pb-3">
                    <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzaXN0YW5jZSUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                         alt="Estudio sobre entrenamiento" 
                         class="w-full h-32 object-cover rounded">
                    <h4 class="text-lg font-bold mt-2">Nuevo estudio revela beneficios del entrenamiento de fuerza</h4>
                    <p class="text-sm text-gray-600">Un reciente estudio confirma que el entrenamiento de fuerza 2 veces por semana reduce el riesgo de enfermedades cardiovasculares en un 30%.</p>
                </div>

                <div class="border-b pb-3">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                         alt="Alimentación saludable" 
                         class="w-full h-32 object-cover rounded">
                    <h4 class="text-lg font-bold mt-2">La alimentación como aliada del ejercicio</h4>
                    <p class="text-sm text-gray-600">Expertos en nutrición deportiva destacan la importancia de una dieta equilibrada para maximizar los resultados del entrenamiento físico.</p>
                </div>

                <div>
                    <div class="bg-blue-900 text-white p-3 rounded">
                        <h3 class="text-xl font-bold">PRÓXIMOS EVENTOS</h3>
                    </div>
                    <div class="mt-2 space-y-2">
                        <div class="bg-gray-100 p-2 rounded">
                            <span class="text-sm font-bold block">20 Mayo 2025</span>
                            <span class="text-sm">Maratón por la Salud en el Parque Central</span>
                        </div>
                        <div class="bg-gray-100 p-2 rounded">
                            <span class="text-sm font-bold block">25 Mayo 2025</span>
                            <span class="text-sm">Taller de Medición de Frecuencia Cardíaca</span>
                        </div>
                        <div class="bg-gray-100 p-2 rounded">
                            <span class="text-sm font-bold block">2 Junio 2025</span>
                            <span class="text-sm">Conferencia: Valencias Físicas en el Deporte</span>
                        </div>
                    </div>
                </div>

                <!-- Sección de patrocinador -->
                <div class="mt-4 bg-yellow-100 p-3 rounded border-2 border-yellow-400">
                    <h4 class="text-lg font-bold text-center">PATROCINADOR</h4>
                    <div class="flex justify-center mt-2">
                        <div class="text-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydRJtYBVhcKEHv8e3zy0O_lV94_ARfngouQ&s" 
                                 alt="IUTAJS Charallave" 
                                 class="mx-auto h-24 object-contain">
                            <p class="text-sm mt-2">Instituto Universitario de Tecnología Antonio José de Sucre<br>Ampliación Charallave</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('sidebar-component', SidebarComponent); 