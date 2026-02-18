import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../components/shop/ProductCard';
import CartDrawer from '../components/shop/CartDrawer';
import { products } from '../data/products';
import { useStore } from '../store/useStore';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const WebshopPage: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useStore();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const categories = ['broodjes', 'maaltijden', 'traiteur'];

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
            <Header />

            {/* Hero / Header for Shop */}
            <section className="bg-feduzzi-green text-white pt-32 pb-16 text-center px-4 relative">
                <h1 className="font-serif text-4xl md:text-5xl mb-4">Onze Webshop</h1>
                <p className="font-light text-lg max-w-2xl mx-auto opacity-90">
                    Bestel je favoriete Italiaanse delicatessen direct online.
                </p>
            </section>

            {/* Sticky Category Nav */}
            <div className="sticky top-[80px] z-30 bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
                    <nav className="flex justify-center min-w-max">
                        {categories.map(cat => (
                            <Link
                                key={cat}
                                to={cat}
                                smooth={true}
                                duration={500}
                                offset={-140} // Offset for header + sticky nav
                                className="px-6 py-4 text-gray-600 font-medium uppercase tracking-wider hover:text-feduzzi-green hover:bg-gray-50 border-b-2 border-transparent hover:border-feduzzi-green cursor-pointer transition-all"
                                activeClass="text-feduzzi-green border-feduzzi-green bg-gray-50"
                                spy={true}
                            >
                                {cat}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 flex-grow">
                {categories.map((category) => {
                    const categoryProducts = products.filter(p => p.category === category);
                    if (categoryProducts.length === 0) return null;

                    return (
                        <div key={category} id={category} className="mb-12 scroll-mt-40">
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="font-serif text-2xl md:text-3xl text-feduzzi-green capitalize">
                                    {category}
                                </h2>
                                <div className="h-px bg-gray-200 flex-grow"></div>
                            </div>

                            {/* Denser Grid: sm:2, lg:3, xl:4 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {categoryProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </main>

            {/* Floating Cart Button */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-white text-feduzzi-green p-4 rounded-full shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all flex items-center gap-2 group border border-gray-100"
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

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <Footer />
        </div>
    );
};

export default WebshopPage;
