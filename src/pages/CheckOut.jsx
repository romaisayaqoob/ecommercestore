import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  });
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "00000",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice
    };

    console.log('Order placed:', newOrder);


    navigate('/order-confirmation', { state: { order: newOrder } });
  };

  return (
    <div className='container mx-auto py-8 min-h-screen px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-4'>CHECKOUT PAGE</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
          {/* Billing Information */}
          <div className='border p-4 mb-6 rounded-lg shadow-md'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Enter Name'
                  className='w-full px-3 py-2 border rounded-lg'
                />
              </div>
              
              <div>
                <label className='block text-gray-700'>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder='Enter email'
                  className='w-full px-3 py-2 border rounded-lg'
                />
              </div>
              
              <div>
                <label className='block text-gray-700'>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder='Enter phone #'
                  className='w-full px-3 py-2 border rounded-lg'
                />
              </div>
            </div>
          </div>
          
          {/* Shipping Information */}
          <div className='border p-4 mb-6 rounded-lg shadow-md'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className='block text-gray-700'>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder='Enter Address'
                  className='w-full px-3 py-2 border rounded-lg'
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                />
              </div>
              
              <div>
                <label className='block text-gray-700'>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder='Enter City'
                  className='w-full px-3 py-2 border rounded-lg'
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                />
              </div>
              
              <div>
                <label className='block text-gray-700'>ZipCode</label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder='Enter ZipCode'
                  className='w-full px-3 py-2 border rounded-lg'
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                />
              </div>
            </div>
          </div>
          
          {/* Payment Method */}
          <div className='border p-4 mb-6 rounded-lg shadow-md'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className='flex items-center mb-2'>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
              </div>
              
              <div className='flex items-center mb-2'>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className='block text-gray-700 ml-2'>Debit Card</label>
              </div>

              {paymentMethod === "dc" && (
                <div className='bg-gray-100 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                    <input
                      type="text"
                      placeholder='Enter card number'
                      className='border p-2 w-full rounded-lg'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                    <input
                      type="text"
                      placeholder='Enter name'
                      className='border p-2 w-full rounded-lg'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Expiry Date</label>
                    <input
                      type="text"
                      placeholder='MM/YY'
                      className='border p-2 w-full rounded-lg'
                    />
                  </div>
                  <div>
                    <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                    <input
                      type="text"
                      placeholder='Enter CVV'
                      className='border p-2 w-full rounded-lg'
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
          <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
          <div className='space-y-4'>
            {cart.products.map(product => (
              <div key={product.id} className='flex items-center justify-between border-b py-2'>
                <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                <div className='flex-1 ml-4'>
                  <h4 className='text-lg font-semibold'>{product.name}</h4>
                  <p className='text-gray-700'>
                    ${product.price} x {product.quantity}
                  </p>
                </div>
                <p className='font-semibold'>
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-between mt-4 border-t pt-4'>
            <span className='font-semibold'>Total Price:</span>
            <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
          </div>
          <button 
            className='w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-800'
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
