import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useStore } from '../../store/useStore';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const { updateQuantity, removeFromCart } = useStore();

    return (
        <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0 items-center">
            {/* Image */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex-grow flex flex-col justify-between h-full py-1">
                <div className="flex justify-between items-start gap-2">
                    <h4 className="font-serif text-gray-900 text-sm md:text-base line-clamp-2 leading-tight">
                        {item.name}
                    </h4>
                    <span className="font-sans font-medium text-feduzzi-green text-sm whitespace-nowrap">
                        € {(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between items-end mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-200 rounded-md bg-white">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-2 hover:bg-gray-50 text-gray-500 transition-colors disabled:opacity-30"
                            disabled={item.quantity <= 1}
                        >
                            <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-gray-700 select-none">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-2 hover:bg-gray-50 text-gray-500 transition-colors"
                        >
                            <Plus size={14} />
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-full"
                        title="Verwijderen"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
