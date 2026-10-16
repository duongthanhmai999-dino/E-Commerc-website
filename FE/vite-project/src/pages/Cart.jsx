import './Cart.css';
import Topheader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dataset from '../data/ecommerce_dataset.json';
import { formatCurrency } from '../utils/format';

const Cart = () => {
    const [cartData, setCartData] = useState([]);

    const loadCart = () => {
        axios.get('http://localhost:3000/api/cart')
            .then((res) => {
                if (res.data.success) {
                    setCartData(res.data.data);
                }
            })
            .catch((error) => {
                console.log('Không lấy được giỏ hàng:', error.message);
            });
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleRemove = (productId) => {
        axios.delete(`http://localhost:3000/api/cart/${productId}`)
            .then(() => loadCart())
            .catch((error) => console.log('Xoá thất bại:', error.message));
    };

    const handleQuantityChange = (productId, currentQuantity, delta) => {
        const nextQuantity = currentQuantity + delta;
        if (nextQuantity < 1) return;
        axios.patch(`http://localhost:3000/api/cart/${productId}`, { quantity: nextQuantity })
            .then(() => loadCart())
            .catch((error) => console.log('Cập nhật số lượng thất bại:', error.message));
    };

    // Đối chiếu productId trong giỏ hàng (Mongo) với dataset sản phẩm ở Frontend để lấy tên/ảnh/giá
    const cartProducts = cartData
        .map((item) => {
            const product = dataset.products.find((p) => p.id === item.productId);
            if (!product) return null;
            return {
                id: item.productId,
                imgUrl: product.thumbnail,
                name: product.name,
                price: product.sale_price,
                quantity: item.quantity,
                subtotal: product.sale_price * item.quantity,
            };
        })
        .filter(Boolean);

    const total = cartProducts.reduce((sum, item) => sum + item.subtotal, 0);

    return (
        <>
            <Topheader />
            <MainHeader />
             <div className="cart-page-container">

      {/* 1. THANH ĐƯỜNG DẪN BREADCRUMB PHÍA TRÊN */}
      <div className="cart-breadcrumb">
        <span className="bc-item muted">Home</span>
        <span className="bc-slash">/</span>
        <span className="bc-item active">Cart</span>
      </div>

      {/* 2. BẢNG DANH SÁCH SẢN PHẨM TRONG GIỎ HÀNG */}
      <div className="cart-table">

        {/* Hàng tiêu đề của bảng */}
        <div className="cart-table-header">
          <span className="col-prod">Product</span>
          <span className="col-price">Price</span>
          <span className="col-qty">Quantity</span>
          <span className="col-sub">Subtotal</span>
        </div>

        {/* Giỏ hàng trống thì hiện thông báo, có sản phẩm thì đổ ra từng hàng */}
        {cartProducts.length === 0 ? (
          <div className="cart-empty-message">Giỏ hàng của bạn đang trống</div>
        ) : cartProducts.map((item) => (
          <div className="cart-table-row" key={item.id}>

            {/* Cột sản phẩm chứa hình ảnh có nút dấu nhân đỏ nhỏ để xóa và tên */}
            <div className="col-prod prod-info-cell">
              <div className="cart-img-wrap">
                <div className="remove-item-badge" onClick={() => handleRemove(item.id)}>×</div>
                <img src={item.imgUrl} alt={item.name} className="cart-item-img" />
              </div>
              <span className="cart-item-name">{item.name}</span>
            </div>

            {/* Cột giá tiền cá nhân */}
            <div className="col-price price-cell">{formatCurrency(item.price, 'VND')}</div>

            {/* Cột số lượng có khung viền và 2 nút mũi tên tăng giảm nhỏ bên phải */}
            <div className="col-qty qty-cell">
              <div className="qty-input-box">
                <span className="qty-num">{item.quantity}</span>
                <div className="qty-arrows-wrap">
                  <div className="qty-arrow-up" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>▲</div>
                  <div className="qty-arrow-down" onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>▼</div>
                </div>
              </div>
            </div>

            {/* Cột tổng tiền riêng biệt của từng món */}
            <div className="col-sub subtotal-cell">{formatCurrency(item.subtotal, 'VND')}</div>

          </div>
        ))}

      </div>

      {/* 3. HÀNG 2 NÚT HÀNH ĐỘNG HÌNH CHỮ NHẬT GIỮA TRANG */}
      <div className="cart-actions-row">
        <button className="cart-outline-btn">Return To Shop</button>
        <button className="cart-outline-btn" onClick={loadCart}>Update Cart</button>
      </div>

      {/* 4. PHẦN BỐ CỤC ĐÁY TRANG: MÃ GIẢM GIÁ & TỔNG TIỀN HỘP KHUNG */}
      <div className="cart-bottom-layout">

        {/* Cụm nhập mã giảm giá (Coupon) bên lề trái */}
        <div className="coupon-box-wrap">
          <input type="text" placeholder="Coupon Code" className="coupon-input" />
          <button className="coupon-apply-btn">Apply Coupon</button>
        </div>

        {/* Hộp tính tổng tiền (Cart Total) viền đen vuông vắn bên phải */}
        <div className="cart-total-box">
          <h3 className="total-box-title">Cart Total</h3>

          <div className="total-row-item">
            <span>Subtotal:</span>
            <span>{formatCurrency(total, 'VND')}</span>
          </div>

          <div className="total-row-item">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="total-row-item total-final">
            <span>Total:</span>
            <span>{formatCurrency(total, 'VND')}</span>
          </div>

          <button className="checkout-btn">Procees to checkout</button>
        </div>

      </div>

    </div>
            <Footer />
        </>
    )
}
export default Cart
