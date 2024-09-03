import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal.jsx'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice.jsx'




const Navbar = () => {
    const [isModelOpen, setIsModelopen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const products = useSelector(state => state.cart.products)
    const [search, setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }
    const openSignUp = () => {
        setIsLogin(false)
        setIsModelopen(true)
    }

    const openLogin = () => {
        setIsLogin(true)
        setIsModelopen(true)
    }

  return (
    <nav className='bg-gray-800 text-white shadow-lg'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
            <div className='text-2xl font-extrabold'>
                <Link to="/">MyShop</Link>
            </div>
            <div className='relative flex-1 mx-6'>
                <form className='relative' onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder='Search Products' 
                        className='w-full py-2 pl-10 pr-4 rounded-full border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500' 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' />
                </form>
            </div>
            <div className='flex items-center space-x-6'>
               <Link to="/cart" className='relative'>
                   <FaShoppingCart className='text-xl' />
                   {products.length > 0 && (
                    <span className='absolute top-0 right-0 text-xs w-4 h-4 bg-red-600 rounded-full flex justify-center items-center text-white font-medium'>
                        {products.length}
                    </span>
                   )}
               </Link> 
               <button className='hidden md:block text-lg font-medium'
               onClick={() => setIsModelopen(true)}>
                  Login | Register
               </button>
               <button className='text-xl'>
                  <FaUser />
               </button>
            </div>
        </div>
        <div className='bg-gray-700 text-gray-300 flex justify-center space-x-8 py-2 text-sm font-semibold'>
            <Link to="/" className='hover:text-white hover:underline'>
               Home
            </Link>
            <Link to="/shop" className='hover:text-white hover:underline'>
               Shop
            </Link>
            <Link to="/contact" className='hover:text-white hover:underline'>
               Contact
            </Link>
            <Link to="/about" className='hover:text-white hover:underline'>
               About
            </Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelopen={setIsModelopen}>
            {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
        </Modal>
    </nav>
  )
}

export default Navbar
