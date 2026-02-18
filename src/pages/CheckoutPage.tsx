import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CheckoutForm from '../components/shop/CheckoutForm';
import OrderSummary from '../components/shop/OrderSummary';
import { useStore } from '../store/useStore';
import { Customer, Order } from '../types';
import { generateInvoice } from '../utils/invoiceGenerator';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const { cart, addOrder, clearCart } = useStore();
    const [step, setStep] = useState<'details' | 'success'>('details');
    const [customer, setCustomer] = useState<Customer>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: 'private',
        address: '',
        zipCode: '',
        city: '',
    });

    const handleCustomerChange = (field: keyof Customer, value: string) => {
        setCustomer(prev => ({ ...prev, [field]: value }));
    };

    const handlePayment = () => {
        // Basic validation
        if (!customer.firstName || !customer.lastName || !customer.email || !customer.address) {
            alert('Vul alstublieft alle verplichte velden in.');
            return;
        }

        const newOrder: Order = {
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            customer,
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            status: 'paid', // Simulating successful iDEAL payment
            paymentMethod: 'ideal'
        };

        // Process Order
        addOrder(newOrder);

        // Generate Invoice automatically
        generateInvoice(newOrder);

        // Clear cart and show success
        clearCart();
        setStep('success');
    };

    if (cart.length === 0 && step !== 'success') {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-serif text-gray-900 mb-4">Je winkelmandje is leeg</h2>
                <Link to="/webshop" className="text-feduzzi-green hover:underline">
                    Terug naar de webshop
                </Link>
            </div>
        );
    }

    return (
        <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
            <Header />

            <main className="container mx-auto px-4 py-8 flex-grow">
                {step === 'details' ? (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left: Form */}
                        <div className="flex-grow lg:w-2/3">
                            <Link to="/webshop" className="inline-flex items-center gap-2 text-gray-500 hover:text-feduzzi-green mb-6 transition-colors">
                                <ArrowLeft size={18} /> Verder winkelen
                            </Link>

                            <CheckoutForm customer={customer} onChange={handleCustomerChange} />

                            <div className="mt-8 flex justify-end">
                                {/* Mock iDEAL Button */}
                                <button
                                    onClick={handlePayment}
                                    className="bg-[#CC0066] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#a80055] transition-colors shadow-lg w-full md:w-auto flex items-center justify-center gap-3"
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Ideal_logo.png" alt="iDEAL" className="h-6 w-auto bg-white rounded p-0.5" />
                                    Betalen met iDEAL
                                </button>
                            </div>
                        </div>

                        {/* Right: Summary */}
                        <div className="lg:w-1/3">
                            <OrderSummary />
                        </div>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto text-center py-16">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={48} className="text-green-600" />
                        </div>
                        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Bedankt voor je bestelling!</h1>
                        <p className="text-gray-600 text-lg mb-8">
                            We hebben je bestelling in goede orde ontvangen. De factuur is zojuist automatisch gedownload en per e-mail verzonden naar <strong>{customer.email}</strong>.
                            We gaan direct voor je aan de slag!
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                to="/webshop"
                                className="bg-feduzzi-green text-white px-6 py-3 rounded hover:bg-[#52755a] transition-colors"
                            >
                                Terug naar Webshop
                            </Link>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default CheckoutPage;
