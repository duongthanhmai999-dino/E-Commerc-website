import './CategoryPhone.css'; // Kết nối với file CSS thủ công ở dưới

// Mảng danh sách các danh mục (Mock Data để lặp qua cho lẹ)
const categoriesData = [
  { id: 1, iconClass: 'bx bx-mobile-alt', name: 'Phones', isActive: false },
  { id: 2, iconClass: 'bx bx-laptop', name: 'Computers', isActive: false },
  { id: 3, iconClass: 'bx bxs-watch', name: 'SmartWatch', isActive: false },
  { id: 4, iconClass: 'bx bx-camera', name: 'Camera', isActive: false },
  { id: 5, iconClass: 'bx bx-headphone', name: 'HeadPhones', isActive: false },
  { id: 6, iconClass: 'bx bx-joystick', name: 'Gaming', isActive: false },
];

const CategorySection = () => {
  return (
    <div className="category-section-container">
      
      {/* 1. KHỐI TIÊU ĐỀ PHỤ (Dùng lại cấu trúc SectionTitle đã học) */}
      <div className="category-sub-title">
        <div className="red-tag"></div>
        <span className="tag-text">Categories</span>
      </div>

      {/* 2. KHỐI TIÊU ĐỀ LỚN */}
      <div className="category-header-wrap">
        <h2 className="section-main-title">Browse By Category</h2>
      </div>

      {/* 3. DANH SÁCH CÁC Ô DANH MỤC HÌNH VUÔNG */}
      <div className="category-list">
        {categoriesData.map((item) => (
          <div 
            key={item.id} 
            className={`category-item-card ${item.isActive ? 'active-card' : ''}`}
          >
            {/* Gọi icon tương ứng từ Boxicons */}
            <i className={`${item.iconClass} category-icon`}></i>
            <span className="category-name">{item.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CategorySection;
