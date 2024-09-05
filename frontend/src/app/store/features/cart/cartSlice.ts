import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../types/Product.interface';
import axios from 'axios';
import { store } from '../../store';

interface CartState {
  items: Product[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

// Thunk for adding to cart
export const addToCartAsync = createAsyncThunk('cart/addToCart', async (product: Product) => {
  const response = await axios.post('http://localhost:27017/api/cart', { product });
  return response.data;
});

export type AppDispatch = typeof store.dispatch;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingProductIndex = state.items.findIndex((item) => item.id === action.payload);
      if (existingProductIndex !== -1) {
        state.totalQuantity -= state.items[existingProductIndex].quantity;
        state.items.splice(existingProductIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    });
  },
});

export const { removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
