import './CheckoutCart.css'; // Kết nối với file CSS thủ công ở dưới
import { Link } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

// Mảng dữ liệu thật chứa 2 sản phẩm nằm trong xe kéo siêu thị
const cartProducts = [
  { id: 1, imgUrl: 'https://unsplash.com', name: 'LCD Monitor', price: '$650', quantity: '01', subtotal: '$650' },
  { id: 2, imgUrl: 'https://unsplash.com', name: 'H1 Gamepad', price: '$550', quantity: '02', subtotal: '$1100' }
];

const CheckoutCart = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <div className="cart-page-container">
      
      {/* 1. THANH ĐƯỜNG DẪN BREADCRUMB NHỎ TRÊN ĐỈNH */}
      <div className="cart-breadcrumb">
        <span className="bc-item muted">Home</span>
        <span className="bc-slash">/</span>
        <span className="bc-item active">Cart</span>
      </div>

      {/* 2. BẢNG DANH SÁCH KIỂM TRA MÓN HÀNG ĐÃ MUA */}
      <div className="cart-table">
        
        {/* Hàng tiêu đề của bảng */}
        <div className="cart-table-header">
          <span className="col-prod">Product</span>
          <span className="col-price">Price</span>
          <span className="col-qty">Quantity</span>
          <span className="col-sub">Subtotal</span>
        </div>

        {/* Vòng lặp tự động đổ ra các hộp sản phẩm nền trắng đổ bóng mờ */}
        {cartProducts.map((item) => (
          <div className="cart-table-row" key={item.id}>
            
            {/* Cột sản phẩm chứa hình ảnh và nút xóa dấu nhân nhỏ */}
            <div className="col-prod prod-info-cell">
              <div className="cart-img-wrap">
                <div className="remove-item-badge">×</div>
                <img src={item.imgUrl} alt={item.name} className="cart-item-img" />
              </div>
              <span className="cart-item-name">{item.name}</span>
            </div>

            <div className="col-price price-cell">{item.price}</div>

            {/* Ô nhập số lượng có hai nút mũi tên lồng viền xám */}
            <div className="col-qty qty-cell">
              <div className="qty-input-box">
                <span className="qty-num">{item.quantity}</span>
                <div className="qty-arrows-wrap">
                  <div className="qty-arrow-up">▲</div>
                  <div className="qty-arrow-down">▼</div>
                </div>
              </div>
            </div>

            <div className="col-sub subtotal-cell">{item.subtotal}</div>

          </div>
        ))}

      </div>

      {/* 3. HÀNG 2 NÚT HÀNH ĐỘNG GIỮA TRANG */}
      <div className="cart-actions-row">
        {/* BIỂN CHỈ DẪN 1: Bọc thẻ Link ở NGOÀI nút bấm để dắt khách lùi về Trang chủ */}
        <Link to="/" className="cart-outline-link-btn">
          Return To Shop
        </Link>
        <button className="cart-outline-normal-btn">Update Cart</button>
      </div>

      {/* 4. KHỐI TỔNG TIỀN VÀ MÃ GIẢM GIÁ PHÍA ĐÁY TRANG */}
      <div className="cart-bottom-layout">
        
        {/* Khung nhập mã Coupon bên lề trái */}
        <div className="coupon-box-wrap">
          <input type="text" placeholder="Coupon Code" className="coupon-input" />
          <button className="coupon-apply-btn">Apply Coupon</button>
        </div>

        {/* Hộp Cart Total tính tiền viền đen chắc chắn bên phải lề trang */}
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

          <button className="checkout-btn">Checkout</button>
        </div>

      </div>

    </div>
      <Footer />
    </>
  );
};

export default CheckoutCart;
