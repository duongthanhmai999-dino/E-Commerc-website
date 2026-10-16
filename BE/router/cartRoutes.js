import express from 'express';
import { addToCartController, GetCartController, updateQuantityController, deleteCartController } from '../controllers/Cartcontroller.js';

const router = express.Router();
const gacCongMiddleware = (req, res, next) => {
    console.log("🚨 [Trạm gác Middleware]: Check vé sạch sẽ!");
    next();
}
router.post('/cart', addToCartController);
router.get('/cart', GetCartController);
router.patch('/cart/:id', updateQuantityController);
router.delete('/cart/:id', gacCongMiddleware, deleteCartController);
export default router;
