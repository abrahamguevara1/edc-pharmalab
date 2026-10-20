'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function ProgramacionPage() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Estado para la sección de comentarios interactiva simulada
    const [comments, setComments] = useState([
        {
            id: 1,
            nombre: 'QFB. María Elena',
            fecha: 'Hace 2 horas',
            texto: 'Excelente reflexión. Totalmente de acuerdo con la necesidad de alinearnos con GAMP 5 y la integridad de datos cuando trabajamos con modelos de IA.'
        },
        {
            id: 2,
            nombre: 'Ing. Carlos Ruiz',
            fecha: 'Hace 1 día',
            texto: 'El reto principal que veo en la industria es justamente cerrar la brecha entre los equipos de TI y los Asuntos Regulatorios.'
        }
    ]);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoComentario, setNuevoComentario] = useState('');

    const handleAgregarComentario = (e) => {
        e.preventDefault();
        if (!nuevoNombre.trim() || !nuevoComentario.trim()) return;

        const nuevoObj = {
            id: Date.now(),
            nombre: nuevoNombre,
            fecha: 'Justo ahora',
            texto: nuevoComentario
        };

        setComments([nuevoObj, ...comments]);
        setNuevoNombre('');
        setNuevoComentario('');
    };

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
                {!selectedArticle ? (
                    /* =========================================================
                       VISTA 1: GRID DE TARJETAS
                       ========================================================= */
                    <div className="space-y-6">
                        {/* Cabecera de la sección */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                            <h1 className="text-3xl font-bold text-[#0A2540] flex items-center gap-3">
                                <span className="w-3 h-8 bg-[#00A896] rounded-full inline-block"></span>
                                Programación y Artículos
                            </h1>
                            <p className="text-slate-600 text-sm md:text-base mt-2">
                                Explora nuestras publicaciones, metodologías de transformación digital y herramientas de automatización en la industria farmacéutica.
                            </p>
                        </div>

                        {/* Grid de Tarjetas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* TARJETA 1: Artículo El Profesional Farmacéutico frente a la IA */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-teal-50 text-[#00A896] text-xs font-semibold px-3 py-1 rounded-full border border-teal-200">
                                            IA & Transformación
                                        </span>
                                        <span className="text-xs text-slate-400">Artículo Destacado</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-[#0A2540] mb-3 leading-snug">
                                        El Profesional Farmacéutico frente a la IA: De Operador Analógico a Traductor Estratégico
                                    </h2>
                                    <p className="text-slate-600 text-sm line-clamp-4 mb-4">
                                        La reestructuración en las facultades de química evidencia la transición hacia herramientas de Machine Learning y Quimioinformática. Ante la brecha digital, el verdadero valor del QFB radica en ser el traductor entre la tecnología, la ética y el cumplimiento normativo (GAMP 5, ALCOA+).
                                    </p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => setSelectedArticle('qfb-ia')}
                                        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#00A896] text-white font-medium text-sm py-2.5 px-4 rounded-xl transition-colors"
                                    >
                                        <span>Leer Artículo Completo</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* TARJETA 2: APP Control de Capacitación (En Construcción) */}
                            <div className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between opacity-90">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                                            Herramienta Web
                                        </span>
                                        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                                            En construcción
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-700 mb-3 leading-snug">
                                        APP Control de Capacitación y Calificación del Personal
                                    </h2>
                                    <p className="text-slate-500 text-sm mb-4">
                                        Módulo interactivo para la gestión integral de matrices de capacitación, seguimiento de PNOs y calificación de competencias del personal técnico bajo el marco de la NOM-059-SSA1.
                                    </p>
                                </div>
                                <div>
                                    <button
                                        disabled
                                        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-slate-300 text-slate-500 font-medium text-sm py-2.5 px-4 rounded-xl cursor-not-allowed"
                                    >
                                        <span>Próximamente</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    /* =========================================================
                       VISTA 2: DETALLE DEL ARTÍCULO CON FORMULARIO DE COMENTARIOS
                       ========================================================= */
                    <div className="space-y-6">
                        {/* Botón de regresar */}
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] hover:text-[#00A896] bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver a Programación
                        </button>

                        {/* Layout Principal: Contenido (Izq) + Comentarios (Der) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* COLUMNA IZQUIERDA Y CENTRAL: ARTÍCULO (2/3) */}
                            <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">

                                {/* Título e Imagen */}
                                <div>
                                    <span className="bg-teal-50 text-[#00A896] text-xs font-semibold px-3 py-1 rounded-full border border-teal-200">
                                        IA & Transformación
                                    </span>
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mt-3 leading-tight">
                                        El Profesional Farmacéutico frente a la IA: De Operador Analógico a Traductor Estratégico
                                    </h1>
                                </div>

                                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                                    <img
                                        src="/QFB - IA.jpeg"
                                        alt="El Profesional Farmacéutico frente a la IA"
                                        className="w-full h-auto object-cover max-h-[400px]"
                                        onError={(e) => {
                                            // Fallback por si la ruta tiene diferente codificación
                                            e.target.src = "/QFB%20-%20IA.jpeg";
                                        }}
                                    />
                                </div>

                                {/* Texto del Artículo */}
                                <div className="prose max-w-none text-slate-700 space-y-4 text-justify leading-relaxed">
                                    <p>
                                        Durante mis primeros años en el laboratorio, mi rutina estaba perfectamente delimitada por el protocolo: pesajes exactos en la balanza analítica, titulaciones minuciosas, revisión manual de bitácoras y un apego irrestricto a la norma. Para muchos de nosotros, la excelencia profesional se medía por la precisión con la que ejecutábamos un procedimiento operativo estándar (SOP).
                                    </p>

                                    <p>
                                        Hoy, viviendo esta transformación desde las aulas universitarias e investigando cómo las instituciones educativas rediseñan su formación, es evidente la reestructuración en nuestra disciplina. Las facultades de química y farmacia ya no están enseñando como antes: los planes de estudio y los programas académicos están integrando asignaturas como <strong>Quimioinformática, Bioinformática, Simulación de Sistemas e Introducción a la Inteligencia Artificial</strong>. La forma de enseñar se está adaptando para que los futuros egresados no solo aprendan a manejar reactivos o cromatógrafos, sino a usar algoritmos de Machine Learning para la predicción de propiedades ADME/Tox, el cribado molecular (screening) o el análisis masivo de datos analíticos.
                                    </p>

                                    <p>
                                        Esta reestructuración académica pone en evidencia una realidad ineludible: existe una brecha profunda entre las nuevas generaciones que egresan con competencias digitales nativas y los profesionales que ya llevan años en el ámbito laboral. Y ante esto, la premisa en la industria es contundente: <em>el que no evoluciona, se extingue.</em>
                                    </p>

                                    <h3 className="text-xl font-bold text-[#0A2540] pt-2">
                                        La trampa del lenguaje: Si no dominas la jerga, te quedas fuera
                                    </h3>
                                    <p>
                                        Para los profesionales consolidados, el mayor riesgo no es que un robot reemplace su firma sanitaria, sino la desconexión comunicativa. Cuando la transformación digital se implemente en tu planta, laboratorio o centro de investigación, la mesa de decisiones estará integrada por ingenieros de datos, especialistas en TI y las nuevas generaciones de QFB.
                                    </p>

                                    <p>
                                        Si en esa reunión te hablan de validar un <em>"pipeline de aprendizaje automático"</em>, auditar un <em>"dataset para evitar sesgos algorítmicos"</em>, o simular la escala de un lote con un <em>"Gemelo Digital"</em>, ¿podrás liderar la evaluación o quedarás al margen por no entender el lenguaje?
                                    </p>

                                    <p>
                                        No necesitas aprender a escribir código en Python desde cero ni convertirte en programador. Tu verdadero valor estratégico no radica en programar algoritmos, sino en asumir un rol mucho más crítico: <strong>ser el traductor y supervisor entre la tecnología y el cumplimiento normativo.</strong>
                                    </p>

                                    <h3 className="text-xl font-bold text-[#0A2540] pt-2">
                                        La brecha entre el código y la regulación
                                    </h3>
                                    <p>
                                        Un desarrollador de software o un científico de datos puede construir un modelo predictivo eficiente para optimizar la síntesis de un principio activo o predecir fallas en una tableteadora. Sin embargo, ese especialista suele desconocer los límites éticos, la farmacocinética y, sobre todo, el marco regulatorio que rige nuestra industria. Aquí es donde nuestro criterio científico se vuelve insustituible:
                                    </p>

                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><strong>Cumplimiento normativo (NOM-059, FDA, EMA):</strong> Garantizar que el sistema computarizado cumpla con las guías de validación como GAMP 5.</li>
                                        <li><strong>Integridad de Datos (ALCOA+):</strong> Asegurar que los datos con los que se entrena un modelo sean atribuibles, legibles, contemporáneos, originales y exactos.</li>
                                        <li><strong>Responsabilidad Sanitaria:</strong> La firma final que libera un lote o aprueba un ensayo clínico no la coloca un algoritmo; la coloca un ser humano con ética y criterio científico.</li>
                                    </ul>

                                    <h3 className="text-xl font-bold text-[#0A2540] pt-2">
                                        La evolución inevitable del laboratorio
                                    </h3>
                                    <p>En la práctica, la transición del laboratorio contempla tres etapas muy claras:</p>
                                    <ol className="list-decimal pl-5 space-y-1">
                                        <li><strong>Tradicional:</strong> Enfocado en procesos manuales, registros en papel y pruebas analíticas aisladas.</li>
                                        <li><strong>Digitalización:</strong> La adopción de sistemas LIMS, migración a expedientes electrónicos y centralización de datos.</li>
                                        <li><strong>Inteligencia Adaptativa:</strong> La integración de analítica predictiva, Gemelos Digitales y modelos optimizados en tiempo real.</li>
                                    </ol>
                                </div>

                                {/* Enlaces y Fuentes Institucionales */}
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs md:text-sm">
                                    <h4 className="font-bold text-[#0A2540] flex items-center gap-2">
                                        🔗 Enlaces y Fuentes Institucionales
                                    </h4>
                                    <ul className="space-y-1 text-teal-700">
                                        <li>
                                            <a href="https://quimica.unam.mx/contara-fq-nuevos-planes-estudio-cinco-licenciaturas" target="_blank" rel="noreferrer" className="hover:underline">
                                                • UNAM - Modificación de Planes de Estudio en la Facultad de Química
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://quimica.unam.mx/wp-content/uploads/2026/06/0967-qfb.pdf" target="_blank" rel="noreferrer" className="hover:underline">
                                                • UNAM - Temario Oficial: Quimioinformática e Inteligencia Artificial (PDF)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://quimica.unam.mx/wp-content/uploads/2026/06/0932-qfb.pdf" target="_blank" rel="noreferrer" className="hover:underline">
                                                • UNAM - Temario Oficial: Introducción al Análisis Bioinformático (PDF)
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* PIE DEL ARTÍCULO: SECCIÓN PDF CARRUSEL LINKEDIN */}
                                <div className="pt-4 border-t border-slate-200">
                                    <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-[#00A896] text-white p-3 rounded-lg">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0A2540] text-sm md:text-base">PDF Carrusel Linkedin</h4>
                                                <p className="text-xs text-slate-600">QFB - IA.pdf • Consulta o descarga la presentación infográfica</p>
                                            </div>
                                        </div>
                                        <a
                                            href="/pdf%20carrusel/QFB%20-%20IA.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#088375] text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Abrir PDF Carrusel
                                        </a>
                                    </div>
                                </div>

                            </div>

                            {/* COLUMNA DERECHA: SECCIÓN DE COMENTARIOS (1/3) */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-6 space-y-6">

                                    <h3 className="text-lg font-bold text-[#0A2540] flex items-center gap-2 border-b border-slate-100 pb-3">
                                        <svg className="w-5 h-5 text-[#00A896]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Comentarios
                                    </h3>

                                    {/* Formulario de Comentario */}
                                    <form onSubmit={handleAgregarComentario} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1">
                                                Nombre completo
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Ej. QFB. Juan Pérez"
                                                value={nuevoNombre}
                                                onChange={(e) => setNuevoNombre(e.target.value)}
                                                required
                                                className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1">
                                                Comentario
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="Comparte tu opinión o experiencia..."
                                                value={nuevoComentario}
                                                onChange={(e) => setNuevoComentario(e.target.value)}
                                                required
                                                className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A896] resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-[#00A896] hover:bg-[#088375] text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                                        >
                                            Publicar Comentario
                                        </button>
                                    </form>

                                    {/* Lista simulada de Comentarios */}
                                    <div className="space-y-4 pt-2 border-t border-slate-100 max-h-[400px] overflow-y-auto pr-1">
                                        {comments.map((com) => (
                                            <div key={com.id} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1">
                                                <div className="flex items-center justify-between font-bold text-[#0A2540]">
                                                    <span>{com.nombre}</span>
                                                    <span className="text-[10px] text-slate-400 font-normal">{com.fecha}</span>
                                                </div>
                                                <p className="text-slate-600 leading-relaxed">{com.texto}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}