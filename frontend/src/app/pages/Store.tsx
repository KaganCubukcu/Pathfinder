import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/shared/ProductCard';
import { RootState } from '../store/store';
import { AppDispatch, fetchProducts } from '../store/features/product/productSlice';
import Loading from '../components/shared/Loading';

const Store: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <div>
      <h1>Store</h1>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {products.map((product) => (
          <ProductCard key={`product-${product.name}`} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
