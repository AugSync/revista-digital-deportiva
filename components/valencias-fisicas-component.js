class ValenciasFisicasComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-6 bg-white">
                <!-- Cabecera de revista con imagen de fondo -->
                <div class="relative mb-8">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent rounded-lg"></div>
                    <div class="relative py-10 px-6 md:px-12">
                        <div class="md:w-1/2">
                            <h2 class="text-4xl font-extrabold text-white leading-tight">VALENCIAS FÍSICAS</h2>
                            <p class="text-xl text-blue-100 mt-2">Los pilares fundamentales del rendimiento deportivo</p>
                        </div>
                    </div>
                </div>
                
                <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 contenido-seccion">
                    <!-- Columna principal con texto introductorio -->
                    <div class="md:col-span-2">
                        <div class="prose prose-lg max-w-none">
                            <h3 class="text-2xl font-bold text-blue-900 border-b border-blue-200 pb-2">EL PODER DE LAS CAPACIDADES FÍSICAS</h3>
                            <p class="text-gray-700">Las valencias físicas son las cualidades o capacidades que posee el cuerpo humano para realizar diferentes tipos de actividades físicas. Son fundamentales tanto para el desarrollo deportivo como para la salud general, ya que representan los cimientos sobre los que se construye cualquier actividad física o deportiva.</p>
                            
                            <p class="text-gray-700">Cada disciplina deportiva requiere diferentes combinaciones de estas capacidades, y su desarrollo equilibrado es esencial para alcanzar el máximo rendimiento y evitar lesiones.</p>
                        </div>
                        
                        <!-- Tarjetas de las valencias en dos columnas -->
                        <div class="mt-8 grid grid-cols-2 gap-4">
                            <div class="flex bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-sm overflow-hidden">
                                <div class="w-1/3">
                                    <img src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Fuerza" 
                                         class="w-full h-full object-cover">
                                </div>
                                <div class="w-2/3 p-4">
                                    <h4 class="font-bold text-red-800">FUERZA</h4>
                                    <p class="text-sm mt-1">Capacidad para generar tensión muscular contra una resistencia. Fundamental para todos los movimientos del cuerpo.</p>
                                </div>
                            </div>
                            
                            <div class="flex bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-sm overflow-hidden">
                                <div class="w-1/3">
                                    <img src="https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Velocidad" 
                                         class="w-full h-full object-cover">
                                </div>
                                <div class="w-2/3 p-4">
                                    <h4 class="font-bold text-blue-800">VELOCIDAD</h4>
                                    <p class="text-sm mt-1">Capacidad para realizar movimientos en el menor tiempo posible. Esencial en deportes explosivos.</p>
                                </div>
                            </div>
                            
                            <div class="flex bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-sm overflow-hidden">
                                <div class="w-1/3">
                                    <img src="https://images.pexels.com/photos/6456129/pexels-photo-6456129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Resistencia" 
                                         class="w-full h-full object-cover">
                                </div>
                                <div class="w-2/3 p-4">
                                    <h4 class="font-bold text-green-800">RESISTENCIA</h4>
                                    <p class="text-sm mt-1">Capacidad para mantener un esfuerzo durante un tiempo prolongado. Vital para deportes de larga duración.</p>
                                </div>
                            </div>
                            
                            <div class="flex bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-sm overflow-hidden">
                                <div class="w-1/3">
                                    <img src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Flexibilidad" 
                                         class="w-full h-full object-cover">
                                </div>
                                <div class="w-2/3 p-4">
                                    <h4 class="font-bold text-purple-800">FLEXIBILIDAD</h4>
                                    <p class="text-sm mt-1">Capacidad para realizar movimientos con la máxima amplitud articular. Mejora el rendimiento y previene lesiones.</p>
                                </div>
                            </div>
                            
                            <div class="flex bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-sm overflow-hidden">
                                <div class="w-1/3">
                                    <img src="https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Coordinación" 
                                         class="w-full h-full object-cover">
                                </div>
                                <div class="w-2/3 p-4">
                                    <h4 class="font-bold text-yellow-800">COORDINACIÓN</h4>
                                    <p class="text-sm mt-1">Capacidad para sincronizar movimientos de forma precisa. Fundamental en deportes técnicos y de precisión.</p>
                                </div>
                            </div>
                            
                            <div class="flex bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg shadow-sm overflow-hidden">
                                <div class="w-1/3">
                                    <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Agilidad" 
                                         class="w-full h-full object-cover">
                                </div>
                                <div class="w-2/3 p-4">
                                    <h4 class="font-bold text-pink-800">AGILIDAD</h4>
                                    <p class="text-sm mt-1">Capacidad para cambiar de dirección rápidamente. Esencial en deportes con movimientos impredecibles.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Información adicional sobre entrenamiento de valencias -->
                        <div class="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">ENTRENAMIENTO INTEGRAL DE VALENCIAS FÍSICAS</h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div class="border-l-4 border-blue-500 pl-4">
                                    <h4 class="font-bold text-blue-800">PERIODIZACIÓN</h4>
                                    <p class="text-sm text-gray-700 mt-1">La organización del entrenamiento en ciclos permite desarrollar diferentes valencias en momentos específicos, optimizando el rendimiento general.</p>
                                </div>
                                
                                <div class="border-l-4 border-green-500 pl-4">
                                    <h4 class="font-bold text-green-800">ESPECIFICIDAD</h4>
                                    <p class="text-sm text-gray-700 mt-1">El entrenamiento debe ser específico al deporte practicado, enfocándose en las valencias predominantes en cada disciplina.</p>
                                </div>
                                
                                <div class="border-l-4 border-red-500 pl-4">
                                    <h4 class="font-bold text-red-800">PROGRESIÓN</h4>
                                    <p class="text-sm text-gray-700 mt-1">El aumento gradual de la intensidad y complejidad es clave para desarrollar las valencias físicas sin provocar lesiones.</p>
                                </div>
                                
                                <div class="border-l-4 border-purple-500 pl-4">
                                    <h4 class="font-bold text-purple-800">RECUPERACIÓN</h4>
                                    <p class="text-sm text-gray-700 mt-1">Tan importante como el entrenamiento mismo, permite la supercompensación y adaptación del organismo al esfuerzo.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Gráfico de importancia relativa -->
                        <div class="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">IMPORTANCIA RELATIVA EN DIFERENTES DEPORTES</h3>
                            
                            <div class="space-y-4">
                                <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="font-medium text-blue-800">Fútbol</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="flex rounded-full h-2.5">
                                            <div class="bg-red-500 h-2.5 rounded-l-full" style="width: 20%"></div>
                                            <div class="bg-blue-500 h-2.5" style="width: 25%"></div>
                                            <div class="bg-green-500 h-2.5" style="width: 25%"></div>
                                            <div class="bg-purple-500 h-2.5" style="width: 10%"></div>
                                            <div class="bg-yellow-500 h-2.5 rounded-r-full" style="width: 20%"></div>
                                        </div>
                                    </div>
                                    <div class="flex text-xs justify-between mt-1">
                                        <span>Fuerza</span>
                                        <span>Velocidad</span>
                                        <span>Resistencia</span>
                                        <span>Flexibilidad</span>
                                        <span>Coordinación</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="font-medium text-blue-800">Natación</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="flex rounded-full h-2.5">
                                            <div class="bg-red-500 h-2.5 rounded-l-full" style="width: 25%"></div>
                                            <div class="bg-blue-500 h-2.5" style="width: 15%"></div>
                                            <div class="bg-green-500 h-2.5" style="width: 30%"></div>
                                            <div class="bg-purple-500 h-2.5" style="width: 20%"></div>
                                            <div class="bg-yellow-500 h-2.5 rounded-r-full" style="width: 10%"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="flex justify-between mb-1">
                                        <span class="font-medium text-blue-800">Gimnasia</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="flex rounded-full h-2.5">
                                            <div class="bg-red-500 h-2.5 rounded-l-full" style="width: 30%"></div>
                                            <div class="bg-blue-500 h-2.5" style="width: 10%"></div>
                                            <div class="bg-green-500 h-2.5" style="width: 10%"></div>
                                            <div class="bg-purple-500 h-2.5" style="width: 30%"></div>
                                            <div class="bg-yellow-500 h-2.5 rounded-r-full" style="width: 20%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Columna secundaria con recuadros destacados -->
                    <div>
                        <!-- Destacado: Deportes y sus valencias principales -->
                        <div class="bg-blue-50 rounded-lg shadow-sm p-5 border-l-4 border-blue-500">
                            <h3 class="text-xl font-bold text-blue-900 mb-4">DEPORTES Y SUS VALENCIAS PRINCIPALES</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <img src="https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Atletismo" 
                                         class="w-16 h-16 object-cover rounded-full mr-3">
                                    <div>
                                        <h4 class="font-bold text-blue-800">ATLETISMO</h4>
                                        <p class="text-sm">Velocidad, resistencia y fuerza</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <img src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Natación" 
                                         class="w-16 h-16 object-cover rounded-full mr-3">
                                    <div>
                                        <h4 class="font-bold text-blue-800">NATACIÓN</h4>
                                        <p class="text-sm">Resistencia y coordinación</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <img src="https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Gimnasia" 
                                         class="w-16 h-16 object-cover rounded-full mr-3">
                                    <div>
                                        <h4 class="font-bold text-blue-800">GIMNASIA</h4>
                                        <p class="text-sm">Fuerza, flexibilidad y coordinación</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center">
                                    <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Fútbol" 
                                         class="w-16 h-16 object-cover rounded-full mr-3">
                                    <div>
                                        <h4 class="font-bold text-blue-800">FÚTBOL</h4>
                                        <p class="text-sm">Resistencia, velocidad y coordinación</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Destacado: Sabías que... -->
                        <div class="mt-6 bg-yellow-50 rounded-lg shadow-sm p-5 border border-yellow-200">
                            <h3 class="text-lg font-bold text-yellow-800">¿SABÍAS QUE...?</h3>
                            <p class="mt-2 text-sm text-gray-700">El trabajo adecuado de las valencias físicas no solo mejora el rendimiento deportivo, sino también la calidad de vida. Estudios han demostrado que el entrenamiento equilibrado de todas estas capacidades reduce hasta en un 30% el riesgo de lesiones y mejora significativamente los indicadores de salud.</p>
                        </div>
                        
                        <!-- Frase destacada -->
                        <div class="mt-6 text-center bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-sm p-5 text-white">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX-CDjR2yW0Rd3-bdGk5SscIfZ8s7USLItA&s" 
                                 alt="Rafael Dudamel, Entrenador Selección Venezuela" 
                                 class="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow">
                            <blockquote class="italic text-lg">"Las valencias físicas son la base sobre la cual se construye el rendimiento deportivo. Un jugador puede tener un gran talento técnico, pero sin la fuerza, resistencia, velocidad y flexibilidad adecuadas, nunca podrá desplegar todo su potencial en el campo. El desarrollo integral de estas capacidades es lo que distingue a los atletas élite."</blockquote>
                            <p class="mt-2 font-medium">- Rafael Dudamel, Ex-Entrenador Selección Venezuela</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('valencias-fisicas-component', ValenciasFisicasComponent); 