import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag } from 'react-icons/fa';

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-4xl text-blue-600" />,
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className="text-4xl text-green-600" />,
            title: 'Support 24/7',
            description: 'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBillWave className="text-4xl text-yellow-600" />,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className="text-4xl text-purple-600" />,
            title: 'Payment Secure',
            description: 'Your payment information is safe with us',
        },
        {
            icon: <FaTag className="text-4xl text-red-600" />,
            title: 'Discount',
            description: 'Enjoy the best prices on our products',
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
                    <p className="text-lg text-gray-600 mt-2">Discover our top benefits and services</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {infoItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:bg-gray-50 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                        >
                            <div className="mb-4 p-3 rounded-full bg-gray-100">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="mt-2 text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
