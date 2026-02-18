import React from 'react';
import { Package, Users, LogOut, LayoutDashboard } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Link, useNavigate } from 'react-router-dom';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const { logoutAdmin } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutAdmin();
        navigate('/admin');
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex-shrink-0 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h1 className="font-serif text-2xl text-feduzzi-green">Feduzzi Admin</h1>
                </div>

                <nav className="flex-grow p-4 space-y-2">
                    <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-feduzzi-green text-white rounded-md">
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-md cursor-not-allowed opacity-50">
                        <Package size={20} />
                        <span>Producten</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-md cursor-not-allowed opacity-50">
                        <Users size={20} />
                        <span>Klanten</span>
                    </div>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-md w-full transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Uitloggen</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto p-4 md:p-8">
                <div className="md:hidden flex justify-between items-center mb-6">
                    <h1 className="font-serif text-2xl text-feduzzi-green">Feduzzi Admin</h1>
                    <button onClick={handleLogout} className="text-red-500"><LogOut size={24} /></button>
                </div>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
