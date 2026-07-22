import React from 'react';
import './Services.css'; // Kết nối với file CSS thủ công ở dưới

// Mảng chứa dữ liệu của 3 dịch vụ đúng y hệt hình ảnh Figma
const servicesData = [
  {
    id: 1,
    iconClass: 'bx bxs-truck', // Icon xe tải giao hàng nhanh (bx-truck ko tồn tại nên phải dùng bản solid)
    title: 'FREE AND FAST DELIVERY',
    desc: 'Free delivery for all orders over $140'
  },
  {
    id: 2,
    iconClass: 'bx bx-headphone', // Icon tai nghe hỗ trợ 24/7
    title: '24/7 CUSTOMER SERVICE',
    desc: 'Friendly 24/7 customer support'
  },
  {
    id: 3,
    iconClass: 'bx bxs-check-shield', // Icon khiên có dấu tích bảo hành hoàn tiền
    title: 'MONEY BACK GUARANTEE',
    desc: 'We return money within 30 days'
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list">
        
        {servicesData.map((item) => (
          <div className="service-item-box" key={item.id}>
            
            {/* LỒNG 2 VÒNG TRÒN ĐỂ TẠO HIỆU ỨNG BÓNG MÀU XÁM ĐEN CHUẨN FIGMA */}
            <div className="outer-circle">
              <div className="inner-circle">
                <i className={`${item.iconClass} service-icon`}></i>
              </div>
            </div>

            {/* PHẦN CHỮ TIÊU ĐỀ VÀ MÔ TẢ TRỰC TRỰC PHÍA DƯỚI */}
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Services;
