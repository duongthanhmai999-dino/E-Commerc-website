import './OurProducts.css';
import dataset from '../data/ecommerce_dataset.json';
import { formatCurrency } from '../utils/format';
import ProductCard from './ProductCard.jsx';

const products = dataset.products;

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
        {products.slice(8, 20).map((product) => (
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

      {/* 4. NÚT XEM TẤT CẢ SẢN PHẨM, CĂN GIỮA */}
      <div className="our-products-view-all-wrap">
        <button className="our-products-view-all-btn">View All Products</button>
      </div>

    </div>
  );
};

export default OurProducts;
