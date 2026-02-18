import React from 'react';
import { X, Download } from 'lucide-react';
import { Order } from '../../types';
import { generateInvoice } from '../../utils/invoiceGenerator';

interface OrderDetailProps {
    order: Order | null;
    onClose: () => void;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ order, onClose }) => {
    if (!order) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Bestelling #{order.id}</h2>
                    <button onClick={onClose}><X /></button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-6">

                    {/* Customer */}
                    <div>
                        <h3 className="font-bold mb-2">Klant</h3>
                        <div className="bg-gray-50 p-3 rounded">
                            <p>{order.customer.firstName} {order.customer.lastName}</p>
                            <p>{order.customer.email}</p>
                            <p>{order.customer.address}, {order.customer.city}</p>
                        </div>
                    </div>

                    {/* Items */}
                    <div>
                        <h3 className="font-bold mb-2">Producten</h3>
                        <ul className="space-y-2">
                            {order.items.map(item => (
                                <li key={item.id} className="flex justify-between border-b pb-1">
                                    <span>{item.quantity}x {item.name}</span>
                                    <span>€ {(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4 font-bold text-lg">
                            <span>Totaal</span>
                            <span>€ {order.total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <button
                        onClick={() => generateInvoice(order)}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                        <Download size={18} /> Download Factuur
                    </button>

                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
