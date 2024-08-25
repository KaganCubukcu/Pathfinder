import express from 'express';
import { getProducts, getProductByName } from '../controllers/productController';

const router = express.Router();

router.get('/', getProducts);
router.get('/:name', getProductByName);

export default router;
