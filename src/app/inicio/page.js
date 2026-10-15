import Navbar from '../../components/Navbar';

export default function ModuloPage() {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <Navbar />
            <main className="flex-1 max-w-7xl w-full mx-auto p-8">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
                    <h2 className="text-2xl font-bold text-[#0A2540]">Módulo en Desarrollo</h2>
                    <p className="text-slate-600 text-sm mt-2">Próximamente se integrarán las tarjetas y recursos de este módulo.</p>
                </div>
            </main>
        </div>
    );
}