'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const categorias = [
        { name: 'Inicio', href: '/' },
        { name: 'Métodos Analíticos', href: '/metodos-analiticos' },
        { name: 'BPF', href: '/bpf' },
        { name: 'Programación', href: '/programacion' },
        { name: 'Métodos Generales de Análisis', href: '/metodos-generales' },
        { name: 'Capacitación y Calificación', href: '/capacitacion' },
        { name: 'Mapa Interactivo', href: '/mapa-interactivo' },
    ];

    return (
        <header className="bg-[#0A2540] text-white shadow-md font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Título de Marca Limpio (Sin el recuadro blanco) */}
                    <Link href="/" className="group flex flex-col justify-center">
                        <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                            EDC <span className="text-cyan-400">PharmaLab</span>
                        </span>
                        <span className="text-[10px] text-slate-300 tracking-wider uppercase font-medium">
                            Estandarización y precisión en cada análisis.
                        </span>
                    </Link>

                    {/* Menú de Navegación Dinámico */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {categorias.map((cat) => {
                            const isActive = pathname === cat.href;

                            return (
                                <Link
                                    key={cat.name}
                                    href={cat.href}
                                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${isActive
                                            ? 'bg-cyan-500 text-[#0A2540] shadow-sm'
                                            : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                                        }`}
                                >
                                    {cat.name}
                                </Link>
                            );
                        })}
                    </nav>

                </div>
            </div>
        </header>
    );
}