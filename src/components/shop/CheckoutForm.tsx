import React from 'react';
import { Customer } from '../../types';

interface CheckoutFormProps {
    customer: Customer;
    onChange: (field: keyof Customer, value: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ customer, onChange }) => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-serif text-2xl text-feduzzi-green mb-6">Jouw Gegevens</h2>

            {/* Customer Type Toggle */}
            <div className="flex gap-6 mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        checked={customer.type === 'private'}
                        onChange={() => onChange('type', 'private')}
                        className="w-4 h-4 text-feduzzi-green focus:ring-feduzzi-green border-gray-300"
                    />
                    <span className="font-sans text-gray-700">Particulier</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        checked={customer.type === 'business'}
                        onChange={() => onChange('type', 'business')}
                        className="w-4 h-4 text-feduzzi-green focus:ring-feduzzi-green border-gray-300"
                    />
                    <span className="font-sans text-gray-700">Zakelijk</span>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Fields */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Voornaam *</label>
                    <input
                        type="text"
                        required
                        value={customer.firstName}
                        onChange={(e) => onChange('firstName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Achternaam *</label>
                    <input
                        type="text"
                        required
                        value={customer.lastName}
                        onChange={(e) => onChange('lastName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>

                {/* Contact Fields */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mailadres *</label>
                    <input
                        type="email"
                        required
                        value={customer.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer *</label>
                    <input
                        type="tel"
                        required
                        value={customer.phone}
                        onChange={(e) => onChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>

                {/* Business Fields - Only show if Business selected */}
                {customer.type === 'business' && (
                    <>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrijfsnaam *</label>
                            <input
                                type="text"
                                required
                                value={customer.companyName || ''}
                                onChange={(e) => onChange('companyName', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">KVK Nummer</label>
                            <input
                                type="text"
                                value={customer.kvkNumber || ''}
                                onChange={(e) => onChange('kvkNumber', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">BTW Nummer</label>
                            <input
                                type="text"
                                value={customer.vatNumber || ''}
                                onChange={(e) => onChange('vatNumber', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                            />
                        </div>
                    </>
                )}

                {/* Address Fields */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Straat en huisnummer *</label>
                    <input
                        type="text"
                        required
                        value={customer.address}
                        onChange={(e) => onChange('address', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postcode *</label>
                    <input
                        type="text"
                        required
                        value={customer.zipCode}
                        onChange={(e) => onChange('zipCode', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Woonplaats *</label>
                    <input
                        type="text"
                        required
                        value={customer.city}
                        onChange={(e) => onChange('city', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-feduzzi-green focus:border-feduzzi-green outline-none transition-colors"
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
