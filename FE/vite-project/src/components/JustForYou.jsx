import './JustForYou.css';
import laptopImg from '../Public/image/ourproducts3.png';
import monitorImg from '../Public/image/saleproduct3.png';
import gamepadImg from '../Public/image/saleproduct1.png';
import keyboardImg from '../Public/image/saleproduct2.png';

const renderStars = (stars) => {
    return Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        let icon = 'bx-star';
        if (starValue <= stars) {
            icon = 'bxs-star';
        } else if (starValue - 0.5 === stars) {
            icon = 'bxs-star-half';
        }
        return <i key={index} className={`bx ${icon}`}></i>;
    });
};

const justForYouProducts = [
    { id: 1, image: laptopImg, name: 'ASUS FHD Gaming Laptop', newPrice: '$960', oldPrice: '$1160', discount: '-35%', stars: 5, reviews: 65 },
    { id: 2, image: monitorImg, name: 'IPS LCD Gaming Monitor', newPrice: '$1160', oldPrice: '', stars: 5, reviews: 65 },
    { id: 3, image: gamepadImg, name: 'HAVIT HV-G92 Gamepad', newPrice: '$560', oldPrice: '', isNew: true, stars: 5, reviews: 65 },
    { id: 4, image: keyboardImg, name: 'AK-900 Wired Keyboard', newPrice: '$200', oldPrice: '', stars: 5, reviews: 65 },
];

const JustForYou = () => {
    return (
        <div className="jfy-container">
            <div className="jfy-header-row">
                <div className="jfy-sub-title">
                    <div className="jfy-red-tag"></div>
                    <span className="jfy-tag-text">Just For You</span>
                </div>
                <button className="jfy-see-all-btn">See All</button>
            </div>

            <div className="jfy-grid">
                {justForYouProducts.map((product) => (
                    <div className="jfy-card" key={product.id}>
                        <div className="jfy-image-box">
                            {product.discount && <span className="jfy-discount-tag">{product.discount}</span>}
                            {product.isNew && <span className="jfy-new-badge">NEW</span>}
                            <button className="jfy-icon-btn"><i className='bx bx-show'></i></button>
                            <img src={product.image} alt={product.name} className="jfy-img" />
                            <button className="jfy-add-to-cart-btn">
                                <i className="bx bx-cart"></i>
                                Add To Cart
                            </button>
                        </div>

                        <div className="jfy-info-box">
                            <h3 className="jfy-name">{product.name}</h3>
                            <div className="jfy-price-box">
                                <span className="jfy-new-price">{product.newPrice}</span>
                                {product.oldPrice && <span className="jfy-old-price">{product.oldPrice}</span>}
                            </div>
                            <div className="jfy-rating-box">
                                <div className="jfy-stars">
                                    {renderStars(product.stars)}
                                </div>
                                <span className="jfy-rating-count">({product.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JustForYou;
