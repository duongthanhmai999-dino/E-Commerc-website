import './Cart.css';
import Topheader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import monitorImg from '../Public/image/saleproduct3.png';
import gamepadImg from '../Public/image/saleproduct1.png';

const cartProducts = [
    { id: 1, imgUrl: monitorImg, name: 'LCD Monitor', price: '$650', quantity: 1, subtotal: '$650' },
    { id: 2, imgUrl: gamepadImg, name: 'H1 Gamepad', price: '$550', quantity: 2, subtotal: '$1100' },
];

const Cart = () => {
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

        {/* Vòng lặp map tự động đổ ra các hàng sản phẩm nền trắng đổ bóng mờ */}
        {cartProducts.map((item) => (
          <div className="cart-table-row" key={item.id}>
            
            {/* Cột sản phẩm chứa hình ảnh có nút dấu nhân đỏ nhỏ để xóa và tên */}
            <div className="col-prod prod-info-cell">
              <div className="cart-img-wrap">
                <img src={item.imgUrl} alt={item.name} className="cart-item-img" />
              </div>
              <span className="cart-item-name">{item.name}</span>
            </div>

            {/* Cột giá tiền cá nhân */}
            <div className="col-price price-cell">{item.price}</div>

            {/* Cột số lượng có khung viền và 2 nút mũi tên tăng giảm nhỏ bên phải */}
            <div className="col-qty qty-cell">
              <div className="qty-input-box">
                <span className="qty-num">{item.quantity}</span>
                <div className="qty-arrows-wrap">
                  <div className="qty-arrow-up">▲</div>
                  <div className="qty-arrow-down">▼</div>
                </div>
              </div>
            </div>

            {/* Cột tổng tiền riêng biệt của từng món */}
            <div className="col-sub subtotal-cell">{item.subtotal}</div>

          </div>
        ))}

      </div>

      {/* 3. HÀNG 2 NÚT HÀNH ĐỘNG HÌNH CHỮ NHẬT GIỮA TRANG */}
      <div className="cart-actions-row">
        <button className="cart-outline-btn">Return To Shop</button>
        <button className="cart-outline-btn">Update Cart</button>
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
            <span>$1750</span>
          </div>
          
          <div className="total-row-item">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          
          <div className="total-row-item total-final">
            <span>Total:</span>
            <span>$1750</span>
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