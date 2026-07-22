import React, { useState } from "react";
import "./ProductCard.css";

/**
 * ProductCard
 *
 * Props:
 * - image: string (url) — product image
 * - badge: { label: string, type: "new" | "discount" } — optional top-left tag
 * - title: string
 * - price: number
 * - oldPrice?: number
 * - rating?: number (0-5)
 * - reviewCount?: number
 * - colors?: string[] — hex/css colors for swatches
 * - onAddToCart?: () => void
 * - onToggleWishlist?: (next: boolean) => void
 * - onQuickView?: () => void
 */
export default function ProductCard({
  image,
  badge,
  title,
  price,
  oldPrice,
  rating = 0,
  reviewCount,
  colors = [],
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}) {
  const [wishlisted, setWishlisted] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  const handleWishlist = () => {
    const next = !wishlisted;
    setWishlisted(next);
    onToggleWishlist?.(next);
  };

  return (
    <div className="pc-card">
      <div className="pc-media">
        {badge && (
          <span className={`pc-badge pc-badge--${badge.type}`}>
            {badge.label}
          </span>
        )}

        <div className="pc-icon-stack">
          <button
            type="button"
            className={`pc-icon-btn ${wishlisted ? "is-active" : ""}`}
            aria-label="Toggle wishlist"
            aria-pressed={wishlisted}
            onClick={handleWishlist}
          >
            <HeartIcon filled={wishlisted} />
          </button>
          <button
            type="button"
            className="pc-icon-btn"
            aria-label="Quick view"
            onClick={onQuickView}
          >
            <EyeIcon />
          </button>
        </div>

        <img className="pc-image" src={image} alt={title} loading="lazy" />

        <button type="button" className="pc-add-overlay" onClick={onAddToCart}>
          <CartIcon />
          <span>Add To Cart</span>
        </button>
      </div>

      <div className="pc-body">
        <p className="pc-title">{title}</p>

        <div className="pc-price-row">
          <span className="pc-price">${price}</span>
          {oldPrice && <span className="pc-old-price">${oldPrice}</span>}
        </div>

        {rating > 0 && (
          <div className="pc-rating">
            <Stars value={rating} />
            {reviewCount != null && (
              <span className="pc-review-count">({reviewCount})</span>
            )}
          </div>
        )}

        {colors.length > 0 && (
          <div className="pc-swatches">
            {colors.map((c, i) => (
              <button
                key={c + i}
                type="button"
                aria-label={`Select color ${c}`}
                aria-pressed={activeColor === i}
                className={`pc-swatch ${activeColor === i ? "is-active" : ""}`}
                style={{ backgroundColor: c }}
                onClick={() => setActiveColor(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Stars({ value }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <span className="pc-stars" aria-label={`Rated ${value} out of 5`}>
      {stars.map((s) => (
        <StarIcon key={s} filled={s <= Math.round(value)} />
      ))}
    </span>
  );
}

function StarIcon({ filled }) {
  return (
    <svg
      className={`pc-star ${filled ? "is-filled" : ""}`}
      viewBox="0 0 20 20"
      width="12"
      height="12"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.74 1-5.8-4.21-4.1 5.82-.85z"
      />
    </svg>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 20.5s-7-4.35-9.5-8.8C.9 8.3 2.3 4.9 5.6 4.1c2-.5 4 .3 5.1 2 .9-1.7 3.1-2.5 5.1-2 3.3.8 4.7 4.2 3.1 7.6-2.5 4.45-9.5 8.8-9.5 8.8z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.6a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}