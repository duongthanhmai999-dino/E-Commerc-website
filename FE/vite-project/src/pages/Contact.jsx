import './Contact.css';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';  

const Contact = () => {
    return (
        
        <>
            <TopHeader />
            <MainHeader />
     <div className="contact-page-container">
      
      {/* 1. THANH ĐƯỜNG DẪN BREADCRUMB PHÍA TRÊN CÙNG */}
      <div className="contact-breadcrumb">
        <span className="bc-item muted">Home</span>
        <span className="bc-separator">/</span>
        <span className="bc-item active">Contact</span>
      </div>

      {/* BỐ CỤC CHÍNH CHIA LÀM 2 HỘP NẰM NGANG */}
      <div className="contact-main-layout">
        
        {/* 2. KHỐI BÊN TRÁI: HỘP THÔNG TIN LIÊN HỆ ĐỔ BÓNG MỜ */}
        <div className="contact-info-sidebar">
          
          {/* CỤM 1: CALL TO US */}
          <div className="info-group-box">
            <div className="info-title-wrap">
              <div className="icon-red-circle">
                <i className='bx bx-phone'></i> {/* Icon điện thoại Boxicons */}
              </div>
              <h3 className="info-heading">Call To Us</h3>
            </div>
            <p className="info-text">We are available 24/7, 7 days a week.</p>
            <p className="info-text highlight">Phone: +8801611112222</p>
          </div>

          {/* ĐƯỜNG KẺ NGANG MỜ PHÂN CHIA CHUẨN FIGMA */}
          <div className="info-divider"></div>

          {/* CỤM 2: WRITE TO US */}
          <div className="info-group-box">
            <div className="info-title-wrap">
              <div className="icon-red-circle">
                <i className='bx bx-envelope'></i> {/* Icon hòm thư Boxicons */}
              </div>
              <h3 className="info-heading">Write To US</h3>
            </div>
            <p className="info-text">Fill out our form and we will contact you within 24 hours.</p>
            <p className="info-text highlight">Emails: customer@exclusive.com</p>
            <p className="info-text highlight">Emails: support@exclusive.com</p>
          </div>

        </div>

        {/* 3. KHỐI BÊN PHẢI: HỘP ĐIỀN FORM GỬI TIN NHẮN */}
        <div className="contact-form-box">
          <form className="contact-actual-form" onSubmit={(e) => e.preventDefault()}>
            
            {/* Hàng trên cùng: Gồm 3 ô nhập xếp ngang hàng đều nhau */}
            <div className="form-input-row">
              <input type="text" placeholder="Your Name *" className="contact-input-field" required />
              <input type="email" placeholder="Your Email *" className="contact-input-field" required />
              <input type="tel" placeholder="Your Phone *" className="contact-input-field" required />
            </div>

            {/* Ô nhập nội dung tin nhắn bự phía dưới (Textarea) */}
            <div className="form-textarea-wrap">
              <textarea placeholder="Your Massage" className="contact-textarea-field"></textarea>
            </div>

            {/* Nút bấm gửi tin nhắn màu đỏ dạt về góc phải */}
            <div className="form-submit-wrap">
              <button type="submit" className="contact-submit-btn">Send Massage</button>
            </div>

          </form>
        </div>

      </div>

    </div>
    <Footer />
        </>
    );
}

export default Contact