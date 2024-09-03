import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        if (product) {
            dispatch(addToCart(product));
            alert("Product Added Successfully!");
        } else {
            alert("Product not found");
        }
    };

    useEffect(() => {
        const fetchProduct = () => {
            const newProduct = products.find(product => product.id === parseInt(id));
            if (newProduct) {
                setProduct(newProduct);
                setError(null);
            } else {
                setError("Product not found");
            }
            setLoading(false);
        };

        fetchProduct();
    }, [id, products]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold text-red-600">{error}</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold">Product not found</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col lg:flex-row">
                <div className="lg:w-1/2 flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-cover rounded-lg"
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-2xl font-semibold text-gray-700 mb-6">${product.price}</p>
                    <button
                        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-transform transform hover:scale-105"
                        onClick={(e) => handleAddToCart(e, product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
