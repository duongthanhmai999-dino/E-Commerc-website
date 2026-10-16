import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import './SearchPage.css';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatCurrency } from '../utils/format';
const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const [products, setProducts] = useState([]);
    const connect = `http://localhost:3000/apsearch?keyword=${keyword}`;
    const sendkeyword = async () => {
        try {
            const response = await axios.get(connect);
            setProducts(response.data);
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        sendkeyword()
    }, [keyword]);
    return (
        <>
            <TopHeader />
            <MainHeader />

            <div className="search-page-container">
                {/* 1. THANH TIÊU ĐỀ HỨNG THÔNG TIN */}
                <div className="search-header-row">
                    <h2 className="search-title">
                        🔍 Kết quả tìm kiếm: "{keyword}"
                    </h2>
                    <div className="search-count-box">
                        Tìm thấy <span className="search-count-num">0</span> món hàng
                    </div>
                </div>

                <div className="search-products-grid">
                    {products.length === 0 ? (
                        <div className="search-empty-message">
                            Không tìm thấy sản phẩm nào.
                        </div>
                    ) : (
                        products.map((item) => {
                            const percent = item.discount > 0
                                ? Math.round((item.discount / item.price) * 100)
                                : 0;
                            return (
                                <ProductCard
                                    key={item._id}
                                    id={item._id}
                                    image={item.thumbnail}
                                    title={item.name}
                                    price={formatCurrency(item.sale_price, "VND")}
                                    oldPrice={item.discount > 0 ? formatCurrency(item.price, "VND") : undefined}
                                    badge={percent > 0 ? { label: `-${percent}%`, type: "discount" } : undefined}
                                    rating={0}
                                />
                            );
                        })
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SearchPage;
