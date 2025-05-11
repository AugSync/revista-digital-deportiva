class AptitudFisicaComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-4">
                <div class="grid grid-cols-3 gap-6">
                    <!-- Columna principal con artículo destacado -->
                    <div class="col-span-3 md:col-span-2">
                        <div class="relative">
                            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                 alt="Aptitud física" 
                                 class="w-full h-96 object-cover rounded shadow-lg">
                            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 text-white backdrop-blur-sm rounded-b">
                                <h2 class="text-4xl font-bold">Aptitud Física</h2>
                                <p class="mt-2 text-xl">La clave para alcanzar una vida plena y saludable</p>
                            </div>
                        </div>
                        
                        <div class="mt-8 grid grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2">¿QUÉ ES LA APTITUD FÍSICA?</h3>
                                <p class="mt-4 text-gray-700 leading-relaxed">La aptitud física se refiere a la capacidad que tiene el organismo para realizar actividades físicas con vigor y efectividad, retardando la aparición de la fatiga y disminuyendo el riesgo de lesiones. Un buen nivel de aptitud física te permite disfrutar plenamente de tus actividades diarias.</p>
                                
                                <p class="mt-4 text-gray-700 leading-relaxed">La aptitud física no solo mejora el rendimiento deportivo, sino que también tiene un impacto positivo en la salud mental, reduciendo el estrés y mejorando el estado de ánimo.</p>
                            </div>
                            
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-900">
                                <h3 class="text-xl font-bold text-blue-900">COMPONENTES ESENCIALES</h3>
                                
                                <div class="mt-4 grid grid-cols-2 gap-4">
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">Resistencia cardiovascular</span>
                                        <p class="text-sm mt-1">Capacidad del corazón y los pulmones para suministrar oxígeno durante actividades prolongadas.</p>
                                    </div>
                                    
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">Fuerza muscular</span>
                                        <p class="text-sm mt-1">Cantidad de fuerza que puede generar un músculo o grupo muscular al realizar un esfuerzo.</p>
                                    </div>
                                    
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">Flexibilidad</span>
                                        <p class="text-sm mt-1">Capacidad de las articulaciones para moverse en todo su rango de movimiento sin limitaciones.</p>
                                    </div>
                                    
                                    <div class="bg-white p-3 rounded shadow-sm">
                                        <span class="font-bold block text-blue-800">Composición corporal</span>
                                        <p class="text-sm mt-1">Proporción de grasa corporal en relación con la masa magra que conforma el cuerpo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Sidebar con contenido adicional -->
                    <sidebar-component></sidebar-component>
                </div>
            </section>
        `;
    }
}

customElements.define('aptitud-fisica-component', AptitudFisicaComponent); 