import React from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'


const FilterData = () => {
    const filterProducts= useSelector(state => state.product.filteredData)
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {filterProducts.length > 0 ?
        <>
    <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
    <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
      {filterProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
    </>
    :
    <div >
       <div className='bg-white p-6 rounded-lg shadow-md border'>
        <h2 className='text-3xl font-semibold mb-4 text-center'>
          No product matches your search :(
        </h2>
      </div>
    </div>}
  </div>
  )
}

export default FilterData