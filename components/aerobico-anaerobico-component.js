class AerobicoAnaerobicoComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-6 bg-gradient-to-b from-white to-blue-50">
                <!-- Titular principal tipo revista -->
                <div class="max-w-6xl mx-auto mb-10">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8">
                            <h2 class="text-5xl font-black text-blue-900 leading-tight">AERÓBICO vs ANAERÓBICO</h2>
                            <p class="mt-4 text-xl text-blue-700">Descubre las claves de los dos sistemas energéticos fundamentales del entrenamiento físico</p>
                        </div>
                        <div class="md:w-1/2 mt-6 md:mt-0">
                            <img src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                 alt="Entrenamiento aeróbico y anaeróbico" 
                                 class="w-full rounded-xl shadow-lg object-cover h-72">
                        </div>
                    </div>
                </div>
                
                <!-- Contenido principal tipo revista -->
                <div class="max-w-6xl mx-auto contenido-seccion">
                    <!-- Tabla comparativa visual -->
                    <div class="bg-white rounded-xl shadow-md overflow-hidden mb-10">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <!-- Lado aeróbico -->
                            <div class="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-r border-blue-200">
                                <div class="flex items-center mb-4">
                                    <div class="rounded-full bg-blue-600 w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-3">A</div>
                                    <h3 class="text-2xl font-bold text-blue-800">EJERCICIO AERÓBICO</h3>
                                </div>
                                
                                <div class="flex mb-6">
                                    <div class="w-1/3">
                                        <img src="https://images.pexels.com/photos/5038818/pexels-photo-5038818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                             alt="Correr es un ejercicio aeróbico" 
                                             class="w-full h-32 object-cover rounded-lg shadow-sm">
                                    </div>
                                    <div class="w-2/3 pl-4">
                                        <p class="text-gray-700">El ejercicio aeróbico utiliza oxígeno para generar energía. Se caracteriza por ser de intensidad moderada y duración prolongada.</p>
                                    </div>
                                </div>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Utiliza oxígeno como fuente principal de energía</p>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Intensidad baja a moderada (60-80% FCmáx)</p>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Duración prolongada (más de 20 minutos)</p>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Mejora la capacidad cardiovascular y resistencia</p>
                                    </div>
                                </div>
                                
                                <div class="mt-6 bg-white p-4 rounded-lg shadow-sm">
                                    <h4 class="font-bold text-blue-800 mb-2">EJEMPLOS:</h4>
                                    <div class="grid grid-cols-3 gap-2">
                                        <div class="text-center">
                                            <div class="rounded-lg overflow-hidden bg-gray-100 mb-1">
                                                <img src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                                                     alt="Correr" 
                                                     class="h-16 w-full object-cover">
                                            </div>
                                            <span class="text-sm font-medium">Correr</span>
                                        </div>
                                        <div class="text-center">
                                            <div class="rounded-lg overflow-hidden bg-gray-100 mb-1">
                                                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                                                     alt="Ciclismo" 
                                                     class="h-16 w-full object-cover">
                                            </div>
                                            <span class="text-sm font-medium">Ciclismo</span>
                                        </div>
                                        <div class="text-center">
                                            <div class="rounded-lg overflow-hidden bg-gray-100 mb-1">
                                                <img src="https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" 
                                                     alt="Natación" 
                                                     class="h-16 w-full object-cover">
                                            </div>
                                            <span class="text-sm font-medium">Natación</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Lado anaeróbico -->
                            <div class="p-6 bg-gradient-to-br from-red-50 to-red-100">
                                <div class="flex items-center mb-4">
                                    <div class="rounded-full bg-red-600 w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-3">AN</div>
                                    <h3 class="text-2xl font-bold text-red-800">EJERCICIO ANAERÓBICO</h3>
                                </div>
                                
                                <div class="flex mb-6">
                                    <div class="w-1/3">
                                        <img src="https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                             alt="Levantamiento de pesas" 
                                             class="w-full h-32 object-cover rounded-lg shadow-sm">
                                    </div>
                                    <div class="w-2/3 pl-4">
                                        <p class="text-gray-700">El ejercicio anaeróbico no requiere oxígeno para generar energía. Se caracteriza por ser de alta intensidad y corta duración.</p>
                                    </div>
                                </div>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">No utiliza oxígeno como fuente principal de energía</p>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Alta intensidad (80-100% FCmáx)</p>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Corta duración (menos de 2 minutos)</p>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-700">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p class="text-gray-700">Desarrolla fuerza, potencia y masa muscular</p>
                                    </div>
                                </div>
                                
                                <div class="mt-6 bg-white p-4 rounded-lg shadow-sm">
                                    <h4 class="font-bold text-red-800 mb-2">EJEMPLOS:</h4>
                                    <div class="grid grid-cols-3 gap-2">
                                        <div class="text-center">
                                            <div class="rounded-lg overflow-hidden bg-gray-100 mb-1">
                                                <img src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                     alt="Pesas" 
                                                     class="h-16 w-full object-cover">
                                            </div>
                                            <span class="text-sm font-medium">Pesas</span>
                                        </div>
                                        <div class="text-center">
                                            <div class="rounded-lg overflow-hidden bg-gray-100 mb-1">
                                                <img src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                     alt="Sprints" 
                                                     class="h-16 w-full object-cover">
                                            </div>
                                            <span class="text-sm font-medium">Sprints</span>
                                        </div>
                                        <div class="text-center">
                                            <div class="rounded-lg overflow-hidden bg-gray-100 mb-1">
                                                <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                                     alt="HIIT" 
                                                     class="h-16 w-full object-cover">
                                            </div>
                                            <span class="text-sm font-medium">HIIT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Sección de comparativa de beneficios -->
                    <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-10">
                        <h3 class="text-2xl font-bold text-blue-900 mb-4 text-center">BENEFICIOS PRINCIPALES</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Beneficios del aeróbico -->
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b border-blue-200 pb-2">EJERCICIO AERÓBICO</h4>
                                <div class="space-y-3">
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Mejora la salud cardiovascular y reduce el riesgo de enfermedades cardíacas</p>
                                    </div>
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Ayuda a controlar el peso corporal y quemar grasa</p>
                                    </div>
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Aumenta la resistencia general y reduce la fatiga</p>
                                    </div>
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Mejora el estado de ánimo y reduce el estrés y la ansiedad</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Beneficios del anaeróbico -->
                            <div>
                                <h4 class="font-bold text-red-700 mb-3 border-b border-red-200 pb-2">EJERCICIO ANAERÓBICO</h4>
                                <div class="space-y-3">
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Aumenta la fuerza muscular y la potencia</p>
                                    </div>
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Mejora la densidad ósea y previene la osteoporosis</p>
                                    </div>
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Acelera el metabolismo y ayuda a quemar calorías incluso después del ejercicio</p>
                                    </div>
                                    <div class="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Mejora la capacidad para realizar actividades explosivas y de alta intensidad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Consejo del experto -->
                    <div class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-xl shadow-md overflow-hidden">
                        <div class="p-6">
                            <div class="flex flex-col md:flex-row items-center">
                                <div class="md:w-1/4 mb-4 md:mb-0 flex justify-center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp_XG_X940OUj6D76GeU9mAoKrTL9Q82_kA&s" 
                                         alt="Noel 'Chita' Sanvicente, Entrenador venezolano" 
                                         class="w-24 h-24 rounded-full object-cover border-4 border-white shadow">
                                </div>
                                <div class="md:w-3/4 md:pl-6">
                                    <h3 class="text-xl font-bold mb-2">CONSEJO DEL EXPERTO</h3>
                                    <p class="italic">"Para alcanzar el máximo rendimiento deportivo, hay que trabajar tanto el sistema aeróbico como el anaeróbico de forma equilibrada. Un jugador no solo debe tener resistencia durante los 90 minutos, sino también capacidad explosiva en momentos decisivos. Este balance en la preparación física es lo que distingue a los grandes equipos y ha sido clave en todos mis proyectos exitosos."</p>
                                    <p class="mt-2 font-medium">— Noel "Chita" Sanvicente, Entrenador venezolano múltiple campeón nacional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aerobico-anaerobico-component', AerobicoAnaerobicoComponent); 