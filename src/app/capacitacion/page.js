import Navbar from '../../components/Navbar';
import CapacitacionSeccion from '../../components/CapacitacionSeccion';

export default function CapacitacionPage() {
    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
                <CapacitacionSeccion />
            </main>
        </div>
    );
}