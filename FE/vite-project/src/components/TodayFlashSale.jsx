import './TodayFlashSale.css';
import dataset from '../data/ecommerce_dataset.json';
import { formatCurrency } from '../utils/format';
import ProductCard from './ProductCard.jsx';

const products = dataset.products;


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
        {products.slice(0, 4).map((product) => {
          const percentOff = Math.round((1 - product.sale_price / product.price) * 100);
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              title={product.name}
              badge={percentOff > 0 ? { label: `-${percentOff}%`, type: 'discount' } : undefined}
              price={formatCurrency(product.sale_price, 'VND')}
              oldPrice={formatCurrency(product.price, 'VND')}
              rating={product.rating_avg}
              reviewCount={product.rating_count}
            />
          );
        })}
      </div>

      {/* 4. NÚT XEM TẤT CẢ SẢN PHẨM, CĂN GIỮA */}
      <div className="view-all-wrap">
        <button className="view-all-btn">View All Products</button>
      </div>
    </>
  );
};

export default TodayFlashSale;
