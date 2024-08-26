import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import axios from 'axios';
import { Product } from '../types/Product.interface';

const Home: React.FC = () => {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get('http://localhost:27017/api/products/best-sellers');
        setBestSellers(response.data);
      } catch (error) {
        console.error('Error fetching best sellers:', error);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div>
      <Hero />
      <CallToAction />
      <div className="text-white mt-5">
        <h1 className="text-2xl font-bold mb-4">Best Sellers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-300">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
