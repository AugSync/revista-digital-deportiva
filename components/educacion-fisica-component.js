class EducacionFisicaComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-4">
                <div>
                    <!-- Artículo destacado ocupando todo el ancho -->
                    <div>
                        <div class="relative">
                            <img src="https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                 alt="Educación Física, Salud y Deporte" 
                                 class="w-full h-96 object-cover rounded shadow-lg">
                            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 text-white backdrop-blur-sm rounded-b">
                                <h2 class="text-4xl font-bold">Educación Física, Salud y Deporte</h2>
                                <p class="mt-2 text-xl">Pilares fundamentales para el desarrollo integral</p>
                            </div>
                        </div>
                        
                        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2">DEFINICIÓN Y CARACTERÍSTICAS</h3>
                                <p class="mt-4 text-gray-700 leading-relaxed">La Educación Física es una disciplina pedagógica que utiliza el movimiento como medio para formar y educar al individuo de manera integral. Busca desarrollar competencias motrices, cognitivas, afectivas y sociales mediante la actividad física planificada.</p>
                                
                                <p class="mt-4 text-gray-700 leading-relaxed">Entre sus características principales destacan:</p>
                                
                                <ul class="list-disc ml-6 mt-3 text-gray-700">
                                    <li>Promueve hábitos saludables y estilos de vida activos</li>
                                    <li>Desarrolla capacidades físicas y coordinativas</li>
                                    <li>Fomenta valores como el trabajo en equipo y la superación personal</li>
                                    <li>Contribuye a la alfabetización motriz y deportiva</li>
                                </ul>
                            </div>
                            
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-900">
                                <h3 class="text-xl font-bold text-blue-900">PRUEBA DE APTITUD FÍSICA</h3>
                                
                                <p class="mt-3 text-gray-700">Las Pruebas de Aptitud Física (PAF) son evaluaciones estandarizadas que miden las capacidades físicas de una persona. Estas pruebas se realizan siguiendo estos pasos:</p>
                                
                                <div class="mt-4 space-y-3">
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">1. Preparación</span>
                                        <p class="text-sm mt-1">El participante debe realizar un calentamiento adecuado y recibir instrucciones claras sobre cada prueba.</p>
                                    </div>
                                    
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">2. Evaluación de componentes</span>
                                        <p class="text-sm mt-1">Se realizan pruebas específicas para medir resistencia, fuerza, velocidad, flexibilidad y coordinación.</p>
                                    </div>
                                    
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">3. Registro de resultados</span>
                                        <p class="text-sm mt-1">Los datos obtenidos se comparan con tablas normativas según edad y sexo para determinar el nivel de aptitud física.</p>
                                    </div>
                                    
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">4. Retroalimentación</span>
                                        <p class="text-sm mt-1">Se proporciona información sobre los resultados y recomendaciones personalizadas para mejorar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('educacion-fisica-component', EducacionFisicaComponent); 