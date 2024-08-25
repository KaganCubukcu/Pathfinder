import mongoose, { Document, Schema } from 'mongoose';

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  isOnSale: boolean;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isOnSale: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model<Product>('Product', productSchema);
