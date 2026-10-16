import './Wishlist.css';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import JustForYou from '../components/JustForYou';

const wishlistProducts = [];

const Wishlist = () => {
    return (
        <>
            <TopHeader />
            <MainHeader />

            <div className="wishlist-container">
                <div className="wishlist-header-row">
                    <h2 className="wishlist-title">Wishlist ({wishlistProducts.length})</h2>
                    <button className="wishlist-move-all-btn">Move All To Bag</button>
                </div>

                <div className="wishlist-grid">
                    {wishlistProducts.length === 0 ? (
                        <div className="wishlist-empty-message">Bạn chưa thêm sản phẩm yêu thích nào</div>
                    ) : wishlistProducts.map((product) => (
                        <div className="wishlist-card" key={product.id}>
                            <div className="wishlist-image-box">
                                {product.discount && (
                                    <span className="wishlist-discount-tag">{product.discount}</span>
                                )}
                                <button className="wishlist-delete-btn">
                                    <i className="bx bx-trash"></i>
                                </button>
                                <img src={product.imgUrl} alt={product.name} className="wishlist-img" />
                                <button className="wishlist-add-to-cart-btn">
                                    <i className="bx bx-cart"></i>
                                    Add To Cart
                                </button>
                            </div>

                            <div className="wishlist-info-box">
                                <h3 className="wishlist-name">{product.name}</h3>
                                <div className="wishlist-price-box">
                                    <span className="wishlist-new-price">{product.newPrice}</span>
                                    {product.oldPrice && (
                                        <span className="wishlist-old-price">{product.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <JustForYou />
            <Footer />
        </>
    )
}

export default Wishlist;
