import express from 'express';
import cors from 'cors';
import cartRouter from './router/cartRoutes.js'; // 1. Nhập bảng chỉ đường giỏ hàng vào
import {productRouter} from './router/Products.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', cartRouter);
app.use('/apsearch', productRouter);



app.get('/', (req, res) => {
  res.json({ message: "hello word" });
});

export default app;
