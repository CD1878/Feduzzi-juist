import React, { useEffect } from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import CartItem from './CartItem';
import clsx from 'clsx';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
    const { cart } = useStore();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={clsx(
                    'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300',
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={clsx(
                    'fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-feduzzi-green">
                        <ShoppingBag size={20} />
                        <h2 className="font-serif text-xl font-medium">Winkelmandje ({totalItems})</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                <ShoppingBag size={32} />
                            </div>
                            <p className="text-gray-500 font-light">Je winkelmandje is nog leeg.</p>
                            <button
                                onClick={onClose}
                                className="text-feduzzi-green font-medium hover:underline underline-offset-4"
                            >
                                Verder winkelen
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600 font-light">Subtotaal</span>
                            <span className="text-xl font-medium text-feduzzi-green">
                                € {subtotal.toFixed(2)}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mb-4 text-center">
                            Verzendkosten worden berekend bij het afrekenen.
                        </p>
                        <Link
                            to="/checkout"
                            onClick={onClose}
                            className="w-full flex items-center justify-center gap-2 bg-feduzzi-green text-white py-4 rounded-md font-medium uppercase tracking-wider hover:bg-[#52755a] transition-all shadow-lg group"
                        >
                            Afrekenen <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
