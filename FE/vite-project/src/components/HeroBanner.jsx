import { useState } from "react";
import "./HeroBanner.css";
import herobanner from "../Public/image/herobanner.png";

const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const categories = [
    { name: "Woman's Fashion", hasArrow: true },
    { name: "Men's Fashion", hasArrow: true },
    { name: "Electronics", hasArrow: false },
    { name: "Home & Lifestyle", hasArrow: false },
    { name: "Medicine", hasArrow: false },
    { name: "Sports & Outdoor", hasArrow: false },
    { name: "Baby's & Toys", hasArrow: false },
    { name: "Groceries & Pets", hasArrow: false },
    { name: "Health & Beauty", hasArrow: false },
];


const HeroBanner = () => {
    const [activeSlide, setActiveSlide] = useState(2);

    return (
        <section className="hero-banner">
            <aside className="hero-banner__sidebar">
                <ul className="hero-banner__category-list">
                    {categories.map((category) => (
                        <li key={category.name} className="hero-banner__category-item">
                            <span>{category.name}</span>
                            {category.hasArrow && (
                                <span className="hero-banner__category-arrow" aria-hidden="true">
                                    &#8250;
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>

            <div className="hero-banner__slider">
                <div className="hero-banner__slide">
                    <div className="hero-banner__content">
                        <div className="hero-banner__brand">
                            <span className="hero-banner__brand-icon" aria-hidden="true"></span>
                            <span>iPhone 14 Series</span>
                        </div>
                        <h2 className="hero-banner__heading">Up to 10% off Voucher</h2>
                        <a href="#" className="hero-banner__cta">
                            <span className="hero-banner__cta-text">Shop Now</span>
                            <span className="hero-banner__cta-arrow" aria-hidden="true">&#8594;</span>
                        </a>
                    </div>
                    <div className="hero-banner__image-wrap">
                        <img src={herobanner} alt="iPhone 14 Series" className="hero-banner__image" />
                        <div className="hero-banner__dots">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`hero-banner__dot ${index === activeSlide ? "hero-banner__dot--active" : ""
                                        }`}
                                    onClick={() => setActiveSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;