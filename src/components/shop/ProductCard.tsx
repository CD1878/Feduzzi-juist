import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';

interface ProductCardProps {
    product: Product;
    onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    const addToCart = useStore((state) => state.addToCart);

    const handleAdd = () => {
        addToCart(product);
        if (onAddToCart) onAddToCart();
    };

    return (
        <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[15px] border-4 border-white shadow-sm m-3">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <button
                    onClick={handleAdd}
                    className="absolute bottom-3 right-3 bg-white text-feduzzi-green p-2 rounded-full shadow-lg hover:bg-feduzzi-green hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    aria-label="Add to cart"
                >
                    <Plus size={20} />
                </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg text-gray-900 line-clamp-1 group-hover:text-feduzzi-green transition-colors">
                        {product.name}
                    </h3>
                    <span className="font-sans font-medium text-feduzzi-red whitespace-nowrap ml-2">
                        € {product.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-gray-500 text-sm font-light line-clamp-2 mb-4 flex-grow">
                    {product.description}
                </p>

                <button
                    onClick={handleAdd}
                    className="w-full py-2 border border-feduzzi-green text-feduzzi-green text-sm font-medium rounded hover:bg-feduzzi-green hover:text-white transition-colors uppercase tracking-wider"
                >
                    Toevoegen
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
