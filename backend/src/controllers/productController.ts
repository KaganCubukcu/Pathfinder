import { Request, Response } from 'express';
import Product from '../models/productModel';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

export const getProductByName = async (req: Request, res: Response) => {
  try {
    const productName = req.params.name;
    const product = await Product.findOne({ name: productName });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

export const getBestSellerProducts = async (req: Request, res: Response) => {
  try {
    const bestSellers = await Product.find({ isOnSale: true }).limit(5);
    res.status(200).json(bestSellers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching best seller products', error });
  }
};
