import './MainHeader.css';
import { Link } from 'react-router-dom';
const MainHeader = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Exclusive</div>

      <ul className="navbar__links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/auth">Sign Up</Link></li>
      </ul>

      <div className="navbar__actions">
        <div className="navbar__search">
          <input type="text" placeholder="What are you looking for?" />
          <i class="ri-search-line navbar__icon"></i>
        </div>
        <div className="navbar__icons_block">
          <i className="ri-heart-line navbar__icon"></i>
          <i className="ri-shopping-cart-line navbar__icon"></i>
        </div>

      </div>
    </nav>
  );
};

export default MainHeader;