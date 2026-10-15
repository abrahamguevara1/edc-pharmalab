'use client';

import React, { useState } from 'react';
import DeterminacionArsenico from './DeterminacionArsenico';

export default function SeccionMetodosGenerales() {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

    // Catálogo de Métodos Generales de Análisis (MGA)
    const listaMetodos = [
        {
            id: 'determinacion-arsenico',
            titulo: 'DETERMINACIÓN DE ARSÉNICO',
            normativa: 'MGA — FEUM / USP',
            descripcion: 'Prueba límite e impurezas para la determinación cuantitativa de arsénico mediante espectrofotometría.',
            componente: <DeterminacionArsenico />,
            activo: true,
        },
        {
            id: 'metales-pesados',
            titulo: 'DETERMINACIÓN DE METALES PESADOS (Próximamente)',
            normativa: 'MGA — FEUM',
            descripcion: 'Metodología general para la detección e identificación de impurezas metálicas por comparación colorimétrica.',
            componente: null,
            activo: false,
        }
    ];

    return (
        <div>
            {!metodoSeleccionado ? (
                /* VISTA 1: CATÁLOGO DE TARJETAS */
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 font-sans my-6">
                    {/* Encabezado de la Sección */}
                    <div className="mb-8 border-b border-slate-200 pb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="w-3 h-8 bg-cyan-500 rounded-full inline-block"></span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540]">
                                Métodos Generales de Análisis — MGA
                            </h2>
                        </div>
                        <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                            Selecciona un método analítico para consultar sus fundamentos teóricos, procedimientos de preparación, diagramas y descargas técnicas.
                        </p>
                    </div>

                    {/* Grid de Tarjetas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {listaMetodos.map((metodo) => (
                            <div
                                key={metodo.id}
                                onClick={() => metodo.activo && setMetodoSeleccionado(metodo)}
                                className={`rounded-2xl p-6 border-2 transition-all flex flex-col justify-between ${metodo.activo
                                        ? 'bg-slate-50 hover:bg-cyan-50/60 border-slate-200 hover:border-cyan-500 cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-1'
                                        : 'bg-slate-100/70 border-slate-200 opacity-60 cursor-not-allowed'
                                    }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-bold px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-md">
                                            {metodo.normativa}
                                        </span>
                                        {metodo.activo ? (
                                            <span className="text-xs font-bold text-cyan-600 flex items-center gap-1">
                                                Explorar Método ›
                                            </span>
                                        ) : (
                                            <span className="text-xs font-semibold text-slate-500">
                                                En Desarrollo
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                                        {metodo.titulo}
                                    </h3>
                                    <p className="text-slate-600 text-xs md:text-sm text-justify leading-relaxed">
                                        {metodo.descripcion}
                                    </p>
                                </div>

                                {metodo.activo && (
                                    <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0A2540]">
                                        <span>Ver procedimiento completo</span>
                                        <span className="w-6 h-6 rounded-full bg-[#0A2540] text-white flex items-center justify-center">➔</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* VISTA 2: ARTÍCULO SELECCIONADO CON BOTÓN PARA VOLVER */
                <div className="animate-fade-in">
                    <button
                        onClick={() => setMetodoSeleccionado(null)}
                        className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-900 bg-cyan-50 hover:bg-cyan-100 px-4 py-2 rounded-lg border border-cyan-200 transition cursor-pointer"
                    >
                        ← Volver al catálogo de métodos
                    </button>

                    {metodoSeleccionado.componente}
                </div>
            )}
        </div>
    );
}