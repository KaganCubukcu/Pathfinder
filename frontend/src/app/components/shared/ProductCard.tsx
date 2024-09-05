import React from 'react';
import { Product } from '../../types/Product.interface';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="w-[300px] rounded-lg shadow-lg p-4 text-white" key={product.id}>
      <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover rounded-md mb-4" />
      <h2 className="text-lg font-title">
        <a href={`/product/${product.name}`} className="text-white">
          {product.name}
        </a>
      </h2>
      <p className="text-sm my-2">
        {product.description.length > 100 ? product.description.substring(0, 100) + '...' : product.description}
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-xl">${product.price}</span>
        <button className="bg-black text-white rounded-md px-4 py-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
