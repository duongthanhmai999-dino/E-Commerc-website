import './TodayFlashSale.css';
import saleproduct1 from '../Public/image/saleproduct1.png';
import saleproduct2 from '../Public/image/saleproduct2.png';
import saleproduct3 from '../Public/image/saleproduct3.png';
import saleproduct4 from '../Public/image/saleproduct4.png';

const products = [
  { id: 1, name: 'HAVIT HV-G92 Gamepad', newPrice: '$120', oldPrice: '$160', discount: '-40%', stars: 5, reviews: 88, image: saleproduct1 },
  { id: 2, name: 'AK-900 Wired Keyboard', newPrice: '$960', oldPrice: '$1160', discount: '-35%', stars: 4, reviews: 75, image: saleproduct2 },
  { id: 3, name: 'IPS LCD Gaming Monitor', newPrice: '$370', oldPrice: '$400', discount: '-30%', stars: 5, reviews: 99, image: saleproduct3 },
  { id: 4, name: 'S-Series Comfort Chair', newPrice: '$375', oldPrice: '$400', discount: '-25%', stars: 4.5, reviews: 99, image: saleproduct4 },
];

const renderStars = (stars) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    let icon = 'bx-star';
    if (starValue <= stars) {
      icon = 'bxs-star';
    } else if (starValue - 0.5 === stars) {
      icon = 'bxs-star-half';
    }
    return <i key={index} className={`bx ${icon}`}></i>;
  });
};

const TodayFlashSale = () => {
  return (
    <>
      <div className="flash-sale-container">
        <div className="section-title-wrap">
          <div className="red-rectangle"></div>
          <span className="title-text">Today's</span>
        </div>
      </div>

      <div className="flash-sale-header-wrap">

        {/* 1. TIÊU ĐỀ LỚN BÊN TRÁI */}
        <h2 className="main-title">Flash Sales</h2>

        {/* 2. CỤM ĐỒNG HỒ ĐẾM NGƯỢC BÊN PHẢI (ĐỨNG IM THEO FIGMA) */}
        <div className="countdown-container">

          {/* KHỐI NGÀY */}
          <div className="time-block">
            <span className="time-label">Days</span>
            <span className="time-number">03</span>
          </div>

          <span className="time-colon">:</span>

          {/* KHỐI GIỜ */}
          <div className="time-block">
            <span className="time-label">Hours</span>
            <span className="time-number">23</span>
          </div>

          <span className="time-colon">:</span>

          {/* KHỐI PHÚT */}
          <div className="time-block">
            <span className="time-label">Minutes</span>
            <span className="time-number">19</span>
          </div>

          <span className="time-colon">:</span>

          {/* KHỐI GIÂY */}
          <div className="time-block">
            <span className="time-label">Seconds</span>
            <span className="time-number">56</span>
          </div>
        </div>
      </div>

      {/* 3. DÃY CARD SẢN PHẨM NẰM DƯỚI ĐỒNG HỒ */}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-box">
              <span className="discount-tag">{product.discount}</span>
              <div className="action-buttons">
                <button className="icon-btn"><i className="bx bx-heart"></i></button>
                <button className="icon-btn"><i className="bx bx-show"></i></button>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <button className="add-to-cart-btn">Add To Cart</button>
            </div>
            <div className="info-box">
              <h3 className="product-name">{product.name}</h3>
              <div className="price-box">
                <span className="new-price">{product.newPrice}</span>
                <span className="old-price">{product.oldPrice}</span>
              </div>
              <div className="rating-box">
                <div className="stars">
                  {renderStars(product.stars)}
                </div>
                <span className="rating-count">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. NÚT XEM TẤT CẢ SẢN PHẨM, CĂN GIỮA */}
      <div className="view-all-wrap">
        <button className="view-all-btn">View All Products</button>
      </div>
    </>
  );
};

export default TodayFlashSale;
