import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import Rectangl from "../assets/images/Rectangl.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
      <div className="bg-gray-50 px-4 md:px-8 lg:px-16">
        

        {/* Shop Banner */}
        <div className="relative w-full h-80 md:h-96 mt-6">
          <img src={Rectangl} alt="Shop Banner" className="w-full h-full object-cover rounded-lg"/>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="text-center">
              <p className="text-gray-300 mb-2 text-lg">Romaisa Yaqoob</p>
              <h2 className="text-4xl font-extrabold text-white mb-2">Welcome to My Shop</h2>
              <p className="text-xl text-white font-semibold mb-4">Discover Amazing Products</p>
              <button className="bg-gray-800 px-8 py-3 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-900">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        
        <CategorySection />

        <InfoSection />
      

        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
