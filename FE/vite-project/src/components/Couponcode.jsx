import "./CouponCode.css";

const CouponCode = ({ onApply = () => {} }) => {
  let inputRef;

  const handleApply = () => {
    const value = inputRef.value.trim();
    if (value === "") return;
    onApply(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleApply();
  };

  return (
    <div className="coupon-code">
      <input
        type="text"
        className="coupon-code__input"
        placeholder="Coupon Code"
        ref={(el) => (inputRef = el)}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        className="coupon-code__button"
        onClick={handleApply}
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponCode;