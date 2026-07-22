import './About.css';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import Services from '../components/Services';
import ourStoryImg from '../Public/image/AboutUs1.png';
import tomCruiseImg from '../Public/image/AboutUs4.png';
import emmaWatsonImg from '../Public/image/AboutUs3.png';
import willSmithImg from '../Public/image/AboutUs2.png';

const statsData = [
    { id: 1, iconClass: 'bx bxs-store', value: '10.5k', label: 'Sallers active our site', isActive: false },
    { id: 2, iconClass: 'bx bxs-dollar-circle', value: '33k', label: 'Mopnthly Produduct Sale', isActive: true },
    { id: 3, iconClass: 'bx bxs-shopping-bag', value: '45.5k', label: 'Customer active in our site', isActive: false },
    { id: 4, iconClass: 'bx bxs-wallet-alt', value: '25k', label: 'Anual gross sale in our site', isActive: false },
];

const teamData = [
    { id: 1, imgUrl: tomCruiseImg, name: 'Tom Cruise', role: 'Founder & Chairman' },
    { id: 2, imgUrl: emmaWatsonImg, name: 'Emma Watson', role: 'Managing Director' },
    { id: 3, imgUrl: willSmithImg, name: 'Will Smith', role: 'Product Designer' },
];

const About = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />
              <div className="about-page-container">
      
      {/* 1. THANH ĐƯỜNG DẪN BREADCRUMB PHÍA TRÊN CÙNG */}
      <div className="about-breadcrumb">
        <span className="bc-text muted">Home</span>
        <span className="bc-slash">/</span>
        <span className="bc-text active">About</span>
      </div>

      {/* 2. KHỐI GIỚI THIỆU LỚN: CHỮ BÊN TRÁI, ẢNH BÊN PHẢI */}
      <div className="about-intro-layout">
        <div className="about-intro-left">
          <h1 className="intro-title">Our Story</h1>
          <p className="intro-paragraph">
            Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className="intro-paragraph">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className="about-intro-right">
          {/* Ảnh hai cô gái mua sắm nền hồng chuẩn Figma */}
          <img src={ourStoryImg} alt="Our Story" className="intro-main-img" />
        </div>
      </div>

      {/* 3. KHỐI 4 Ô CON SỐ THỐNG KÊ XẾP HÀNG NGANG */}
      <div className="about-stats-list">
        {statsData.map((item) => (
          <div key={item.id} className={`stat-card-item ${item.isActive ? 'active-stat' : ''}`}>
            <div className="stat-icon-outer">
              <div className="stat-icon-inner">
                <i className={`${item.iconClass} stat-icon`}></i>
              </div>
            </div>
            <h3 className="stat-value">{item.value}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 4. KHỐI 3 THẺ NHÂN SỰ CÓ CÀI ICON MẠNG XÃ HỘI */}
      <div className="about-team-list">
        {teamData.map((member) => (
          <div key={member.id} className="team-card-item">
            <div className="team-img-box">
              <img src={member.imgUrl} alt={member.name} className="team-member-img" />
            </div>
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <div className="team-social-links">
              <a href="#twitter" className="social-icon-link"><i className='bx bxl-twitter'></i></a>
              <a href="#instagram" className="social-icon-link"><i className='bx bxl-instagram'></i></a>
              <a href="#linkedin" className="social-icon-link"><i className='bx bxl-linkedin-square'></i></a>
            </div>
          </div>
        ))}
      </div>

      {/* 5. CỤM CHẤM ĐÈN CHUYỂN SLIDE DƯỚI CÙNG (TĨNH ĐỨNG IM) */}
      <div className="about-slider-dots">
        <span className="slide-dot"></span>
        <span className="slide-dot"></span>
        <span className="slide-dot active"></span>
        <span className="slide-dot"></span>
        <span className="slide-dot"></span>
      </div>

    </div>
            <Services />
            <Footer />

        </>
    );
};

export default About;