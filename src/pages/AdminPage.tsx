import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import AdminLayout from '../components/admin/AdminLayout';
import OrderList from '../components/admin/OrderList';
import OrderDetail from '../components/admin/OrderDetail';
import { Order } from '../types';
import { Lock, TrendingUp, ShoppingBag, Users, ChevronRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdminPage: React.FC = () => {
    const { isAdminLoggedIn, loginAdmin, orders } = useStore();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            loginAdmin();
            setError('');
        } else {
            setError('Ongeldig wachtwoord');
        }
    };

    if (!isAdminLoggedIn) {
        return (
            <div className="font-sans text-gray-800 bg-feduzzi-cream min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md relative z-10 border border-gray-100">
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 bg-feduzzi-green/10 rounded-full flex items-center justify-center">
                                <Lock size={32} className="text-feduzzi-green" />
                            </div>
                        </div>

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-serif text-gray-900 mb-2">Admin Portal</h1>
                            <p className="text-gray-500">Log in om bestellingen te beheren</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Wachtwoord</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-feduzzi-green/20 focus:border-feduzzi-green outline-none transition-all placeholder:text-gray-300"
                                    placeholder="••••••••"
                                />
                            </div>
                            {error && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm flex items-center gap-2">
                                    <span>⚠️</span> {error}
                                </div>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-feduzzi-green text-white py-3 rounded-lg hover:bg-[#52755a] transition-all font-medium text-lg shadow-lg shadow-feduzzi-green/20"
                            >
                                Inloggen
                            </button>
                        </form>
                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-400">Gebruik wachtwoord: <span className="font-mono bg-gray-100 px-1 rounded">admin123</span></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const uniqueCustomers = new Set(orders.map(o => o.customer.email)).size;

    return (
        <AdminLayout>
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-serif text-gray-900 mb-2">Dashboard</h1>
                    <p className="text-gray-500">Welkom terug, hier is het overzicht van vandaag.</p>
                </div>
                <div className="text-sm text-gray-400 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    {new Date().toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <MetricCard
                    title="Totaal Omzet"
                    value={`€ ${totalRevenue.toFixed(2)}`}
                    icon={TrendingUp}
                    trend="+12.5% vs vorige week"
                    color="green"
                />
                <MetricCard
                    title="Bestellingen"
                    value={orders.length.toString()}
                    icon={ShoppingBag}
                    trend="+5 nieuwe vandaag"
                    color="blue"
                />
                <MetricCard
                    title="Klanten"
                    value={uniqueCustomers.toString()}
                    icon={Users}
                    trend="+2 nieuwe deze week"
                    color="purple"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-serif text-gray-900">Recente Bestellingen</h2>
                    <button className="text-feduzzi-green text-sm font-medium hover:underline flex items-center gap-1">
                        Bekijk alles <ChevronRight size={16} />
                    </button>
                </div>
                <OrderList orders={orders} onViewOrder={setSelectedOrder} />
            </div>

            {selectedOrder && (
                <OrderDetail order={selectedOrder} onClose={() => setSelectedOrder(null)} />
            )}
        </AdminLayout>
    );
};

const MetricCard = ({ title, value, icon: Icon, trend, color }: any) => {
    const colors = {
        green: "bg-green-50 text-green-600",
        blue: "bg-blue-50 text-blue-600",
        purple: "bg-purple-50 text-purple-600",
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${(colors as any)[color]}`}>
                    <Icon size={24} />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{trend}</span>
            </div>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
        </div>
    );
};

export default AdminPage;
