import React, { useEffect, useState } from 'react';
import ProductCard from '../components/shared/ProductCard';
import { Product } from '../types/Product.interface';

const Store: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:27017/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
