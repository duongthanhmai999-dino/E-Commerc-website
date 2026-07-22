import './PromoBanner.css'; // Kết nối với file CSS thủ công ở dưới
import promoimg from '../Public/image/promoimg.png';

const PromoBanner = () => {
  return (
    <div className="promo-banner-container">
      <div className="promo-banner-content">
        
        {/* KHỐI BÊN TRÁI: CHỨA TOÀN BỘ CHỮ VÀ VÒNG TRÒN ĐẾM THỜI GIAN */}
        <div className="promo-left-side">
          
          {/* 1. Dòng chữ Categories màu xanh lá */}
          <span className="promo-category-tag">Categories</span>
          
          {/* 2. Tiêu đề lớn màu trắng bự */}
          <h1 className="promo-main-heading">
            Enhance Your <br /> Music Experience
          </h1>
          
          {/* 3. Cụm 4 vòng tròn đếm ngược màu trắng chuẩn hình */}
          <div className="promo-countdown-wrap">
            
            <div className="circle-time-item">
              <span className="circle-num">23</span>
              <span className="circle-text">Hours</span>
            </div>

            <div className="circle-time-item">
              <span className="circle-num">05</span>
              <span className="circle-text">Days</span>
            </div>

            <div className="circle-time-item">
              <span className="circle-num">59</span>
              <span className="circle-text">Minutes</span>
            </div>

            <div className="circle-time-item">
              <span className="circle-num">35</span>
              <span className="circle-text">Seconds</span>
            </div>

          </div>
          
          {/* 4. Nút bấm Buy Now màu xanh Neon nổi bật */}
          <button className="promo-buy-btn">Buy Now!</button>

        </div>

        {/* KHỐI BÊN PHẢI: NƠI BẠN TỰ CHÈN HÌNH SẢN PHẨM VÀO */}
        <div className="promo-right-side">
          {/* Lát nữa bạn chỉ cần tải ảnh cái loa về thư mục public, rồi thay tên file ảnh vào đây là xong */}
          <img
            src={promoimg}
            alt="Promo Product"
            className="promo-product-img"
          />
        </div>

      </div>
    </div>
  );
};

export default PromoBanner;
