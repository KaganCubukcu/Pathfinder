import mongoose, { Document, Schema } from 'mongoose';

export interface Cart extends Document {
  user: Schema.Types.ObjectId;
  products: any[];
}

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      type: Schema.Types.Mixed,
    },
  ],
});

export default mongoose.model<Cart>('Cart', cartSchema);
