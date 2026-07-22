import './Account.css';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
const Account = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
             <div className="account-container">
      
      {/* 1. THANH ĐƯỜNG DẪN BREADCRUMB PHÍA TRÊN CÙNG */}
      <div className="account-breadcrumb-wrap">
        <div className="breadcrumb-links">
          <span className="bc-link muted">Home</span>
          <span className="bc-separator">/</span>
          <span className="bc-link active">My Account</span>
        </div>
        <div className="welcome-message">
          Welcome! <span className="user-name">Md Rimel</span>
        </div>
      </div>

      {/* BỐ CỤC CHÍNH CHIA LÀM 2 CỘT NGANG */}
      <div className="account-main-layout">
        
        {/* 2. CỘT BÊN TRÁI: SIDEBAR MENU ĐIỀU HƯỚNG */}
        <div className="account-sidebar">
          
          <div className="menu-group">
            <h4 className="menu-title">Manage My Account</h4>
            <ul className="menu-list">
              <li className="menu-item active">My Profile</li>
              <li className="menu-item">Address Book</li>
              <li className="menu-item">My Payment Options</li>
            </ul>
          </div>

          <div className="menu-group">
            <h4 className="menu-title">My Orders</h4>
            <ul className="menu-list">
              <li className="menu-item">My Returns</li>
              <li className="menu-item">My Cancellations</li>
            </ul>
          </div>

          <div className="menu-group">
            <h4 className="menu-title single">My WishList</h4>
          </div>

        </div>

        {/* 3. CỘT BÊN PHẢI: FORM CHỈNH SỬA HỒ SƠ HÌNH HỘP TRẮNG */}
        <div className="account-form-box">
          <h3 className="form-box-title">Edit Your Profile</h3>
          
          <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
            
            {/* Hàng 1: First Name & Last Name */}
            <div className="form-row-half">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" defaultValue="Md" className="profile-input" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" defaultValue="Rimel" className="profile-input" />
              </div>
            </div>

            {/* Hàng 2: Email & Address */}
            <div className="form-row-half">
              <div className="input-group">
                <label>Email</label>
                <input type="email" defaultValue="rimel1111@gmail.com" className="profile-input" />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" defaultValue="Kingston, 5236, United State" className="profile-input" />
              </div>
            </div>

            {/* Khối thay đổi mật khẩu */}
            <div className="password-changes-section">
              <label className="section-label">Password Changes</label>
              <input type="password" placeholder="Current Password" className="profile-input full-width" />
              <input type="password" placeholder="New Password" className="profile-input full-width" />
              <input type="password" placeholder="Confirm New Password" className="profile-input full-width" />
            </div>

            {/* Khối 2 nút bấm hành động ở góc dưới */}
            <div className="form-actions-wrap">
              <button type="button" className="btn-cancel">Cancel</button>
              <button type="submit" className="btn-save">Save Changes</button>
            </div>

          </form>
        </div>

      </div>

    </div>
            <Footer />
        </>
    )
}

export default Account;