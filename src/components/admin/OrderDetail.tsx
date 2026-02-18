import React, { useRef } from 'react';
import { X, Download, Printer, User, MapPin, CreditCard, Building2, Phone, Mail } from 'lucide-react';
import { Order } from '../../types';
import { generateInvoice } from '../../utils/invoiceGenerator';

interface OrderDetailProps {
    order: Order | null;
    onClose: () => void;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ order, onClose }) => {
    const printRef = useRef<HTMLDivElement>(null);

    if (!order) return null;

    const handlePrint = () => {
        const printContent = printRef.current;
        if (printContent) {
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContent.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
            window.location.reload(); // Reload to restore state listeners (simple workaround for React print)
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
                    <div>
                        <h2 className="text-2xl font-serif text-gray-900">Bestelling #{order.id.substring(0, 8).toUpperCase()}</h2>
                        <p className="text-gray-500 text-sm mt-1">Geplaatst op {new Date(order.date).toLocaleString('nl-NL')}</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrint}
                            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                            title="Print Bestelling"
                        >
                            <Printer size={20} /> <span className="text-sm font-medium hidden sm:inline">Print</span>
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Content Scroll Area */}
                <div className="flex-grow overflow-y-auto p-8" ref={printRef}>

                    {/* Status Banner */}
                    <div className={`mb-8 p-4 rounded-lg flex items-center justify-between
                        ${order.status === 'paid' ? 'bg-green-50 border border-green-100' : 'bg-yellow-50 border border-yellow-100'}`}>
                        <div className="flex items-center gap-3">
                            <span className={`h-3 w-3 rounded-full ${order.status === 'paid' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                            <span className={`font-medium ${order.status === 'paid' ? 'text-green-700' : 'text-yellow-700'}`}>
                                Status: <span className="uppercase">{order.status}</span>
                            </span>
                        </div>
                        <span className="font-mono text-sm text-gray-500">ID: {order.id}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        {/* Customer Details */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-serif text-lg text-gray-900 mb-4 flex items-center gap-2">
                                <User size={18} className="text-feduzzi-green" /> Klantgegevens
                            </h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p className="font-bold text-gray-900 text-base">{order.customer.firstName} {order.customer.lastName}</p>
                                <p className="flex items-center gap-2"><Mail size={14} /> {order.customer.email}</p>
                                <p className="flex items-center gap-2"><Phone size={14} /> {order.customer.phone}</p>

                                {order.customer.type === 'business' && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <p className="flex items-center gap-2 font-semibold text-feduzzi-green mb-2">
                                            <Building2 size={14} /> Zakelijke Gegevens
                                        </p>
                                        <p><span className="font-medium">Bedrijf:</span> {order.customer.companyName}</p>
                                        <p><span className="font-medium">KVK:</span> {order.customer.kvkNumber || '-'}</p>
                                        <p><span className="font-medium">BTW:</span> {order.customer.vatNumber || '-'}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Shipping/Billing */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h3 className="font-serif text-lg text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin size={18} className="text-feduzzi-green" /> Adresgegevens
                            </h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p className="text-gray-900">{order.customer.address}</p>
                                <p>{order.customer.zipCode} {order.customer.city}</p>

                                <h3 className="font-serif text-lg text-gray-900 mt-6 mb-3 flex items-center gap-2">
                                    <CreditCard size={18} className="text-feduzzi-green" /> Betaling
                                </h3>
                                <p>Methode: <span className="font-medium uppercase">{order.paymentMethod}</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Order Items Table */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Product</th>
                                    <th className="px-6 py-4 text-center">Aantal</th>
                                    <th className="px-6 py-4 text-right">Prijs</th>
                                    <th className="px-6 py-4 text-right">Totaal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {order.items.map(item => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{item.name}</div>
                                            <div className="text-gray-500 text-xs">{item.category}</div>
                                        </td>
                                        <td className="px-6 py-4 text-center text-gray-600">{item.quantity}</td>
                                        <td className="px-6 py-4 text-right text-gray-600">€ {item.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 text-right font-medium text-gray-900">€ {(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-gray-50">
                                <tr>
                                    <td colSpan={3} className="px-6 py-4 text-right font-bold text-gray-900">Totaal</td>
                                    <td className="px-6 py-4 text-right font-bold text-feduzzi-green text-lg">€ {order.total.toFixed(2)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-all"
                    >
                        Sluiten
                    </button>
                    <button
                        onClick={() => generateInvoice(order)}
                        className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                    >
                        <Download size={18} /> Download Factuur
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
