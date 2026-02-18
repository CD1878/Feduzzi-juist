import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../components/shop/ProductCard';
import CartDrawer from '../components/shop/CartDrawer';
import { products } from '../data/products';
import { useStore } from '../store/useStore';
import { ShoppingBag } from 'lucide-react';

const WebshopPage: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useStore();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Filter categories if needed, for now show all
    const categories = ['broodjes', 'maaltijden', 'traiteur'];

    return (
        <div className="font-sans text-gray-800 bg-feduzzi-cream min-h-screen flex flex-col">
            <Header />

            {/* Hero / Header for Shop */}
            <section className="bg-feduzzi-green text-white py-16 text-center px-4 relative">
                <h1 className="font-serif text-4xl md:text-5xl mb-4">Onze Webshop</h1>
                <p className="font-light text-lg max-w-2xl mx-auto opacity-90">
                    Bestel je favoriete Italiaanse delicatessen direct online.
                    Vers bereid en klaar om af te halen.
                </p>

                {/* Floating Cart Button for Mobile/Desktop */}
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="fixed bottom-6 right-6 z-40 bg-white text-feduzzi-green p-4 rounded-full shadow-2xl hover:bg-gray-50 transition-all flex items-center gap-2 group"
                    aria-label="Open cart"
                >
                    <div className="relative">
                        <ShoppingBag size={24} />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-feduzzi-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <span className="font-medium pr-1 text-sm hidden group-hover:inline-block transition-all">Winkelmandje</span>
                </button>
            </section>

            <main className="container mx-auto px-4 py-12 flex-grow">
                {categories.map((category) => {
                    const categoryProducts = products.filter(p => p.category === category);
                    if (categoryProducts.length === 0) return null;

                    return (
                        <div key={category} className="mb-16 last:mb-0">
                            <h2 className="font-serif text-3xl text-feduzzi-green mb-8 capitalize border-b border-gray-200 pb-2">
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {categoryProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </main>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Footer />
        </div>
    );
};

export default WebshopPage;
