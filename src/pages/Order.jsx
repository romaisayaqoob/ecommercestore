import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate()
  return (
    <div className='container mx-auto py-8 min-h-screen px-4 md:px-16 lg:px-24'>
      <div className='bg-white p-6 rounded-lg shadow-md border'>
        <h2 className='text-3xl font-semibold mb-4 text-center text-green-600'>
          Thank you for ordering!
        </h2>
        <p className='text-lg text-center mb-6'>
          Your order has been placed successfully.
        </p>
        
        <button className= "ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
        onClick={() => navigate('/')}>
            Continue Shopping 
        </button>
      </div>
    </div>
  );
};

export default Order;
