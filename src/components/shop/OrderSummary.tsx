import React from 'react';
import { useStore } from '../../store/useStore';

const OrderSummary: React.FC = () => {
    const { cart } = useStore();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0; // Free shipping or pickup for now
    const total = subtotal + shipping;

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
            <h2 className="font-serif text-xl text-gray-900 mb-4">Besteloverzicht</h2>

            <div className="space-y-4 mb-6">
                {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">
                            {item.quantity}x {item.name}
                        </span>
                        <span className="font-medium text-gray-900">
                            € {(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotaal</span>
                    <span>€ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Verzendkosten</span>
                    <span>Gratis</span>
                </div>
                <div className="flex justify-between text-feduzzi-green font-medium text-lg pt-2 border-t border-gray-200 mt-2">
                    <span>Totaal (incl. BTW)</span>
                    <span>€ {total.toFixed(2)}</span>
                </div>
            </div>

            <div className="mt-6 text-xs text-gray-500 text-center">
                Door te bestellen ga je akkoord met onze algemene voorwaarden.
            </div>
        </div>
    );
};

export default OrderSummary;
