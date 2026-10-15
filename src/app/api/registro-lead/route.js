import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
    try {
        const body = await request.json();
        const { nombre, email, empresa, cargo, telefono, recurso } = body;

        if (!nombre || !email || !empresa || !cargo) {
            return NextResponse.json(
                { error: 'Por favor completa todos los campos obligatorios.' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('leads_descargas')
            .insert([
                {
                    nombre,
                    email,
                    empresa,
                    cargo,
                    telefono: telefono || null,
                    recurso_descargado: recurso || 'Pack Arsénico MGA',
                },
            ]);

        if (error) {
            console.error('Error en Supabase:', error);
            return NextResponse.json(
                { error: 'No se pudo guardar el registro en la base de datos.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Registro exitoso', data }, { status: 200 });
    } catch (err) {
        console.error('Error interno:', err);
        return NextResponse.json(
            { error: 'Error interno en el servidor.' },
            { status: 500 }
        );
    }
}