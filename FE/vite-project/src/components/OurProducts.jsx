import './OurProducts.css';
import ourproducts1 from '../Public/image/ourproducts1.png';
import ourproducts2 from '../Public/image/ourproducts2.png';
import ourproducts3 from '../Public/image/ourproducts3.png';
import ourproducts4 from '../Public/image/ourproducts4.png';
import ourproducts5 from '../Public/image/ourproducts5.png';
import ourproducts6 from '../Public/image/ourproducts6.png';
import ourproducts7 from '../Public/image/ourproducts7.png';
import ourproducts8 from '../Public/image/ourproducts8.png';

const products = [
  { id: 1, image: ourproducts1, name: 'Breed Dry Dog Food', price: '$100', stars: 3, reviews: 35 },
  { id: 2, image: ourproducts2, name: 'CANON EOS DSLR Camera', price: '$360', stars: 4, reviews: 95 },
  { id: 3, image: ourproducts3, name: 'ASUS FHD Gaming Laptop', price: '$700', stars: 5, reviews: 325 },
  { id: 4, image: ourproducts4, name: 'Curology Product Set', price: '$500', stars: 4, reviews: 145 },
  { id: 5, image: ourproducts5, name: 'Kids Electric Car', price: '$960', stars: 5, reviews: 65, isNew: true, colors: ['#db4444', '#db4444'] },
  { id: 6, image: ourproducts6, name: 'Jr. Zoom Soccer Cleats', price: '$1160', stars: 5, reviews: 35, colors: ['#fbd90f', '#db4444'] },
  { id: 7, image: ourproducts7, name: 'GP11 Shooter USB Gamepad', price: '$660', stars: 4.5, reviews: 55, isNew: true, colors: ['#000000', '#db4444'] },
  { id: 8, image: ourproducts8, name: 'Quilted Satin Jacket', price: '$660', stars: 4.5, reviews: 55, colors: ['#0f3a35', '#db4444'] },
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

const OurProducts = () => {
  return (
    <div className="our-products-container">

      {/* 1. KHỐI TIÊU ĐỀ PHỤ THANH ĐỎ */}
      <div className="our-products-sub-title">
        <div className="our-products-red-tag"></div>
        <span className="our-products-tag-text">Our Products</span>
      </div>

      {/* 2. TIÊU ĐỀ LỚN + 2 NÚT MŨI TÊN ĐIỀU HƯỚNG */}
      <div className="our-products-header-wrap">
        <h2 className="our-products-title">Explore Our Products</h2>
        <div className="our-products-nav-arrows">
          <button className="our-products-arrow-btn"><i className='bx bx-left-arrow-alt'></i></button>
          <button className="our-products-arrow-btn"><i className='bx bx-right-arrow-alt'></i></button>
        </div>
      </div>

      {/* 3. LƯỚI 8 SẢN PHẨM, 4 CỘT x 2 HÀNG */}
      <div className="our-products-grid">
        {products.map((product) => (
          <div className="our-products-card" key={product.id}>
            <div className="our-products-image-box">
              {product.isNew && <span className="our-products-new-badge">NEW</span>}
              <div className="our-products-action-buttons">
                <button className="our-products-icon-btn"><i className='bx bx-heart'></i></button>
                <button className="our-products-icon-btn"><i className='bx bx-show'></i></button>
              </div>
              <img src={product.image} alt={product.name} className="our-products-img" />
              <button className="our-products-add-to-cart-btn">Add To Cart</button>
            </div>

            <div className="our-products-info-box">
              <h3 className="our-products-name">{product.name}</h3>
              <span className="our-products-price">{product.price}</span>
              <div className="our-products-rating-box">
                <div className="our-products-stars">
                  {renderStars(product.stars)}
                </div>
                <span className="our-products-rating-count">({product.reviews})</span>
              </div>
              {product.colors && (
                <div className="our-products-color-swatches">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`our-products-color-dot ${index === 0 ? 'our-products-color-dot--active' : ''}`}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 4. NÚT XEM TẤT CẢ SẢN PHẨM, CĂN GIỮA */}
      <div className="our-products-view-all-wrap">
        <button className="our-products-view-all-btn">View All Products</button>
      </div>

    </div>
  );
};

export default OurProducts;
