import './BestSelling.css';
import bestSelling1 from '../Public/image/BestSelling1.png';
import bestSelling2 from '../Public/image/BestSelling2.png';
import bestSelling3 from '../Public/image/BestSelling3.png';
import bestSelling4 from '../Public/image/BestSelling4.png';

const renderStars = (stars) => {
  let danhSachIcon = [];
  for (let i = 1; i <= 5; i++) {
    let icon = 'bx-star';
    if (i <= stars) {
      icon = 'bxs-star';
    } else if (i - 0.5 === stars) {
      icon = 'bxs-star-half';
    }
    danhSachIcon.push(<i key={i} className={`bx ${icon}`}></i>);
  }
  return danhSachIcon;
};

// Mảng dữ liệu chứa thông tin 4 sản phẩm đúng y hệt hình ảnh bạn gửi
const bestSellingProducts = [
  { id: 1, imgUrl: bestSelling1, name: 'The north coat', newPrice: '$260', oldPrice: '$360', stars: 5, rating: '(65)' },
  { id: 2, imgUrl: bestSelling2, name: 'Gucci duffle bag', newPrice: '$960', oldPrice: '$1160', stars: 5, rating: '(65)' },
  { id: 3, imgUrl: bestSelling3, name: 'RGB liquid CPU Cooler', newPrice: '$160', oldPrice: '$170', stars: 5, rating: '(65)' },
  { id: 4, imgUrl: bestSelling4, name: 'Small BookSelf', newPrice: '$360', oldPrice: '', stars: 5, rating: '(65)' }, // Cái này ko sale nên ko có giá cũ
];

const BestSelling = () => {
  return (
    <div className="best-selling-container">
      
      {/* 1. KHỐI TIÊU ĐỀ PHỤ THANH ĐỎ */}
      <div className="best-selling-sub-title">
        <div className="red-tag-rectangle"></div>
        <span className="tag-text-month">This Month</span>
      </div>

      {/* 2. KHỐI TIÊU ĐỀ LỚN + NÚT VIEW ALL ĐẨY SANG 2 BÊN CẠNH */}
      <div className="best-selling-header-wrap">
        <h2 className="best-selling-title">Best Selling Products</h2>
        {/* Làm chung nút View All vào đây theo đúng tư duy của bạn */}
        <button className="view-all-top-btn">View All</button>
      </div>

      {/* 3. VÒNG LẶP MAP TỰ ĐỘNG ĐỔ RA 4 CÁI CARD SẢN PHẨM */}
      <div className="best-selling-list">
        {bestSellingProducts.map((item) => (
          <div className="best-selling-card" key={item.id}>
            
            {/* Khung vuông chứa ảnh sản phẩm */}
            <div className="card-image-box">
              {/* Cụm nút Thả tim và Con mắt bên góc phải */}
              <div className="card-action-buttons">
                <button className="circle-icon-btn"><i className='bx bx-heart'></i></button>
                <button className="circle-icon-btn"><i className='bx bx-show'></i></button>
              </div>
              {/* Thẻ hiển thị hình ảnh */}
              <img src={item.imgUrl} alt={item.name} className="card-product-img" />
            </div>

            {/* Khối chữ thông tin bên dưới */}
            <div className="card-info-box">
              <h3 className="card-product-name">{item.name}</h3>
              
              <div className="card-price-box">
                <span className="card-new-price">{item.newPrice}</span>
                {item.oldPrice && <span className="card-old-price">{item.oldPrice}</span>}
              </div>

              <div className="card-rating-box">
                <div className="card-stars-yellow">
                  {renderStars(item.stars)}
                </div>
                <span className="card-rating-count">{item.rating}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default BestSelling;
