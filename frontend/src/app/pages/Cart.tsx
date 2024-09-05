import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, AppDispatch } from '../store/features/cart/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div className="p-4 bg-neutral-50 shadow rounded-lg">
      <h1 className="font-title text-2xl mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-2 bg-white rounded-md shadow-sm">
            <img src={item.image} alt={item.name} className="w-[50px] h-[50px] object-cover rounded-md" />
            <span className="text-lg">{item.name}</span>
            <span>${item.price}</span>
            <input type="number" min="1" value={item.quantity} className="w-[50px] border rounded-md p-1" readOnly />
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="w-[25px] h-[25px] bg-primary text-white rounded-full flex items-center justify-center"
            >
              <span className="text-red-500 text-2xl">
                <MdDelete />
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl">Total: ${totalPrice.toFixed(2)}</span>
        <button className="bg-primary text-white py-2 px-4 rounded-md">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
