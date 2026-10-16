import mongoose from 'mongoose';
 const cartSchema = new mongoose.Schema({
  productId: { type: Number, required: true }, // Bắt buộc phải có mã sản phẩm
  quantity: { type: Number, default: 1 }        // Số lượng mặc định ban đầu là 1
});

export const Cart = mongoose.model('Cart', cartSchema);
 