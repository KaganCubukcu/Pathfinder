import { Request, Response } from 'express';
import Cart from '../models/cartModel';

interface CustomRequest extends Request {
  user: {
    _id: string;
  };
}

export const addToCart = async (req: CustomRequest, res: Response) => {
  try {
    const { product } = req.body;
    let cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      cart = new Cart({ user: req.user._id, products: [] });
    }
    cart.products.push(product);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error });
  }
};

export const getCartItems = async (req: CustomRequest, res: Response) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error });
  }
};
