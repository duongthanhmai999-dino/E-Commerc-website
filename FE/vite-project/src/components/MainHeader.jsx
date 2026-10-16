import './MainHeader.css';
import { Link, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';


const MainHeader = () => {
  const [keyword, setKeyword] = useState("");
 


  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
   

    if (keyword.trim() !== "") { 
    navigate(`/search?keyword=${keyword.trim()}`); 
  } else {
    navigate("/search?keyword="); 
  }
};
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
        <form onSubmit={HandleSubmit} className="navbar__search">
          <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="What are you looking for?" />
          <button type="submit" className="navbar__search-btn">
            <i className="ri-search-line navbar__icon"></i>
          </button>
        </form>
        <div className="navbar__icons_block">
          <Link to="/wishlist">
            <i className="ri-heart-line navbar__icon"></i>
          </Link>
          <Link to="/cart">
            <i className="ri-shopping-cart-line navbar__icon"></i>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default MainHeader;