import React, { useState } from 'react';
import { Package, Users, LogOut, LayoutDashboard, Menu, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const { logoutAdmin } = useStore();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logoutAdmin();
        navigate('/admin');
    };

    const NavItem = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => {
        const isActive = location.pathname === to;
        return (
            <Link
                to={to}
                className={clsx(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 group",
                    isActive
                        ? "bg-feduzzi-green text-white shadow-md"
                        : "text-gray-600 hover:bg-green-50 hover:text-feduzzi-green"
                )}
            >
                <Icon size={20} className={isActive ? "text-white" : "text-gray-400 group-hover:text-feduzzi-green"} />
                <span className="font-medium">{label}</span>
            </Link>
        );
    };

    const DisabledNavItem = ({ icon: Icon, label }: { icon: any, label: string }) => (
        <div className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-400 cursor-not-allowed opacity-60">
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-200 shadow-sm z-20">
                <div className="p-8 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-feduzzi-red rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">F</div>
                    <span className="font-serif text-2xl text-gray-900 tracking-wide">Feduzzi<span className="text-feduzzi-red">.</span></span>
                </div>

                <nav className="flex-grow p-6 space-y-2">
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Overzicht</p>
                    <NavItem to="/admin" icon={LayoutDashboard} label="Dashboard" />

                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 mt-8">Beheer</p>
                    <DisabledNavItem icon={Package} label="Producten" />
                    <DisabledNavItem icon={Users} label="Klanten" />
                </nav>

                <div className="p-6 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md w-full transition-all duration-200 group"
                    >
                        <LogOut size={20} className="group-hover:text-red-600" />
                        <span className="font-medium">Uitloggen</span>
                    </button>
                    <div className="mt-4 px-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="Admin" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">Admin User</p>
                            <p className="text-xs text-gray-500">Beheerder</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 w-full bg-white border-b border-gray-200 z-30 px-4 py-3 flex justify-between items-center shadow-sm">
                <span className="font-serif text-xl text-gray-900">Feduzzi Admin</span>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-20 pt-16 px-6">
                    <nav className="flex flex-col space-y-4">
                        <NavItem to="/admin" icon={LayoutDashboard} label="Dashboard" />
                        <DisabledNavItem icon={Package} label="Producten" />
                        <DisabledNavItem icon={Users} label="Klanten" />
                        <hr className="border-gray-100" />
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 text-red-500"
                        >
                            <LogOut size={20} />
                            <span className="font-medium">Uitloggen</span>
                        </button>
                    </nav>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto p-4 md:p-10 pt-20 md:pt-10 scrollbar-hide">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
