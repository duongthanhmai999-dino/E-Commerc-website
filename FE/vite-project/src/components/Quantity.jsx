import "./Quantity.css";

const Quantity = ({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
}) => {
  const updateValue = (next) => {
    const clamped = Math.min(max, Math.max(min, next));
    onChange(clamped);
  };

  const handleIncrease = () => updateValue(value + 1);
  const handleDecrease = () => updateValue(value - 1);

  const handleInputChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    updateValue(digitsOnly === "" ? min : Number(digitsOnly));
  };

  const formatted = String(value).padStart(2, "0");

  return (
    <div className="quantity">
      <input
        className="quantity__input"
        type="text"
        inputMode="numeric"
        value={formatted}
        onChange={handleInputChange}
        aria-label="Quantity"
      />

      <div className="quantity__controls">
        <button
          type="button"
          className="quantity__btn"
          onClick={handleIncrease}
          disabled={value >= max}
          aria-label="Increase quantity"
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              d="M6 15 L12 9 L18 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="quantity__btn"
          onClick={handleDecrease}
          disabled={value <= min}
          aria-label="Decrease quantity"
        >
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path
              d="M6 9 L12 15 L18 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quantity;