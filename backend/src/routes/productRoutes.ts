import express from 'express';
import { getProducts, getProductByName, getBestSellerProducts } from '../controllers/productController';

const router = express.Router();

router.get('/', getProducts);
router.get('/best-sellers', getBestSellerProducts);
router.get('/:name', getProductByName);

export default router;
