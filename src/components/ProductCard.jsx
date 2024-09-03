import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(addToCart(product));
        alert("Product Added Successfully!");
    };

    return (
        <Link to={`/product/${product.id}`}>
        <div className='relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
            <img 
                src={product.image} 
                alt={product.name} 
                className='w-full h-48 object-cover mb-4 transition-transform duration-300 transform hover:scale-110'
            />
            <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800 truncate'>{product.name}</h3>
                <p className='text-lg font-medium text-red-600 mt-1'>${product.price}</p>
                <div className='flex items-center mt-2'>
                    {[...Array(5)].map((_, index) => (
                        <FaStar 
                            key={index} 
                            className={`text-lg ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                    ))}
                </div>
            </div>
            <div
                className='absolute bottom-4 right-4 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-medium rounded-full cursor-pointer group transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-l p-4'
                onClick={(e) => handleAddToCart(e, product)}
            >
                <FaShoppingCart className='w-8 h-8' />
                <span className='ml-3 hidden group-hover:block'>Add to Cart</span>
            </div>
        </div>
        </Link>
    );
};

export default ProductCard;
