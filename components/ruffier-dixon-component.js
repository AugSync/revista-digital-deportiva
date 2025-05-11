class RuffierDixonComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-4">
                <div>
                    <!-- Artículo destacado -->
                    <div>
                        <div class="relative">
                            <img src="https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                 alt="Método Ruffier Dixon" 
                                 class="w-full h-96 object-cover rounded shadow-lg">
                            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-6 text-white backdrop-blur-sm rounded-b">
                                <h2 class="text-4xl font-bold">Método Ruffier Dixon</h2>
                                <p class="mt-2 text-xl">Evaluación de la condición física y capacidad de recuperación</p>
                            </div>
                        </div>
                        
                        <div class="mt-8 grid grid-cols-1 gap-6">
                            <div>
                                <h3 class="text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2">¿QUÉ ES EL MÉTODO RUFFIER DIXON?</h3>
                                <p class="mt-4 text-gray-700 leading-relaxed">El Método Ruffier Dixon, también conocido como Índice de Ruffier Dixon (IRD), es una prueba sencilla pero efectiva para evaluar la condición física de una persona, especialmente su resistencia cardiovascular y su capacidad de recuperación tras un esfuerzo físico. Fue desarrollado por el Dr. James Edward Ruffier y perfeccionado posteriormente por J. Dixon.</p>
                                
                                <p class="mt-4 text-gray-700 leading-relaxed">Este método es ampliamente utilizado en el ámbito deportivo y en la educación física por su simplicidad de aplicación y la valiosa información que proporciona sobre la adaptación del organismo al esfuerzo.</p>
                            </div>
                            
                            <div class="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-900">
                                <h3 class="text-xl font-bold text-blue-900">PROCEDIMIENTO DE LA PRUEBA</h3>
                                
                                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <ol class="space-y-4">
                                            <li class="bg-white p-4 rounded shadow-sm">
                                                <span class="font-bold text-blue-800">Paso 1:</span>
                                                <p class="mt-1">Medir la frecuencia cardíaca en reposo (P1) durante 15 segundos y multiplicar por 4 para obtener pulsaciones por minuto. La persona debe estar en reposo al menos 5 minutos antes de la medición.</p>
                                            </li>
                                            
                                            <li class="bg-white p-4 rounded shadow-sm">
                                                <span class="font-bold text-blue-800">Paso 2:</span>
                                                <p class="mt-1">Realizar 30 sentadillas en 45 segundos (ritmo controlado).</p>
                                            </li>
                                            
                                            <li class="bg-white p-4 rounded shadow-sm">
                                                <span class="font-bold text-blue-800">Paso 3:</span>
                                                <p class="mt-1">Inmediatamente después del ejercicio, medir la frecuencia cardíaca (P2) durante 15 segundos y multiplicar por 4.</p>
                                            </li>
                                            
                                            <li class="bg-white p-4 rounded shadow-sm">
                                                <span class="font-bold text-blue-800">Paso 4:</span>
                                                <p class="mt-1">Después de un minuto de recuperación, volver a medir la frecuencia cardíaca (P3) durante 15 segundos y multiplicar por 4.</p>
                                            </li>
                                        </ol>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <img src="https://images.pexels.com/photos/6551067/pexels-photo-6551067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                             alt="Medición de frecuencia cardíaca" 
                                             class="rounded-lg shadow-md max-h-80 object-cover">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
                                <h3 class="text-xl font-bold text-blue-900">FÓRMULA DEL ÍNDICE RUFFIER DIXON (IRD)</h3>
                                
                                <div class="mt-4 bg-white p-4 rounded shadow-sm">
                                    <p class="font-mono text-lg text-center">IRD = [(P1 + P2 + P3) - 200] / 10</p>
                                    
                                    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                                        <div class="text-right font-bold md:text-right text-center">Donde:</div>
                                        <div class="col-span-2">
                                            <p>P1 = Pulsaciones en reposo</p>
                                            <p>P2 = Pulsaciones después del esfuerzo</p>
                                            <p>P3 = Pulsaciones después de 1 minuto de recuperación</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-900">
                                    <h3 class="text-xl font-bold text-blue-900">INTERPRETACIÓN DE RESULTADOS</h3>
                                    
                                    <div class="mt-4 overflow-x-auto">
                                        <table class="min-w-full bg-white rounded-lg overflow-hidden">
                                            <thead class="bg-blue-900 text-white">
                                                <tr>
                                                    <th class="py-3 px-4 text-left">Resultado IRD</th>
                                                    <th class="py-3 px-4 text-left">Condición Física</th>
                                                </tr>
                                            </thead>
                                            <tbody class="divide-y divide-gray-200">
                                                <tr class="hover:bg-blue-50">
                                                    <td class="py-3 px-4 font-bold">Menos de 0</td>
                                                    <td class="py-3 px-4">Excelente</td>
                                                </tr>
                                                <tr class="hover:bg-blue-50">
                                                    <td class="py-3 px-4 font-bold">0 a 5</td>
                                                    <td class="py-3 px-4">Muy buena</td>
                                                </tr>
                                                <tr class="hover:bg-blue-50">
                                                    <td class="py-3 px-4 font-bold">5.1 a 10</td>
                                                    <td class="py-3 px-4">Buena</td>
                                                </tr>
                                                <tr class="hover:bg-blue-50">
                                                    <td class="py-3 px-4 font-bold">10.1 a 15</td>
                                                    <td class="py-3 px-4">Regular</td>
                                                </tr>
                                                <tr class="hover:bg-blue-50">
                                                    <td class="py-3 px-4 font-bold">15.1 a 20</td>
                                                    <td class="py-3 px-4">Insuficiente</td>
                                                </tr>
                                                <tr class="hover:bg-blue-50">
                                                    <td class="py-3 px-4 font-bold">Más de 20</td>
                                                    <td class="py-3 px-4">Deficiente</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <div class="flex items-center justify-center">
                                    <img src="https://images.pexels.com/photos/6551076/pexels-photo-6551076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                         alt="Evaluación de condición física" 
                                         class="rounded-lg shadow-lg max-h-96 object-cover">
                                </div>
                            </div>
                            
                            <div class="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200 mt-4">
                                <h3 class="text-xl font-bold text-blue-900">CONSIDERACIONES IMPORTANTES</h3>
                                
                                <ul class="mt-4 space-y-2 list-disc list-inside text-gray-700">
                                    <li>La prueba debe realizarse en condiciones de reposo previo, evitando realizar actividad física intensa en las 24 horas anteriores.</li>
                                    <li>Es recomendable realizar la prueba en ayunas o al menos 2 horas después de la última comida.</li>
                                    <li>Para obtener resultados confiables, la prueba debe ser aplicada de manera estandarizada.</li>
                                    <li>Las personas con problemas cardíacos o respiratorios deben consultar a un médico antes de realizar esta prueba.</li>
                                    <li>El Índice Ruffier Dixon debe interpretarse como una aproximación a la condición física, no como un diagnóstico médico.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('ruffier-dixon-component', RuffierDixonComponent); 