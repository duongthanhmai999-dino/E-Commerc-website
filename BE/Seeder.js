import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import mongoose from 'mongoose';
import Product from './models/Products.js';
import dataset from '../FE/vite-project/src/data/ecommerce_dataset.json'with { type: 'json' };
export const runData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        await Product.deleteMany({});
        await Product.insertMany(dataset.products);
        await mongoose.disconnect();
    } catch (error) {
        mongoose.disconnect();
        console.log(error);
    }
};
