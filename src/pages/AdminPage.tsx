import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import AdminLayout from '../components/admin/AdminLayout';
import OrderList from '../components/admin/OrderList';
import OrderDetail from '../components/admin/OrderDetail';
import { Order } from '../types';
import { Lock } from 'lucide-react';
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
            <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
                <Header />
                <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans flex-grow">
                    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                        <div className="flex justify-center mb-6 text-feduzzi-green">
                            <Lock size={48} />
                        </div>
                        <h1 className="text-2xl font-serif text-center mb-6 text-gray-800">Admin Toegang</h1>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-feduzzi-green focus:border-transparent outline-none"
                                    placeholder="Vul wachtwoord in..."
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button
                                type="submit"
                                className="w-full bg-feduzzi-green text-white py-2 rounded-md hover:bg-[#52755a] transition-colors font-medium"
                            >
                                Inloggen
                            </button>
                        </form>
                        <div className="mt-4 text-center text-xs text-gray-400">
                            Hint: admin123
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-serif text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-500">Overzicht van alle bestellingen en klanten.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-feduzzi-green">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Totaal Omzet</p>
                    <p className="text-2xl font-bold text-gray-800">
                        € {orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Bestellingen</p>
                    <p className="text-2xl font-bold text-gray-800">{orders.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Klanten</p>
                    <p className="text-2xl font-bold text-gray-800">
                        {new Set(orders.map(o => o.customer.email)).size}
                    </p>
                </div>
            </div>

            <h2 className="text-xl font-serif text-gray-900 mb-4">Recente Bestellingen</h2>
            <OrderList orders={orders} onViewOrder={setSelectedOrder} />

            {selectedOrder && (
                <OrderDetail order={selectedOrder} onClose={() => setSelectedOrder(null)} />
            )}
        </AdminLayout>
    );
};

export default AdminPage;
