import './TopHeader.css';
const TopHeader = () => {
  return (
<div className="top-header">
      <div className="top-header__promo">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{' '}
        <a href="#" className="top-header__shop-now">ShopNow</a>
      </div>
      <div className="top-header__lang">
        <select>
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
          
        </select>
      </div>
    </div> 
  );
}
export default TopHeader;