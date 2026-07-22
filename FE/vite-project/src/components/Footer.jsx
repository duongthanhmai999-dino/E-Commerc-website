import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
      <div className="footer-top">

        <div className="footer-col col-exclusive">
          <h4>Exclusive</h4>
          <h5>Subscribe</h5>
          <p>Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </div>
        </div>

        <div className="footer-col col-support">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-col col-account">
          <h4>Account</h4>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/auth">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div className="footer-col col-quicklink">
          <h4>Quick Link</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col col-app">
          <h4>Download App</h4>
          <p className="save-note">Save $3 with App New User Only</p>
          <div className="app-row">
            <div className="qr-box">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com"
                alt="QR code"
              />
            </div>
            <div className="store-badges">
              <div className="store-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M3 20.5V3.5C3 2.9 3.34 2.4 3.85 2.13L13.7 12L3.85 21.87C3.34 21.6 3 21.1 3 20.5Z" />
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" />
                  <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.89 20.18 13.16L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" />
                  <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                </svg>
                <div className="badge-text">
                  <small>GET IT ON</small>
                  <span>Google Play</span>
                </div>
              </div>
              <div className="store-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.18 7.31c1.34.07 2.28.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.5.12 2.63.72 3.37 1.79-3.1 1.86-2.55 5.98.4 7.13-.51 1.55-1.18 3.09-2.55 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.35 4.5-3.74 4.25z" />
                </svg>
                <div className="badge-text">
                  <small>Download on the</small>
                  <span>App Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.56 1.53-3.97 3.87-3.97 1.12 0 2.29.2 2.29.2v2.5h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.89h-2.39v6.98A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.9c-.77.34-1.6.57-2.46.68a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.15 12.15 0 0 1 2.9 4.6a4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 18.58a12.13 12.13 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.37-.01-.55A8.7 8.7 0 0 0 22 5.9z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.92 4.92 0 0 1-1.15 1.77 4.92 4.92 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.92 4.92 0 0 1-1.77-1.15 4.92 4.92 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.92 4.92 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94.01 9.28 0 12 0m0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84m0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
      </div>

      <div className="footer-bottom">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
