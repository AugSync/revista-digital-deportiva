class MetodosEvaluacionComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-6 bg-gray-50">
                <!-- Encabezado de sección con diseño atractivo -->
                <div class="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg shadow-lg mb-8">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-3xl md:text-4xl font-bold">MÉTODOS DE EVALUACIÓN FÍSICO-DEPORTIVA</h2>
                        <p class="mt-2 text-blue-100 text-lg">Descubre las herramientas profesionales para medir y mejorar tu rendimiento</p>
                    </div>
                </div>
                
                <div class="max-w-6xl mx-auto contenido-seccion">
                    <!-- Introducción destacada -->
                    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
                        <div class="flex flex-col md:flex-row gap-6 items-center">
                            <div class="md:w-2/3">
                                <h3 class="text-2xl font-bold text-blue-900 mb-4">IMPORTANCIA DE LA EVALUACIÓN DEPORTIVA</h3>
                                <p class="text-gray-700">La evaluación físico-deportiva es un proceso sistemático que permite valorar el estado actual del deportista, establecer objetivos realistas y diseñar programas de entrenamiento personalizados. Una evaluación adecuada garantiza un progreso seguro y eficiente.</p>
                                <p class="mt-3 text-gray-700">Los métodos de evaluación pueden clasificarse en tres grandes categorías, cada una con enfoques y herramientas específicas para valorar distintos aspectos del rendimiento físico.</p>
                            </div>
                            <div class="md:w-1/3">
                                <img src="https://images.pexels.com/photos/6456177/pexels-photo-6456177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                     alt="Evaluación deportiva" 
                                     class="w-full rounded-lg shadow-sm">
                            </div>
                        </div>
                    </div>
                    
                    <!-- Métodos de evaluación en formato revista -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Primera columna: Evaluación directa -->
                        <div>
                            <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <div class="aspect-w-4 aspect-h-3">
                                    <img src="https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Test de Cooper" 
                                         class="w-full h-48 object-cover">
                                </div>
                                <div class="p-5">
                                    <div class="inline-block px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full mb-3">
                                        EVALUACIÓN DIRECTA
                                    </div>
                                    <h3 class="text-xl font-bold text-blue-900 mb-3">PRUEBAS DE CAMPO</h3>
                                    <p class="text-gray-700 text-sm">Las evaluaciones directas miden el rendimiento a través de pruebas específicas realizadas en condiciones controladas.</p>
                                    
                                    <div class="mt-4 space-y-3">
                                        <div class="flex items-start">
                                            <div class="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                                                <span class="text-red-800 font-medium">1</span>
                                            </div>
                                            <div class="ml-3">
                                                <h4 class="font-bold text-gray-800">Test de Cooper</h4>
                                                <p class="text-sm text-gray-600">Evaluación de la resistencia aeróbica mediante una carrera de 12 minutos.</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start">
                                            <div class="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                                                <span class="text-red-800 font-medium">2</span>
                                            </div>
                                            <div class="ml-3">
                                                <h4 class="font-bold text-gray-800">Test de Ruffier</h4>
                                                <p class="text-sm text-gray-600">Evalúa la adaptación cardíaca al esfuerzo mediante mediciones de pulso.</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start">
                                            <div class="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                                                <span class="text-red-800 font-medium">3</span>
                                            </div>
                                            <div class="ml-3">
                                                <h4 class="font-bold text-gray-800">Test de Course Navette</h4>
                                                <p class="text-sm text-gray-600">Mide la capacidad aeróbica mediante carreras progresivas de 20 metros.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Segunda columna: Evaluación indirecta -->
                        <div>
                            <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <div class="aspect-w-4 aspect-h-3">
                                    <img src="https://cdn-fimei.nitrocdn.com/vkMkHKckuullYXNJmhggYnzEUdnpLRRa/assets/images/optimized/rev-872cb33/getindya.com/wp-content/uploads/2020/06/antropometria-deportistas.webp" 
                                         alt="Medición antropométrica" 
                                         class="w-full h-48 object-cover">
                                </div>
                                <div class="p-5">
                                    <div class="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-3">
                                        EVALUACIÓN INDIRECTA
                                    </div>
                                    <h3 class="text-xl font-bold text-blue-900 mb-3">MEDICIONES CORPORALES</h3>
                                    <p class="text-gray-700 text-sm">Las evaluaciones indirectas utilizan parámetros anatómicos y fisiológicos para estimar el rendimiento físico.</p>
                                    
                                    <div class="mt-4">
                                        <div class="grid grid-cols-2 gap-3">
                                            <div class="bg-blue-50 p-3 rounded">
                                                <h4 class="font-bold text-blue-800 text-sm">Antropometría</h4>
                                                <p class="text-xs mt-1">Medición de dimensiones corporales y pliegues cutáneos.</p>
                                            </div>
                                            
                                            <div class="bg-blue-50 p-3 rounded">
                                                <h4 class="font-bold text-blue-800 text-sm">Composición corporal</h4>
                                                <p class="text-xs mt-1">Análisis de masa grasa, muscular y ósea del deportista.</p>
                                            </div>
                                            
                                            <div class="bg-blue-50 p-3 rounded">
                                                <h4 class="font-bold text-blue-800 text-sm">Evaluación postural</h4>
                                                <p class="text-xs mt-1">Análisis de la alineación corporal y desequilibrios musculares.</p>
                                            </div>
                                            
                                            <div class="bg-blue-50 p-3 rounded">
                                                <h4 class="font-bold text-blue-800 text-sm">Test de flexibilidad</h4>
                                                <p class="text-xs mt-1">Evaluación del rango de movimiento articular y elasticidad.</p>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-5 bg-blue-100 p-3 rounded text-center">
                                            <p class="text-sm text-blue-800 font-medium">Los parámetros antropométricos permiten predecir hasta un 70% del rendimiento en deportes específicos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Tercera columna: Evaluación subjetiva -->
                        <div>
                            <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
                                <div class="aspect-w-4 aspect-h-3">
                                    <img src="https://image-api.onlineeducation.center/v2/image/max-width/800/imagen/2013-04-11-08-30-38_imagen3-jpg.jpeg" 
                                         alt="Escala de Percepción del Esfuerzo" 
                                         class="w-full h-48 object-cover">
                                </div>
                                <div class="p-5">
                                    <div class="inline-block px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full mb-3">
                                        EVALUACIÓN SUBJETIVA
                                    </div>
                                    <h3 class="text-xl font-bold text-blue-900 mb-3">PERCEPCIÓN DEL ESFUERZO</h3>
                                    <p class="text-gray-700 text-sm">Las evaluaciones subjetivas se basan en la percepción del deportista sobre su propio esfuerzo y estado físico.</p>
                                    
                                    <div class="mt-4">
                                        <div class="bg-green-50 p-4 rounded border border-green-100">
                                            <h4 class="font-bold text-green-800">ESCALA DE BORG</h4>
                                            <p class="text-sm mt-1">Clasifica la intensidad del esfuerzo percibido del 6 al 20:</p>
                                            
                                            <div class="mt-3 space-y-1">
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">6-8</span>
                                                    <span>Muy, muy ligero</span>
                                                </div>
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">9-10</span>
                                                    <span>Muy ligero</span>
                                                </div>
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">11-12</span>
                                                    <span>Ligero</span>
                                                </div>
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">13-14</span>
                                                    <span>Algo duro</span>
                                                </div>
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">15-16</span>
                                                    <span>Duro</span>
                                                </div>
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">17-18</span>
                                                    <span>Muy duro</span>
                                                </div>
                                                <div class="flex justify-between text-xs">
                                                    <span class="font-medium text-green-700">19-20</span>
                                                    <span>Muy, muy duro</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-4 space-y-2">
                                            <div class="bg-green-50 p-2 rounded">
                                                <span class="font-medium text-green-800 text-sm">Diarios de entrenamiento</span>
                                            </div>
                                            <div class="bg-green-50 p-2 rounded">
                                                <span class="font-medium text-green-800 text-sm">Cuestionarios de percepción</span>
                                            </div>
                                            <div class="bg-green-50 p-2 rounded">
                                                <span class="font-medium text-green-800 text-sm">Registros de actividad física</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Nota final tipo revista -->
                    <div class="mt-8 bg-blue-800 text-white p-5 rounded-lg shadow-md">
                        <div class="flex items-center justify-between">
                            <div class="text-xl font-bold">LA OPINIÓN DEL ESPECIALISTA</div>
                            <div class="text-blue-200 text-sm">CésarSport Revista Deportiva</div>
                        </div>
                        <div class="mt-4 flex items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-vcADqFIuBvCaQwpDJ-TeB-21ERhezWOLQ&s" 
                                 alt="José Julián 'Pepito' Hernández" 
                                 class="w-20 h-20 rounded-full object-cover mr-4 border-2 border-white">
                            <div>
                                <p class="italic">"La evaluación físico-deportiva rigurosa es fundamental para el desarrollo del deportista. Un atleta necesita conocer sus fortalezas y debilidades mediante procesos metodológicos precisos. Las pruebas de campo, las mediciones antropométricas y la percepción subjetiva deben ser tomadas en cuenta para elaborar programas de entrenamiento realmente efectivos. Solo con este enfoque científico podremos elevar el nivel del deporte venezolano."</p>
                                <p class="mt-2 text-blue-200 text-sm">- José Julián "Pepito" Hernández, Entrenador y formador de generaciones del fútbol venezolano</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('metodos-evaluacion-component', MetodosEvaluacionComponent); 