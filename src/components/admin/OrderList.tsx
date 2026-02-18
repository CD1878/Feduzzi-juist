import React from 'react';
import { Order } from '../../types';
import { Eye, CheckCircle, Clock, XCircle, MoreVertical } from 'lucide-react';
import clsx from 'clsx';

interface OrderListProps {
    orders: Order[];
    onViewOrder: (order: Order) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onViewOrder }) => {
    if (orders.length === 0) {
        return (
            <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
                    <Clock size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Geen bestellingen gevonden</h3>
                <p className="text-gray-500 mt-1">Nieuwe bestellingen verschijnen hier automatisch.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50/50 border-b border-gray-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">Datum</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">Klant</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">Type</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">Totaal</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wider text-right">Actie</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {orders.map((order) => (
                        <tr
                            key={order.id}
                            className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                            onClick={() => onViewOrder(order)}
                        >
                            <td className="px-6 py-4">
                                <span className="font-mono text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    #{order.id.substring(0, 8).toUpperCase()}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{new Date(order.date).toLocaleDateString()}</div>
                                <div className="text-xs text-gray-400">{new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                                        {order.customer.firstName[0]}{order.customer.lastName[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{order.customer.firstName} {order.customer.lastName}</div>
                                        {order.customer.companyName && (
                                            <div className="text-xs text-feduzzi-green font-medium">{order.customer.companyName}</div>
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={clsx(
                                    "px-2 py-1 rounded text-xs font-medium border",
                                    order.customer.type === 'business'
                                        ? "bg-purple-50 text-purple-700 border-purple-100"
                                        : "bg-blue-50 text-blue-700 border-blue-100"
                                )}>
                                    {order.customer.type === 'business' ? 'Zakelijk' : 'Particulier'}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-sm font-bold text-gray-900">€ {order.total.toFixed(2)}</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={clsx(
                                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                                    {
                                        'bg-green-50 text-green-700 border-green-100': order.status === 'paid' || order.status === 'completed',
                                        'bg-yellow-50 text-yellow-700 border-yellow-100': order.status === 'pending',
                                        'bg-red-50 text-red-700 border-red-100': order.status === 'cancelled',
                                    }
                                )}>
                                    {order.status === 'paid' && <CheckCircle size={12} />}
                                    {order.status === 'pending' && <Clock size={12} />}
                                    {order.status === 'cancelled' && <XCircle size={12} />}
                                    <span className="capitalize">{order.status}</span>
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onViewOrder(order);
                                    }}
                                    className="p-2 text-gray-400 hover:text-feduzzi-green hover:bg-green-50 rounded-full transition-all"
                                >
                                    <Eye size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
