import './BestSelling.css';
import dataset from '../data/ecommerce_dataset.json';
import { formatCurrency } from '../utils/format';
import ProductCard from './ProductCard.jsx';

const products = dataset.products;

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
        {products.slice(4, 8).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            title={product.name}
            price={formatCurrency(product.price, 'VND')}
            rating={product.rating_avg}
            reviewCount={product.rating_count}
          />
        ))}
      </div>

    </div>
  );
};

export default BestSelling;
