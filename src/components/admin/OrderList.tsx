import React from 'react';
import { Order } from '../../types';
import { Eye, CheckCircle, Clock, XCircle } from 'lucide-react';

interface OrderListProps {
    orders: Order[];
    onViewOrder: (order: Order) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onViewOrder }) => {
    if (orders.length === 0) {
        return (
            <div className="bg-white p-12 rounded-lg shadow-sm text-center">
                <p className="text-gray-500">Nog geen bestellingen ontvangen.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm">Bestelnummer</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm">Datum</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm">Klant</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm">Bedrag</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm">Status</th>
                            <th className="px-6 py-4 font-medium text-gray-500 text-sm text-right">Acties</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-sans text-sm text-gray-900">
                                    #{order.id.substring(0, 8).toUpperCase()}
                                </td>
                                <td className="px-6 py-4 font-sans text-sm text-gray-600">
                                    {new Date(order.date).toLocaleDateString()}<br />
                                    <span className="text-xs text-gray-400">{new Date(order.date).toLocaleTimeString()}</span>
                                </td>
                                <td className="px-6 py-4 font-sans text-sm text-gray-900">
                                    <div className="font-medium">{order.customer.firstName} {order.customer.lastName}</div>
                                    <div className="text-xs text-gray-500">{order.customer.email}</div>
                                </td>
                                <td className="px-6 py-4 font-sans text-sm font-medium text-feduzzi-green">
                                    € {order.total.toFixed(2)}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                    ${order.status === 'paid' ? 'bg-green-100 text-green-700' :
                                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                order.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}
                  `}>
                                        {order.status === 'paid' && <CheckCircle size={12} />}
                                        {order.status === 'pending' && <Clock size={12} />}
                                        {order.status === 'cancelled' && <XCircle size={12} />}
                                        {order.status === 'completed' && <CheckCircle size={12} />}
                                        <span className="capitalize">{order.status}</span>
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        onClick={() => onViewOrder(order)}
                                        className="text-gray-400 hover:text-feduzzi-green transition-colors"
                                        title="Bekijk details"
                                    >
                                        <Eye size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;
