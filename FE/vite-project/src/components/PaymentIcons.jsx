import "./PaymentIcons.css";

const PAYMENT_METHODS = [
  {
    name: "Bkash",
    render: () => (
      <span className="payment-icons__logo payment-icons__logo--bkash">
        <span className="payment-icons__bkash-text">
          <span className="payment-icons__b-low">b</span>Kash
        </span>
        <span className="payment-icons__bkash-badge">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
            <path d="M3 12 L14 4 L11 11 L21 11 L10 20 L13 13 Z" />
          </svg>
        </span>
      </span>
    ),
  },
  {
    name: "Visa",
    render: () => (
      <span className="payment-icons__logo payment-icons__logo--visa">
        <span className="payment-icons__visa-text">VISA</span>
      </span>
    ),
  },
  {
    name: "MasterCard",
    render: () => (
      <span className="payment-icons__logo payment-icons__logo--mastercard">
        <span className="payment-icons__mc-circles">
          <span className="payment-icons__mc-circle payment-icons__mc-circle--red" />
          <span className="payment-icons__mc-circle payment-icons__mc-circle--yellow" />
        </span>
        <span className="payment-icons__mc-text">MasterCard</span>
      </span>
    ),
  },
  {
    name: "Nagad",
    render: () => (
      <span className="payment-icons__logo payment-icons__logo--nagad">
        <svg
          className="payment-icons__nagad-icon"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path
            d="M12 3 C7 3 3 7 3 12 C3 17 7 21 12 21 C10 19 9 15.5 9 12 C9 8.5 10 5 12 3 Z"
            fill="#F26522"
          />
          <path
            d="M12 3 C16 4.5 18 8 18 12 C18 16 16 19.5 12 21 C15 20 17 16.5 17 12 C17 7.5 15 4 12 3 Z"
            fill="#8DC63F"
          />
        </svg>
        <span className="payment-icons__nagad-text">নগদ</span>
      </span>
    ),
  },
];

const PaymentIcons = ({ title = "" }) => {
  return (
    <div className="payment-icons">
      {title && <span className="payment-icons__title">{title}</span>}

      <ul className="payment-icons__list">
        {PAYMENT_METHODS.map((method) => (
          <li
            key={method.name}
            className="payment-icons__item"
            title={method.name}
            aria-label={method.name}
          >
            {method.render()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentIcons;