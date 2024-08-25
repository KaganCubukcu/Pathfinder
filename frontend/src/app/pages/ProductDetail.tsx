import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/Product.interface';

const ProductDetail: React.FC = () => {
  const { name } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!name) return;
    fetch(`http://localhost:27017/api/product/${name}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [name]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shadow-lg rounded-lg p-6">
      <div className="flex flex-row">
        <div className="w-1/2 pr-4">
          <img src={product.image} alt="Product Image" className="w-full h-[300px] object-cover rounded-md" />
        </div>
        <div className="w-1/2">
          <h1 className="font-title text-2xl mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.price}</p>
          <p className="mb-6">{product.description}</p>
          <button className="bg-black text-white px-4 py-2 rounded-full">Add to Cart</button>
        </div>
      </div>
      <div className="mt-8">
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">Product Details</summary>
          <p className="mt-2">
            Here are more in-depth details about the product, including specifications, materials, and other relevant
            information.
          </p>
        </details>
        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">Reviews</summary>
          <p className="mt-2">
            Customer reviews will be displayed here, providing feedback and ratings from those who have purchased and
            used the product.
          </p>
        </details>
      </div>
    </div>
  );
};

export default ProductDetail;
