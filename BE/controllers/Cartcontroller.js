import { Cart } from '../models/Cart.js';
// Hàm xử lý việc thêm vào giỏ hàng
export const addToCartController = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body; // Bốc dữ liệu từ Frontend gửi lên kế bên nhau

    // Đã có sản phẩm này trong giỏ rồi thì cộng dồn số lượng, không tạo dòng mới nữa
    const existingItem = await Cart.findOne({ productId: productId });
    if (existingItem) {
       await existingItem.save();
      return res.status(200).json({ message: "Đã cộng dồn số lượng trong giỏ hàng!", data: existingItem });
    }

    // Chưa có thì mới tạo một món hàng mới và lưu vào MongoDB
    const newCartItem = new Cart({ productId: productId, quantity: quantity });
    await newCartItem.save(); // Lệnh lưu vĩnh viễn xuống database

    res.status(200).json({ message: "Đã lưu vào MongoDB thông qua Controller thành công!", data: newCartItem });
  } catch (error) {
    res.status(500).json({ message: "Lỗi xử lý hệ thống!", error: error.message });
  }
};
export const GetCartController = async (req, res) => {
  try {
    const cartItems = await Cart.find(); 

    res.status(200).json({
      success: true,
      data: cartItems 
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi không lấy được giỏ hàng!", error: error.message });
  }
};
export const updateQuantityController = async (req, res) => {
   try {
    const productId = req.params.id; 
    const { quantity } = req.body;   
 const updatedItem = await Cart.findOneAndUpdate(
      { productId: productId }, // Bây giờ vế phải đã có đồ thật để điền vào lỗ!
      { quantity: quantity },
      { returnDocument: 'after' } // 📸 Chụp và trả về cái biên lai SAU KHI đã sửa xong!
    );
     res.status(200).json({ success: true, data: updatedItem });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
export const deleteCartController = async (req, res) => {
  try {
     const productId = req.params.id; 
     const deletedItem = await Cart.findOneAndDelete({ productId: productId });
      if (!deletedItem) {
      return res.status(404).json({ success: false, message: "Món hàng này không tồn tại trong kho để xóa!" });
    }

    // Khúc 3: Xóa thành công thì dập cái biên lai báo tin vui gửi ngược về cho Frontend ăn mừng! [1.1]
    res.status(200).json({ success: true, message: "Đã đá văng món hàng khỏi giỏ thành công rực rỡ!", data: deletedItem });
  } catch (error) {
    // Túi khí ô tô bung ra bảo vệ server nếu lỡ rớt mạng dọc đường [1.1]
    res.status(500).json({ success: false, error: error.message });
  }
  };
