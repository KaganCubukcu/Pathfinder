import { Router } from 'express';
import { addToCart, getCartItems } from '../controllers/cartController';

const router = Router();

router.post('/cart', addToCart);
router.get('/cart', getCartItems);

export default router;
