'use client';

import React, { useState } from 'react';
import SeccionDescargaPdfs from './SeccionDescargaPdfs';

export default function DeterminacionArsenico() {
    const [imagenModal, setImagenModal] = useState(null);
    const [autorSeleccionado, setAutorSeleccionado] = useState('edc');

    return (
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-200 font-sans my-6 text-slate-800">

            {/* TÍTULO Y CABECERA DEL ARTÍCULO */}
            <div className="mb-8 border-b border-slate-200 pb-6">
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded border border-cyan-200 inline-block mb-3">
                    Métodos Generales de Análisis — MGA
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] leading-tight">
                    DETERMINACIÓN DE ARSÉNICO
                </h1>
                <p className="text-slate-500 text-sm mt-3 flex items-center gap-4">
                    <span>📅 Publicado en EDC PharmaLab</span>
                    <span>⏱️ Lectura técnica: 10 min</span>
                </p>
            </div>

            {/* ESTRUCTURA PRINCIPAL DE BLOG (8 COLUMNAS CONTENIDO + 4 COLUMNAS SIDEBAR) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* COLUMNA PRINCIPAL (CONTENIDO Y PROCEDIMIENTO COMPLETO) */}
                <div className="lg:col-span-8 space-y-8 text-slate-700 leading-relaxed text-justify">

                    {/* SECCIÓN 1: PROPÓSITO */}
                    <div className="bg-slate-50 border-l-4 border-cyan-500 p-5 rounded-r-2xl shadow-sm">
                        <h2 className="font-extrabold text-[#0A2540] text-sm md:text-base uppercase tracking-wider mb-1">
                            PROPÓSITO
                        </h2>
                        <p className="text-slate-800 text-sm md:text-base font-medium">
                            Prueba para determinar impurezas de Arsénico.
                        </p>
                    </div>

                    {/* SECCIÓN 2: TEORÍA. MÉTODO 1 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-extrabold text-[#0A2540] border-b border-slate-200 pb-2">
                            TEORÍA. MÉTODO 1
                        </h2>

                        <p className="text-sm md:text-base">
                            La prueba se basa en la secuencia de dos reacciones químicas cuantitativas llevadas a cabo bajo condiciones establecidas, a partir del contenido de arsénico en una muestra determinada.
                        </p>

                        <div className="bg-cyan-950 text-white p-5 rounded-2xl space-y-3 text-xs md:text-sm my-4 border border-cyan-800">
                            <p>
                                <strong>En la primera reacción:</strong> El arsénico, en presencia de hidrógeno, forma arsina.
                            </p>
                            <p>
                                <strong>En la segunda reacción:</strong> La arsina así formada reacciona con una solución reactiva de dietilditiocarbamato de plata, formando un compuesto colorido, el cual es valorado por espectrofotometría.
                            </p>
                        </div>

                        <p className="text-sm md:text-base">
                            En medio ácido el arsénico se reduce a arsina cuando reacciona con zinc; la arsina generada en forma de gas reacciona con una solución de dietilditiocarbamato de plata formando un complejo soluble de color rojo cuya intensidad es proporcional al contenido de arsénico en la muestra, el cual es valorado por espectrofotometría visible.
                        </p>

                        {/* FIGURA NO. 1 */}
                        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl my-6 flex flex-col items-center">
                            <div
                                onClick={() => setImagenModal('/figura-no-1.jpg')}
                                className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white max-w-xl w-full flex justify-center p-2"
                            >
                                <img
                                    src="/figura-no-1.jpg"
                                    alt="Figura No. 1. Reacción Arsénico. Método 1."
                                    className="max-h-80 object-contain group-hover:scale-105 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <span className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                                        Haz clic para ampliar 🔍
                                    </span>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-[#0A2540] mt-3 text-center">
                                Figura No. 1. Reacción Arsénico. Método 1.
                            </span>
                        </div>
                    </div>

                    {/* SECCIÓN 3: MATERIALES */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-extrabold text-[#0A2540] border-b border-slate-200 pb-2">
                            MATERIALES
                        </h2>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs md:text-sm">
                            {[
                                'Matraz de Arsénico',
                                'Solución de referencia de arsénico 1 µg/mL',
                                'Horno de secado',
                                'Trióxido de arsénico',
                                'Hidróxido de sodio (1:5)',
                                'Ácido sulfúrico 2 N',
                                'Agua purificada',
                                'Ácido sulfúrico concentrado (para compuestos orgánicos)',
                                'Peróxido de Hidrógeno al 30% (para compuestos orgánicos)',
                                'Parrilla de calentamiento (para compuestos orgánicos)',
                                'Ácido Sulfúrico 7 N',
                                'Solución Reactivo de yoduro de potasio',
                                'Solución reactivo de Cloruro estanoso (II) concentrado ácido',
                                '2-propanol',
                                'Solución saturada de acetato de plomo',
                                'Solución reactivo de dietilditiocarbamato',
                                'Zinc granular (malla No. 20)'
                            ].map((item, idx) => (
                                <li key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SECCIÓN 4: PROCEDIMIENTO - PREPARACIÓN SOLUCIÓN STOCK */}
                    <div className="space-y-6 pt-4">
                        <h2 className="text-2xl font-extrabold text-[#0A2540] border-b border-slate-200 pb-2">
                            PROCEDIMIENTO
                        </h2>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-bold text-[#0A2540]">
                                Preparación solución stock de referencia de arsénico 1 µg/mL
                            </h3>

                            <div className="space-y-3 text-xs md:text-sm">
                                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                                    <span className="font-bold text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded">1</span>
                                    <p>Pulverizar y secar trióxido de arsénico a 105 °C por 1 hora.</p>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                                    <span className="font-bold text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded">2</span>
                                    <p>Transferir 66.0 mg de trióxido de arsénico a un matraz de 500 mL y disolver en 5 mL de Hidróxido de sodio (1:5) (m/v).</p>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                                    <span className="font-bold text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded">3</span>
                                    <p>Neutralizar con ácido sulfúrico 2 N, agregar 10 mL más y llevar a volumen con agua recientemente hervida y fría.</p>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                                    <span className="font-bold text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded">4</span>
                                    <p>Transferir 5 mL de la solución anterior a un matraz volumétrico de 500 mL, agregar 5 mL de ácido sulfúrico 2 N y llevar a volumen con agua recientemente hervida y fría. Esta solución contiene el equivalente a 1 µg de arsénico por mL.</p>
                                </div>
                            </div>

                            {/* RECOMENDACIONES Y CONSERVACIÓN */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl text-xs text-amber-950 flex items-center gap-3">
                                    <img src="/profesor.jpg" alt="Nota técnica" className="w-10 h-10 object-contain rounded-full border border-amber-300" />
                                    <div>
                                        <strong>Solución Concentrada:</strong> Conservar en un frasco de vidrio con tapón esmerilado y usar dentro de un período no mayor a 3 días.
                                    </div>
                                </div>

                                <div className="bg-cyan-50 border border-cyan-300 p-4 rounded-xl text-xs text-cyan-950 flex items-center gap-3">
                                    <img src="/profesor.jpg" alt="Nota técnica" className="w-10 h-10 object-contain rounded-full border border-cyan-300" />
                                    <div>
                                        <strong>Solución Diluida (Stock):</strong> Conservar en refrigeración y usar dentro de un período no mayor de 30 días.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN 5: PREPARACIÓN DE MUESTRA */}
                    <div className="space-y-6 pt-4">
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#0A2540]">
                            Preparación de Muestra
                        </h2>

                        <div className="bg-slate-900 text-white p-5 rounded-2xl font-mono text-xs md:text-sm shadow-md">
                            <p className="text-cyan-400 font-bold mb-1">Cálculo de cantidad de muestra (si no se especifica en la monografía):</p>
                            <p className="text-base font-black">G = 3.0 / L</p>
                            <p className="text-slate-300 text-xs mt-2">
                                Donde: G = Cantidad de muestra en gramos | L = Límite de arsénico en partes por millón (ppm).
                            </p>
                        </div>

                        {/* MUESTRAS INORGÁNICAS Y ORGÁNICAS */}
                        <div className="space-y-6">

                            {/* COMPUESTOS INORGÁNICOS */}
                            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                                <h3 className="font-extrabold text-[#0A2540] text-base mb-2">
                                    Para compuestos inorgánicos
                                </h3>
                                <p className="text-xs md:text-sm">
                                    Colocar la muestra en el matraz de arsénico, agregar agua hasta 35 mL y continuar con el procedimiento general.
                                </p>
                            </div>

                            {/* COMPUESTOS ORGÁNICOS CON IMAGEN CAUTION */}
                            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                                <h3 className="font-extrabold text-[#0A2540] text-base">
                                    Para compuestos orgánicos (Digestión)
                                </h3>

                                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs md:text-sm text-amber-950 font-bold flex items-center gap-3">
                                    <img src="/caution.jpg" alt="Caution" className="h-8 object-contain" />
                                    <span>Cuando las muestras se digieren con peróxido de hidrógeno reaccionan en forma violenta. Realizar esta reacción dentro de una campana de extracción.</span>
                                </div>

                                <ul className="space-y-2 text-xs md:text-sm text-slate-700 list-disc list-inside">
                                    <li><strong>Muestras con halógeno (flúor, cloro, bromo, yodo, astato):</strong> Calentar la mezcla a baja temperatura evitando la ebullición al agregar ácido sulfúrico. Agregar el peróxido de hidrógeno antes de que se inicie la carbonización para evitar pérdida de arsénico trivalente.</li>
                                    <li><strong>Sustancias de reacción rápida:</strong> Si reacciona demasiado rápido con los 5 mL de ácido sulfúrico concentrado y empieza a carbonizarse antes de calentar, adicionar 10 mL de ácido sulfúrico diluido (1:2 v/v) y unas gotas de peróxido de hidrógeno antes de calentar.</li>
                                </ul>

                                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs md:text-sm">
                                    <strong className="text-[#0A2540] block">Digestión de la Muestra Orgánica:</strong>
                                    <p className="font-mono text-cyan-900 bg-slate-100 p-2 rounded">
                                        CaHbNcOdSe + H₂SO₄ + H₂O₂ → CO₂ + H₂O + NH₄⁺ + SO₄²⁻ + Iones inorgánicos
                                    </p>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        Muestra + 5 mL de ácido sulfúrico concentrado + perlas de vidrio y digerir en una parrilla a temperatura ≤ 120 °C hasta inicio de carbonización. Agregar cuidadosamente gota a gota peróxido de hidrógeno al 30% esperando cada vez que la reacción cese antes de la siguiente adición. Continuar la digestión hasta que se desprendan vapores de trióxido de azufre y la solución sea incolora o ligeramente amarilla.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* DIAGRAMAS MUESTRA INORGÁNICA Y ORGÁNICA */}
                    <div className="space-y-6 pt-4">
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#0A2540]">
                            Esquemas y Diagramas de Flujo
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Diagramas Inorgánicos */}
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col items-center space-y-3">
                                <div
                                    onClick={() => setImagenModal('/muestra-inorganica-1.png')}
                                    className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white w-full h-48 flex justify-center p-2"
                                >
                                    <img
                                        src="/muestra-inorganica-1.png"
                                        alt="Diagrama Inorgánico 1"
                                        className="max-h-full object-contain group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <div
                                    onClick={() => setImagenModal('/muestra-inorganica-2.png')}
                                    className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white w-full h-48 flex justify-center p-2"
                                >
                                    <img
                                        src="/muestra-inorganica-2.png"
                                        alt="Diagrama Inorgánico 2"
                                        className="max-h-full object-contain group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <span className="text-xs font-bold text-[#0A2540] text-center">
                                    Preparación Muestra Inorgánica
                                </span>
                            </div>

                            {/* Diagramas Orgánicos */}
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col items-center space-y-3">
                                <div
                                    onClick={() => setImagenModal('/muestra-organica-1.png')}
                                    className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white w-full h-48 flex justify-center p-2"
                                >
                                    <img
                                        src="/muestra-organica2.png"
                                        alt="Diagrama Orgánico 1"
                                        className="max-h-full object-contain group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <div
                                    onClick={() => setImagenModal('/digestion-muestra.png')}
                                    className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white w-full h-48 flex justify-center p-2"
                                >
                                    <img
                                        src="/digestion-muestra.png"
                                        alt="Digestión de Muestra"
                                        className="max-h-full object-contain group-hover:scale-105 transition duration-300"
                                    />
                                </div>
                                <span className="text-xs font-bold text-[#0A2540] text-center">
                                    Preparación y Digestión Muestra Orgánica
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* SECCIÓN 6: PROCEDIMIENTO GENERAL */}
                    <div className="space-y-6 pt-4">
                        <h2 className="text-2xl font-extrabold text-[#0A2540] border-b border-slate-200 pb-2">
                            PROCEDIMIENTO GENERAL E INTERPRETACIÓN
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div
                                onClick={() => setImagenModal('/preparacion-referencia.png')}
                                className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white h-44 flex justify-center p-2"
                            >
                                <img src="/preparacion-referencia.png" alt="Preparación Referencia" className="max-h-full object-contain group-hover:scale-105 transition" />
                            </div>

                            <div
                                onClick={() => setImagenModal('/procedimiento-general.png')}
                                className="relative overflow-hidden rounded-xl border border-slate-300 cursor-pointer group bg-white h-44 flex justify-center p-2"
                            >
                                <img src="/procedimiento-general.png" alt="Procedimiento General" className="max-h-full object-contain group-hover:scale-105 transition" />
                            </div>
                        </div>

                        <ol className="space-y-3 list-decimal list-inside text-xs md:text-sm">
                            <li>A la preparación de la muestra y de la referencia, agregar 20 mL de solución de ácido sulfúrico 7 N, 2 mL de yoduro de potasio SR, 0.5 mL de cloruro estanoso (II) SR y 1 mL de 2-propanol. Reposar por 30 min.</li>
                            <li>Empacar la unidad purificadora con dos porciones de algodón previamente impregnados con solución saturada de acetato de plomo y secados al vacío a temperatura ambiente.</li>
                            <li>Colocar 3 mL de solución reactivo de dietilditiocarbamato de plata a cada uno de los matraces de arsénico (muestra y estándar).</li>
                            <li>Agregar 3 g de Zinc (malla No. 20) e inmediatamente tapar.</li>
                            <li>Colocar el sistema en un baño de agua manteniendo la temperatura a 25 ± 3 °C durante 45 min.</li>
                            <li>Pasar las soluciones estándar y muestra a celdas espectrofotométricas y leer a <strong>540 nm</strong>.</li>
                        </ol>

                        {/* IMÁGENES COMPLEMENTARIAS DEL PROCEDIMIENTO */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            <div onClick={() => setImagenModal('/empacado.png')} className="bg-white border rounded-xl p-2 cursor-pointer h-28 flex justify-center items-center">
                                <img src="/empacado.png" alt="Empacado" className="max-h-full object-contain" />
                            </div>
                            <div onClick={() => setImagenModal('/dietilditiocarbamato.png')} className="bg-white border rounded-xl p-2 cursor-pointer h-28 flex justify-center items-center">
                                <img src="/dietilditiocarbamato.png" alt="Dietilditiocarbamato" className="max-h-full object-contain" />
                            </div>
                            <div onClick={() => setImagenModal('/adicion-zinc.png')} className="bg-white border rounded-xl p-2 cursor-pointer h-28 flex justify-center items-center">
                                <img src="/adicion-zinc.png" alt="Adición de Zinc" className="max-h-full object-contain" />
                            </div>
                            <div onClick={() => setImagenModal('/resultado.png')} className="bg-white border rounded-xl p-2 cursor-pointer h-28 flex justify-center items-center">
                                <img src="/resultado.png" alt="Resultado Complejo Rojo" className="max-h-full object-contain" />
                            </div>
                        </div>

                        {/* INTERPRETACIÓN FINAL */}
                        <div className="bg-cyan-950 text-white p-5 rounded-2xl border border-cyan-800">
                            <h4 className="font-extrabold text-cyan-400 text-sm uppercase mb-1">INTERPRETACIÓN</h4>
                            <p className="text-xs md:text-sm text-slate-200">
                                La intensidad del color o absorbancia producida por la preparación de la muestra <strong>no debe exceder (debe ser menor o igual)</strong> a la producida por la solución de referencia.
                            </p>
                        </div>
                    </div>

                    {/* SECCIÓN DE DESCARGA DE LEADS CON CONEXIÓN A SUPABASE */}
                    <SeccionDescargaPdfs />

                </div>

                {/* SIDEBAR LATERAL (DERECHA - ESTILO BLOG) */}
                <div className="lg:col-span-4 space-y-8">

                    {/* AUTOR */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-[#0A2540] mb-4 pb-2 border-b-2 border-cyan-400">
                            Autor / Revisión
                        </h3>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-full bg-[#0A2540] text-white font-black text-xl flex items-center justify-center border-2 border-cyan-400 shadow">
                                EDC
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0A2540] text-sm">
                                    Comité Técnico EDC PharmaLab
                                </h4>
                                <p className="text-xs text-slate-500">
                                    Control de Calidad y Validación
                                </p>
                            </div>
                        </div>

                        <p className="text-xs text-slate-600 text-justify leading-relaxed">
                            Metodología redactada bajo lineamientos de la FEUM y farmacopeas internacionales.
                        </p>
                    </div>

                    {/* CATEGORÍA */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-[#0A2540] mb-4 pb-2 border-b-2 border-cyan-400">
                            Categorías
                        </h3>

                        <select
                            value={autorSeleccionado}
                            onChange={(e) => setAutorSeleccionado(e.target.value)}
                            className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs font-bold text-slate-800 shadow-sm"
                        >
                            <option value="edc">MGA — Métodos Generales de Análisis</option>
                            <option value="usp">USP Arsenic Test</option>
                            <option value="feum">FEUM Pruebas Límite</option>
                        </select>
                    </div>

                    {/* LINKEDIN */}
                    <div className="bg-[#EFE8D8] p-6 rounded-2xl border border-amber-200 shadow-sm text-center flex flex-col items-center justify-center space-y-3">
                        <span className="text-xs font-extrabold tracking-widest text-slate-700 uppercase">
                            SÍGUENOS EN
                        </span>
                        <span className="text-2xl font-black text-[#0077B5] tracking-tight">
                            LinkedIn<span className="text-xs font-bold text-slate-600">®</span>
                        </span>
                        <p className="text-xs text-slate-600 font-medium">
                            @EDC-PHARMALAB
                        </p>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0077B5] hover:bg-[#005885] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition shadow flex items-center gap-2"
                        >
                            <span>Conectar ↗</span>
                        </a>
                    </div>

                </div>

            </div>

            {/* VISOR MODAL EN PANTALLA COMPLETA */}
            {imagenModal && (
                <div
                    onClick={() => setImagenModal(null)}
                    className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 z-50 cursor-zoom-out animate-fade-in"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-2xl p-4 md:p-6 max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center shadow-2xl border border-slate-200 overflow-hidden"
                    >
                        {/* Botón de Cerrar */}
                        <button
                            onClick={() => setImagenModal(null)}
                            className="absolute top-3 right-3 z-10 bg-[#0A2540] hover:bg-cyan-600 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow cursor-pointer flex items-center gap-1"
                        >
                            <span>Cerrar</span>
                            <span>✕</span>
                        </button>

                        {/* Contenedor de la Imagen */}
                        <div className="w-full h-full flex items-center justify-center bg-white rounded-xl overflow-auto p-2">
                            <img
                                src={imagenModal}
                                alt="Diagrama Ampliado"
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}