import React from 'react';
import { FaTshirt, FaFemale, FaChild } from 'react-icons/fa';
import Rectangl from '../assets/images/Rectangl.jpg';

const CategorySection = () => {
    const categories = [
        {
            title: 'Men',
            imageUrl: Rectangl, 
            icon: <FaTshirt className='text-4xl text-white' />
        },
        {
            title: 'Women',
            imageUrl: Rectangl, 
            icon: <FaFemale className='text-4xl text-white' />
        },
        {
            title: 'Kids',
            imageUrl: Rectangl, 
            icon: <FaChild className='text-4xl text-white' />
        },
    ];

    return (
        <div className='container mx-auto px-4 md:px-8 lg:px-16 py-12'>
            <h2 className='text-3xl font-extrabold text-center mb-8 text-gray-900'>
                Shop by Categories
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className='relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer'
                    >
                        <img 
                            src={category.imageUrl} 
                            alt={category.title} 
                            className='w-full h-64 object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-center p-6'>
                            <div className='mb-4'>
                                {category.icon}
                            </div>
                            <p className='text-white text-2xl font-bold mb-2'>{category.title}</p>
                            <p className='text-white text-sm font-medium'>Explore Now</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
