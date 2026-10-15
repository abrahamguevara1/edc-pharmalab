'use client';

import React, { useState } from 'react';
import dataMap from '../data/mapaData.json';

const NodeItem = ({ node, onSelectNode }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex items-center my-3 relative">
      <div
        onClick={() => onSelectNode(node.tarjeta)}
        className="flex items-center bg-white hover:bg-cyan-50/80 border-2 border-slate-300 hover:border-cyan-500 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:scale-[1.02] group"
      >
        <span className="text-slate-800 font-semibold text-sm group-hover:text-cyan-900 transition-colors">
          {node.label}
        </span>

        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            aria-label={expanded ? "Colapsar rama" : "Expandir rama"}
            className="ml-3 w-6 h-6 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold transition-transform cursor-pointer shadow-sm hover:scale-110"
          >
            {expanded ? '‹' : '›'}
          </button>
        )}
      </div>

      {hasChildren && expanded && (
        <div className="ml-6 border-l-2 border-cyan-400/60 pl-4 flex flex-col justify-center animate-fade-in">
          {node.children.map((child) => (
            <NodeItem key={child.id} node={child} onSelectNode={onSelectNode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function MapaConceptual() {
  const [mapaSeleccionado, setMapaSeleccionado] = useState(null);
  const [activeTarjeta, setActiveTarjeta] = useState(null);

  // Catálogo de mapas interactivos disponibles
  const listaMapas = [
    {
      id: 'ciclo-vida',
      titulo: 'Ciclo de Vida del Procedimiento Analítico',
      normativa: 'ICH Q14 / USP <1220>',
      descripcion: 'Gestión integral basada en riesgo: ATP, Diseño de Método (Fase 1), Cualificación (Fase 2) y Verificación Continua (Fase 3).',
      data: dataMap,
      activo: true,
    },
    {
      id: 'validacion-metodos',
      titulo: 'Validación de Métodos Analíticos (Próximamente)',
      normativa: 'ICH Q2(R2)',
      descripcion: 'Parámetros analíticos: Exactitud, Precisión, Especificidad, Linealidad y Límite de Detección/Cuantificación.',
      data: null,
      activo: false,
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 font-sans my-6">

      {/* Encabezado de la Sección */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-8 bg-cyan-500 rounded-full inline-block"></span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540]">
            Mapas Conceptuales Interactivos
          </h2>
        </div>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
          Selecciona un mapa para explorar de manera interactiva su árbol de conocimiento, directrices normativas y conceptos clave.
        </p>
      </div>

      {/* VISTA 1: CATÁLOGO DE TARJETAS (Si no hay mapa seleccionado) */}
      {!mapaSeleccionado ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listaMapas.map((mapa) => (
            <div
              key={mapa.id}
              onClick={() => mapa.activo && setMapaSeleccionado(mapa)}
              className={`rounded-2xl p-6 border-2 transition-all flex flex-col justify-between ${mapa.activo
                  ? 'bg-slate-50 hover:bg-cyan-50/60 border-slate-200 hover:border-cyan-500 cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-1'
                  : 'bg-slate-100/70 border-slate-200 opacity-60 cursor-not-allowed'
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-md">
                    {mapa.normativa}
                  </span>
                  {mapa.activo ? (
                    <span className="text-xs font-bold text-cyan-600 flex items-center gap-1">
                      Explorar Mapa ›
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-500">
                      En Desarrollo
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  {mapa.titulo}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm text-justify leading-relaxed">
                  {mapa.descripcion}
                </p>
              </div>

              {mapa.activo && (
                <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0A2540]">
                  <span>Ver árbol interactivo</span>
                  <span className="w-6 h-6 rounded-full bg-[#0A2540] text-white flex items-center justify-center">➔</span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* VISTA 2: DESPLEGADO DEL MAPA SELECCIONADO */
        <div className="animate-fade-in">
          {/* Botón Volver al Catálogo */}
          <button
            onClick={() => {
              setMapaSeleccionado(null);
              setActiveTarjeta(null);
            }}
            className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-cyan-700 hover:text-cyan-900 bg-cyan-50 hover:bg-cyan-100 px-4 py-2 rounded-lg border border-cyan-200 transition cursor-pointer"
          >
            ← Volver al catálogo de mapas
          </button>

          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-5 mb-6">
            <h3 className="text-xl font-bold text-[#0A2540] mb-2">
              {mapaSeleccionado.titulo}
            </h3>
            <p className="text-slate-700 text-xs md:text-sm leading-relaxed text-justify mb-4">
              {mapaSeleccionado.descripcion}
            </p>

            <div className="bg-white border border-cyan-200 rounded-lg p-3 text-xs text-cyan-950 font-medium">
              <strong>Indicaciones:</strong> Haz clic en (<span className="text-cyan-700 font-bold">›</span>) para desplegar ramas y presiona sobre cada tarjeta para abrir sus especificaciones técnicas.
            </div>
          </div>

          {/* Árbol del Mapa Interactivo */}
          <div className="overflow-x-auto py-2">
            <NodeItem node={mapaSeleccionado.data} onSelectNode={(tarjeta) => setActiveTarjeta(tarjeta)} />
          </div>
        </div>
      )}

      {/* Modal / Popup Explicativo */}
      {activeTarjeta && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-xl w-full shadow-2xl border border-slate-100 relative animate-fade-in">
            <button
              onClick={() => setActiveTarjeta(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-lg w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition cursor-pointer"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-md">
                Detalle Técnico
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0A2540] mb-4 border-b border-slate-100 pb-2">
              {activeTarjeta.titulo}
            </h3>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
              {activeTarjeta.texto}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveTarjeta(null)}
                className="bg-[#0A2540] hover:bg-cyan-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}