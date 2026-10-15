'use client';

import React, { useState } from 'react';

export default function SeccionDescargaPdfs() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [descargado, setDescargado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        empresa: '',
        cargo: 'Analista de Control de Calidad',
        telefono: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCargando(true);
        setErrorMsg('');

        try {
            const response = await fetch('/api/registro-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    recurso: 'Pack MGA Arsénico (3 PDFs)',
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Error al guardar el registro');
            }

            setDescargado(true);
            setCargando(false);
        } catch (err) {
            setErrorMsg(err.message);
            setCargando(false);
        }
    };

    // Rutas con los nombres exactos de tus PDFs encodeados para la URL
    const pdfs = [
        {
            titulo: '1. Monografía MGA Determinación de Arsénico',
            descripcion: 'Documento técnico completo con los fundamentos, reactivos, equipos y procedimiento analítico farmacopeico.',
            archivo: '/pdf/DETERMINACI%C3%93N%20DE%20ARSENICO.pdf',
            nombreDescarga: 'DETERMINACIÓN DE ARSENICO.pdf',
        },
        {
            titulo: '2. Diagrama MGA - Arsénico Inorgánico',
            descripcion: 'Esquema de flujo y tren de reacción para la generación de arsina a partir de compuestos inorgánicos.',
            archivo: '/pdf/Diagrama%20As%20Inorganico.pdf',
            nombreDescarga: 'Diagrama As Inorganico.pdf',
        },
        {
            titulo: '3. Diagrama MGA - Arsénico Orgánico',
            descripcion: 'Diagrama de digestión previa y condiciones analíticas aplicadas a matrices de origen orgánico.',
            archivo: '/pdf/Diagrama%20As%20Organico.pdf',
            nombreDescarga: 'Diagrama As Organico.pdf',
        },
    ];

    return (
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl my-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-950 px-3 py-1 rounded border border-cyan-800 inline-block mb-2">
                        Recursos Descargables GXP
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                        Descarga el Material Técnico de Apoyo (3 PDFs)
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                        Obtén la monografía completa y los esquemas diagramados de reacción para control de calidad.
                    </p>
                </div>

                <button
                    onClick={() => setModalAbierto(true)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs md:text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
                >
                    {descargado ? '🔓 Acceso Concedido (Descargar)' : '📥 Obtener los 3 PDFs'}
                </button>
            </div>

            {/* TARJETAS DE RECURSOS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pdfs.map((pdf, idx) => (
                    <div key={idx} className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80 flex flex-col justify-between">
                        <div>
                            <div className="text-cyan-400 text-2xl mb-2">📄</div>
                            <h4 className="font-bold text-sm text-white mb-1.5">{pdf.titulo}</h4>
                            <p className="text-slate-300 text-xs text-justify leading-relaxed">{pdf.descripcion}</p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-700/50">
                            {descargado ? (
                                <a
                                    href={pdf.archivo}
                                    download={pdf.nombreDescarga}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg transition"
                                >
                                    Descargar PDF ⬇️
                                </a>
                            ) : (
                                <button
                                    onClick={() => setModalAbierto(true)}
                                    className="w-full text-center bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-xs py-2.5 rounded-lg transition cursor-pointer"
                                >
                                    🔒 Solicitar Acceso
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL POPUP DE CAPTURA DE LEADS */}
            {modalAbierto && (
                <div
                    onClick={() => setModalAbierto(false)}
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative"
                    >
                        <button
                            onClick={() => setModalAbierto(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 font-bold text-sm bg-slate-100 p-2 rounded-full cursor-pointer"
                        >
                            ✕
                        </button>

                        {!descargado ? (
                            <>
                                <div className="mb-6">
                                    <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200 inline-block mb-2">
                                        Acceso Profesional
                                    </span>
                                    <h3 className="text-xl font-extrabold text-[#0A2540]">
                                        Completa tus datos para desbloquear las descargas
                                    </h3>
                                    <p className="text-slate-500 text-xs mt-1">
                                        Ingresa tus datos de contacto para habilitar la descarga inmediata de los 3 documentos en PDF.
                                    </p>
                                </div>

                                {errorMsg && (
                                    <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-200 mb-4">
                                        {errorMsg}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                                    <div>
                                        <label className="block font-bold text-slate-700 mb-1">Nombre Completo *</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            required
                                            placeholder="Ej. Q.F.B. Mariana López"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-bold text-slate-700 mb-1">Correo Electrónico Laboral / Institucional *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="m.lopez@laboratorio.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block font-bold text-slate-700 mb-1">Empresa / Laboratorio *</label>
                                            <input
                                                type="text"
                                                name="empresa"
                                                required
                                                placeholder="Ej. Pisa, UNAM, Probiomed"
                                                value={formData.empresa}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-bold text-slate-700 mb-1">Cargo / Área *</label>
                                            <select
                                                name="cargo"
                                                value={formData.cargo}
                                                onChange={handleChange}
                                                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-semibold"
                                            >
                                                <option value="Analista de Control de Calidad">Analista de Control de Calidad</option>
                                                <option value="Aseguramiento de Calidad / GXP">Aseguramiento de Calidad / GXP</option>
                                                <option value="Desarrollo Analítico / Validación">Desarrollo Analítico / Validación</option>
                                                <option value="Gerencia / Jefatura de Laboratorio">Gerencia / Jefatura de Laboratorio</option>
                                                <option value="Estudiante / Docente">Estudiante / Docente</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-bold text-slate-700 mb-1">Teléfono / WhatsApp (Opcional)</label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            placeholder="+52 55 1234 5678"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={cargando}
                                        className="w-full bg-[#0A2540] hover:bg-cyan-600 text-white font-extrabold text-sm py-3.5 rounded-xl transition shadow-md cursor-pointer mt-2"
                                    >
                                        {cargando ? 'Registrando datos...' : 'Confirmar y Desbloquear Descargas 🔓'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            /* MENSAJE TRAS REGISTRO EXITOSO */
                            <div className="text-center py-6 space-y-4">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto font-bold">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                                    ¡Registro Guardado con Éxito!
                                </h3>
                                <p className="text-slate-600 text-xs md:text-sm">
                                    Hemos registrado tu información en la base de datos de EDC PharmaLab. Puedes descargar directamente los 3 PDFs a continuación:
                                </p>

                                <div className="space-y-2 pt-2">
                                    {pdfs.map((pdf, i) => (
                                        <a
                                            key={i}
                                            href={pdf.archivo}
                                            download={pdf.nombreDescarga}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block bg-slate-100 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs p-3 rounded-xl border border-slate-200 transition text-left text-slate-800"
                                        >
                                            ⬇️ {pdf.titulo}
                                        </a>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setModalAbierto(false)}
                                    className="mt-4 text-xs font-bold text-slate-500 hover:text-slate-800"
                                >
                                    Cerrar Ventana
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}