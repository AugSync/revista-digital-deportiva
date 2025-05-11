class FrecuenciaCardiacaComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="seccion-completa p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                <h2 class="text-3xl font-bold text-center text-blue-900 border-b-2 border-blue-500 pb-3 mb-8 max-w-3xl mx-auto">FRECUENCIA CARDÍACA: EL LENGUAJE DE TU CORAZÓN</h2>
                
                <div class="max-w-6xl mx-auto contenido-seccion">
                    <!-- Layout tipo revista con secciones entrecruzadas -->
                    <div class="grid grid-cols-12 gap-6">
                        <!-- Sección de introducción -->
                        <div class="col-span-12 md:col-span-7 bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="flex flex-col md:flex-row">
                                <div class="md:w-1/2 p-6">
                                    <h3 class="text-2xl font-bold text-blue-800">El pulso de la vida</h3>
                                    <p class="mt-3 text-gray-700 leading-relaxed">La frecuencia cardíaca (FC) es el número de latidos del corazón por minuto, un indicador vital que refleja la intensidad del ejercicio y tu condición física general.</p>
                                    <p class="mt-3 text-gray-700 leading-relaxed">Conocer y monitorear tu frecuencia cardíaca te permite entrenar de manera más eficiente y segura, optimizando los resultados de tu actividad física.</p>
                                </div>
                                <div class="md:w-1/2">
                                    <img src="https://cardiosalud.org/wp-content/uploads/2019/04/pulso.jpg" 
                                         alt="Doctor tomando el pulso a un paciente" 
                                         class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>

                        <!-- Sección de medición -->
                        <div class="col-span-12 md:col-span-5 bg-blue-800 text-white rounded-lg shadow-md overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-2xl font-bold border-b border-blue-300 pb-2 mb-6">CÓMO MEDIR TU FRECUENCIA CARDÍACA</h3>
                                <div class="mt-4 space-y-6">
                                    <div class="flex items-start gap-4">
                                        <div class="bg-blue-950 rounded-full w-10 h-10 flex items-center justify-center text-white text-lg font-semibold shrink-0">1</div>
                                        <p class="text-lg">Coloca los dedos índice y medio en la muñeca (pulso radial) o en el cuello (pulso carotídeo).</p>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="bg-blue-950 rounded-full w-10 h-10 flex items-center justify-center text-white text-lg font-semibold shrink-0">2</div>
                                        <p class="text-lg">Presiona ligeramente hasta sentir los latidos.</p>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="bg-blue-950 rounded-full w-10 h-10 flex items-center justify-center text-white text-lg font-semibold shrink-0">3</div>
                                        <p class="text-lg">Cuenta los latidos durante 15 segundos.</p>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="bg-blue-950 rounded-full w-10 h-10 flex items-center justify-center text-white text-lg font-semibold shrink-0">4</div>
                                        <p class="text-lg">Multiplica este número por 4 para obtener tu frecuencia cardíaca por minuto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Gráfico de zonas -->
                        <div class="col-span-12 md:col-span-6 bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-blue-800 mb-4">ZONAS DE ENTRENAMIENTO CARDÍACO</h3>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center">
                                        <div class="w-3/12 pr-3 text-right text-sm">50-60% FCmáx</div>
                                        <div class="w-7/12">
                                            <div class="bg-green-200 h-6 rounded-md relative">
                                                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium">Recuperación</div>
                                            </div>
                                        </div>
                                        <div class="w-2/12 pl-3 text-sm">110-130 ppm*</div>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-3/12 pr-3 text-right text-sm">60-70% FCmáx</div>
                                        <div class="w-7/12">
                                            <div class="bg-blue-200 h-6 rounded-md relative">
                                                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium">Aeróbica</div>
                                            </div>
                                        </div>
                                        <div class="w-2/12 pl-3 text-sm">130-150 ppm*</div>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-3/12 pr-3 text-right text-sm">70-80% FCmáx</div>
                                        <div class="w-7/12">
                                            <div class="bg-yellow-200 h-6 rounded-md relative">
                                                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium">Quema de grasa</div>
                                            </div>
                                        </div>
                                        <div class="w-2/12 pl-3 text-sm">150-170 ppm*</div>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-3/12 pr-3 text-right text-sm">80-90% FCmáx</div>
                                        <div class="w-7/12">
                                            <div class="bg-orange-200 h-6 rounded-md relative">
                                                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium">Anaeróbica</div>
                                            </div>
                                        </div>
                                        <div class="w-2/12 pl-3 text-sm">170-190 ppm*</div>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <div class="w-3/12 pr-3 text-right text-sm">90-100% FCmáx</div>
                                        <div class="w-7/12">
                                            <div class="bg-red-200 h-6 rounded-md relative">
                                                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium">Máximo esfuerzo</div>
                                            </div>
                                        </div>
                                        <div class="w-2/12 pl-3 text-sm">190-210 ppm*</div>
                                    </div>
                                </div>
                                
                                <p class="mt-3 text-xs text-gray-500">* Valores aproximados para una persona de 30 años (FCmáx = 220 - 30 = 190)</p>
                            </div>
                        </div>

                        <!-- Fórmula y calculadora -->
                        <div class="col-span-12 md:col-span-6 bg-white rounded-lg shadow-md overflow-hidden">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-blue-800 mb-4">FÓRMULA DE KARVONEN</h3>
                                
                                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <div class="flex flex-col items-center">
                                        <div class="text-xl font-bold text-blue-900">FCmáx = 220 - edad</div>
                                        <div class="mt-2 text-gray-600 text-center">Esta fórmula te permite calcular tu frecuencia cardíaca máxima teórica según tu edad.</div>
                                        
                                        <div class="mt-4 w-full max-w-sm">
                                            <div class="bg-white p-4 rounded border border-gray-200 shadow-sm">
                                                <div class="text-center font-medium text-gray-700 mb-2">Ejemplo para una persona de 30 años</div>
                                                <div class="flex justify-center space-x-2 items-center">
                                                    <div>FCmáx = 220 - 30 = <span class="font-bold text-blue-700">190 lpm</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-4">
                                    <h4 class="font-medium text-blue-800">BENEFICIOS DE ENTRENAR POR ZONAS</h4>
                                    <div class="mt-2 grid grid-cols-2 gap-3">
                                        <div class="bg-gray-50 p-3 rounded">
                                            <span class="font-medium text-blue-700">Mayor eficiencia</span>
                                            <p class="text-sm mt-1">Optimiza el tiempo y resultados de tu entrenamiento.</p>
                                        </div>
                                        <div class="bg-gray-50 p-3 rounded">
                                            <span class="font-medium text-blue-700">Menor riesgo</span>
                                            <p class="text-sm mt-1">Reduce el riesgo de lesiones y sobreentrenamiento.</p>
                                        </div>
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

customElements.define('frecuencia-cardiaca-component', FrecuenciaCardiacaComponent); 