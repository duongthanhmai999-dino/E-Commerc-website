import Homepage from './pages/Homepagedemofigma.jsx';
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import Account from './pages/Account.jsx';
import Cart from './pages/Cart.jsx';
import Wishlist from './pages/Wishlist.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SearchPage from './pages/SearchPage.jsx';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App
    