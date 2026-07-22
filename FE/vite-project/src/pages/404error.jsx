import './404error.css';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
    <div className="error-page-container">
      
      {/* 1. THANH ĐƯỜNG DẪN BREADCRUMB PHÍA TRÊN CÙNG */}
      <div className="error-breadcrumb">
        <span className="bc-item muted">Home</span>
        <span className="bc-separator">/</span>
        <span className="bc-item active">404 Error</span>
      </div>

      {/* 2. KHỐI NỘI DUNG CHÍNH CĂN GIỮA TOÀN MÀN HÌNH */}
      <div className="error-content-wrap">
        <h1 className="error-code-title">404 Not Found</h1>
        <p className="error-desc-text">Your visited page not found. You may go home page.</p>
        
        {/* Nút bấm quay về trang chủ dùng thẻ Link chuẩn VIP */}
        <Link to="/" className="back-home-btn">
          Back to home page
        </Link>
      </div>

    </div>
    <Footer />
        </>
    );
};

export default PageNotFound;