import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true]
    },
    thumbnail: {
        type: String,
        required: [true]
    },
    price: {
        type: Number,
        required: [true]
    },
    sale_price: {
        type: Number,
        default: null
    },
    discount: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        default: null
    }
  },
  { 
    timestamps: true 
  }
);

const Product = mongoose.model('Product', ProductsSchema);
export default Product;
