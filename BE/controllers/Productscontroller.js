import Product from '../models/Products.js';
export const ProductsControllers = async (req, res) => {
    try {
        const { keyword } = req.query;
        if (!keyword || keyword.trim() === "") {
            return res.status(500).json({ message: "lỗi" })
        }
        const filter = {
            name: { $regex: keyword, $options: 'i' }
        }
        const result = await Product.find(filter);
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi sập kho!", error: error.message })
    };

}