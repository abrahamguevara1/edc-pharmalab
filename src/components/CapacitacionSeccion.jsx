'use client';

import React, { useState } from 'react';

export default function CapacitacionSeccion() {
    const [moduloSeleccionado, setModuloSeleccionado] = useState(null);
    const [etapaActiva, setEtapaActiva] = useState(null);
    const [imagenModal, setImagenModal] = useState(null);

    // Módulos/Tarjetas disponibles en Capacitación y Calificación
    const listaModulos = [
        {
            id: 'roadmap-8-etapas',
            titulo: 'Roadmap de Capacitación y Calificación (8 Etapas)',
            normativa: 'NOM-059-SSA1 / BPF',
            descripcion: 'Proceso continuo desde la inducción general, operaciones básicas (aforo, pipeteo, pesado) y análisis de producto hasta la evaluación de desempeño a 3 meses.',
            activo: true,
        },
        {
            id: 'matriz-calificacion',
            titulo: 'Matriz de Capacitación vs. Calificación de Equipos',
            normativa: 'ISPE / FEUM / ICH',
            descripcion: 'Paralelismo normativo entre la calificación de sistemas/equipos (DQ, IQ, OQ, PQ) y la evaluación teórica/práctica del desarrollo del talento humano.',
            activo: true,
        },
        {
            id: 'pnos-puesto',
            titulo: 'Matriz Puesto vs. PNO’s (Próximamente)',
            normativa: 'GXP Competencies',
            descripcion: 'Mapeo detallado de procedimientos aplicables según el rol: Analista, Auxiliar de Agua Purificada, Muestreo o Gerencia de Calidad.',
            activo: false,
        }
    ];

    const etapas = [
        {
            numero: '01',
            titulo: 'Etapa 1: Presentación y Recorrido',
            subtitulo: 'Correcta integración del personal',
            resumen: 'Bienvenida e inducción general con enfoque al departamento de Control Químico.',
            puntos: [
                'Presentación con el personal de nuevo ingreso e inducción general.',
                'Recorrido a instalaciones limitado hasta las esclusas de ingreso.',
                'Explicación de lineamientos del comedor y horarios asignados.',
            ],
            frase: 'Una correcta bienvenida y orientación inicial son el primer paso para formar grandes profesionales.'
        },
        {
            numero: '02',
            titulo: 'Etapa 2: Capacitación Teórica General',
            subtitulo: 'Solo actividades generales (PNO’s)',
            resumen: 'Bases teóricas para comprender, actuar y cumplir con la calidad y regulación GXP.',
            puntos: [
                'Lectura de PNO’s de Buenas Prácticas de Laboratorio (BPL) y Documentación (BPD).',
                'Manejo de resultados Fuera de Especificación (OOS) y datos crudos.',
                'Procedimientos de limpieza, recepción de reactivos y uso de EPP.',
            ],
            frase: 'Conocimiento hoy, calidad siempre.'
        },
        {
            numero: '03',
            titulo: 'Etapa 3: Operaciones Básicas',
            subtitulo: 'Previa lectura de PNO’s a utilizar',
            resumen: 'Demostración de competencia práctica en 3 operaciones críticas con criterios estadísticos.',
            puntos: [
                'Evaluación práctica en pruebas de Aforo, Pipeteo y Pesado analítico.',
                'Criterio de aceptación: RSD entre ensayos ≤ 2.0% comparado contra facilitador.',
                'Análisis de varianza (ANOVA) con p-valor no menor a 0.05.',
            ],
            frase: 'Formación que genera confianza, resultados que inspiran.'
        },
        {
            numero: '04',
            titulo: 'Etapa 4: Análisis de Materia Prima',
            subtitulo: 'Apoyado con un facilitador',
            resumen: 'Manejo de equipos complejos y matrices analíticas para excipientes y activos.',
            puntos: [
                'Diseño de matriz de pruebas analíticas que cubra al menos el 90% de los análisis del laboratorio.',
                'Capacitación en uso y cuidado de FTIR, HPLC, Cromatógrafo de Gases, Viscosímetros y Muflas.',
                'Supervisión directa y verificación documental bajo BPD.',
            ],
            frase: 'Calificación técnica enfocada en la precisión del análisis de materia prima.'
        },
        {
            numero: '05',
            titulo: 'Etapa 5: Análisis de Producto Terminado',
            subtitulo: 'Apoyado con un facilitador',
            resumen: 'Evaluación práctica en formas farmacéuticas terminadas.',
            puntos: [
                'Especialización en pruebas de Disolución y Espectrofotometría UV-Vis.',
                'Matriz de pruebas que abarca tabletas, cápsulas, suspensiones y soluciones inyectables.',
                'Monitoreo estricto de cumplimiento con especificaciones farmacopeicas.',
            ],
            frase: 'Garantizamos la eficacia y seguridad en el producto final entregado al paciente.'
        },
        {
            numero: '06',
            titulo: 'Etapa 6: Capacitación Complementaria',
            subtitulo: 'De acuerdo a las funciones asignadas',
            resumen: 'Asignación de PNO’s según la matriz de Puesto vs. Responsabilidades.',
            puntos: [
                'Mapeo específico para Químico Analista, Auxiliar de Agua Purificada, Muestreo o Gerencia de Calidad.',
                'Inclusión de PNO’s internos y externos de acuerdo a la descripción de puesto.',
                'Aseguramiento de cobertura de todas las actividades específicas del rol.',
            ],
            frase: 'El éxito radica en un mapeo preciso de responsabilidades.'
        },
        {
            numero: '07',
            titulo: 'Etapa 7: Dictamen y Calificación',
            subtitulo: 'Fin de capacitación formal',
            resumen: 'Emisión del dictamen formal de aprobado respaldado por evidencias científicas.',
            puntos: [
                'Examen teórico de conocimientos con calificación mínima requerida de 8.0 (80%).',
                'Evaluación práctica mediante lista de verificación (checklist) en la ejecución real.',
                'Generación de expediente auditable bajo BPD para cumplimiento con la NOM-059-SSA1.',
            ],
            frase: 'Sustento científico impecable que asegura la aptitud y evita retrabajos.'
        },
        {
            numero: '08',
            titulo: 'Etapa 8: Desempeño y Seguimiento',
            subtitulo: 'Seguimiento sistemático (3 meses)',
            resumen: 'Evaluación mensual para corroborar la retención de competencias y actitud.',
            puntos: [
                'Evaluación objetiva en 4 pilares: Conocimiento, Desempeño, Actitud y Seguridad.',
                'Criterios: ≥90% Satisfactorio, 75-89% Oportunidades de mejora, <75% Plan de mejora.',
                'Determina la viabilidad de otorgar la planta al término del contrato de prueba.',
            ],
            frase: 'Monitoreo continuo para fortalecer talentos e impulsar la excelencia.'
        }
    ];

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 font-sans my-6">

            {/* Encabezado de la Sección */}
            <div className="border-b border-slate-200 pb-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-3.5 h-8 bg-cyan-500 rounded-full inline-block"></span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540]">
                        Capacitación y Calificación del Personal
                    </h2>
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                    De acuerdo con la <strong>NOM-059-SSA1</strong>, la calificación del personal técnico no es opcional, sino un pilar crítico para garantizar la integridad de los datos. Selecciona un módulo para consultar su metodología.
                </p>
            </div>

            {/* VISTA 1: CATÁLOGO DE TARJETAS */}
            {!moduloSeleccionado ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listaModulos.map((mod) => (
                        <div
                            key={mod.id}
                            onClick={() => mod.activo && setModuloSeleccionado(mod.id)}
                            className={`rounded-2xl p-6 border-2 transition-all flex flex-col justify-between ${mod.activo
                                    ? 'bg-slate-50 hover:bg-cyan-50/60 border-slate-200 hover:border-cyan-500 cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-1'
                                    : 'bg-slate-100/70 border-slate-200 opacity-60 cursor-not-allowed'
                                }`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-md">
                                        {mod.normativa}
                                    </span>
                                    {mod.activo ? (
                                        <span className="text-xs font-bold text-cyan-600 flex items-center gap-1">
                                            Explorar Módulo ›
                                        </span>
                                    ) : (
                                        <span className="text-xs font-semibold text-slate-500">
                                            Próximamente
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                                    {mod.titulo}
                                </h3>
                                <p className="text-slate-600 text-xs md:text-sm text-justify leading-relaxed">
                                    {mod.descripcion}
                                </p>
                            </div>

                            {mod.activo && (
                                <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0A2540]">
                                    <span>Ver detalles y recursos</span>
                                    <span className="w-6 h-6 rounded-full bg-[#0A2540] text-white flex items-center justify-center">➔</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                /* VISTA 2: DESPLEGADO DEL MÓDULO SELECCIONADO */
                <div className="animate-fade-in">
                    {/* Botón Volver al Catálogo */}
                    <button
                        onClick={() => {
                            setModuloSeleccionado(null);
                            setEtapaActiva(null);
                        }}
                        className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-900 bg-cyan-50 hover:bg-cyan-100 px-4 py-2 rounded-lg border border-cyan-200 transition cursor-pointer"
                    >
                        ← Volver al catálogo de módulos
                    </button>

                    {/* MÓDULO 1: ROADMAP EN 8 ETAPAS */}
                    {moduloSeleccionado === 'roadmap-8-etapas' && (
                        <div>
                            <div className="bg-gradient-to-br from-[#0A2540] to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800 inline-block mb-3">
                                        Infografía Técnica Completa
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">
                                        Roadmap de Capacitación (8 Etapas)
                                    </h3>
                                    <p className="text-slate-300 text-xs md:text-sm text-justify leading-relaxed max-w-2xl">
                                        Visualiza el flujo completo desde Inducción y Operaciones Básicas hasta el Dictamen de Calificación y Evaluación de Desempeño.
                                    </p>
                                </div>
                                <a
                                    href="/roadmap-capacitacion.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl transition shadow flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                                >
                                    <span>📄 Abrir PDF HD Completo ↗</span>
                                </a>
                            </div>

                            <h4 className="text-lg font-bold text-[#0A2540] mb-4">
                                Detalle Interactivo por Etapa (Haz clic sobre cada una)
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {etapas.map((item) => (
                                    <div
                                        key={item.numero}
                                        onClick={() => setEtapaActiva(item)}
                                        className="bg-slate-50 hover:bg-cyan-50/80 border-2 border-slate-200 hover:border-cyan-500 rounded-xl p-4 transition-all cursor-pointer transform hover:scale-[1.02] shadow-sm flex flex-col justify-between group"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="w-8 h-8 rounded-lg bg-[#0A2540] text-white font-black text-xs flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                                                    {item.numero}
                                                </span>
                                                <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-wider">
                                                    Detalle ›
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-cyan-950 transition-colors">
                                                {item.titulo}
                                            </h4>
                                            <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                                                {item.subtitulo}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* MÓDULO 2: MATRIZ DE CALIFICACIÓN VS EQUIPOS */}
                    {moduloSeleccionado === 'matriz-calificacion' && (
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#0A2540]">
                                        Matriz de Capacitación vs. Calificación de Equipos
                                    </h3>
                                    <p className="text-slate-600 text-xs md:text-sm mt-1">
                                        Paralelismo normativo basado en estándares ISPE, FEUM e ICH.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setImagenModal('/matriz-capacitacion.jpeg')}
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition cursor-pointer"
                                >
                                    Ver Imagen HD Completa 🔍
                                </button>
                            </div>

                            <div
                                onClick={() => setImagenModal('/matriz-capacitacion.jpeg')}
                                className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl border border-slate-200 cursor-pointer group bg-slate-900 mb-6"
                            >
                                <img
                                    src="/matriz-capacitacion.jpeg"
                                    alt="Matriz de Capacitación"
                                    className="w-full h-full object-contain group-hover:scale-102 transition duration-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                    <span className="font-extrabold text-cyan-700 block mb-1">DQ / IQ</span>
                                    <p className="text-slate-600 leading-relaxed text-justify">
                                        Definición del perfil de puesto y verificación documental de formación académica y experiencia previa.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                    <span className="font-extrabold text-cyan-700 block mb-1">OQ / PQ</span>
                                    <p className="text-slate-600 leading-relaxed text-justify">
                                        Capacitación en PNO's y evaluación práctica mediante pruebas de competencia y desempeño supervisado.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200">
                                    <span className="font-extrabold text-cyan-700 block mb-1">Criterio 80%</span>
                                    <p className="text-slate-600 leading-relaxed text-justify">
                                        Puntuación mínima en evaluaciones teóricas y programa anual continuo obligatorio en BPF e higiene.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* MODAL ETAPAS */}
            {etapaActiva && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setEtapaActiva(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition cursor-pointer"
                        >
                            ✕
                        </button>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-[#0A2540] text-white text-xs font-black px-3 py-1 rounded-md">
                                ETAPA {etapaActiva.numero}
                            </span>
                            <span className="text-xs font-semibold text-cyan-700">
                                {etapaActiva.subtitulo}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-3 border-b border-slate-100 pb-2">
                            {etapaActiva.titulo}
                        </h3>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                            {etapaActiva.resumen}
                        </p>
                        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-2 text-cyan-800">
                            Actividades y Puntos Clave:
                        </h4>
                        <ul className="space-y-2 mb-6">
                            {etapaActiva.puntos.map((punto, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-700 text-xs md:text-sm text-justify">
                                    <span className="text-cyan-600 font-bold mt-0.5">•</span>
                                    <span>{punto}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-3 rounded-r-xl mb-6">
                            <p className="text-cyan-950 text-xs italic font-medium">
                                "{etapaActiva.frase}"
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setEtapaActiva(null)}
                                className="bg-[#0A2540] hover:bg-cyan-600 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition shadow cursor-pointer"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL IMAGEN */}
            {imagenModal && (
                <div
                    onClick={() => setImagenModal(null)}
                    className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 cursor-zoom-out"
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
                        <button
                            onClick={() => setImagenModal(null)}
                            className="absolute -top-10 right-0 text-white font-bold text-xl hover:text-cyan-400 bg-white/10 px-3 py-1 rounded-lg cursor-pointer"
                        >
                            Cerrar ✕
                        </button>
                        <img
                            src={imagenModal}
                            alt="Infografía completa"
                            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-slate-700"
                        />
                    </div>
                </div>
            )}

        </div>
    );
}