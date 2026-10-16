import {ProductsControllers} from '../controllers/Productscontroller.js';
import express from 'express';
export const productRouter = express.Router();
productRouter.get('/', ProductsControllers);

