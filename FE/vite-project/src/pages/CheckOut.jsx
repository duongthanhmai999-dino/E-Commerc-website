import { useState } from 'react';
import './CheckOut.css';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import PaymentIcons from '../components/PaymentIcons';
import monitorImg from '../Public/image/saleproduct3.png';
import gamepadImg from '../Public/image/saleproduct1.png';

const orderItems = [
    { id: 1, image: monitorImg, name: 'LCD Monitor', price: '$650' },
    { id: 2, image: gamepadImg, name: 'H1 Gamepad', price: '$1100' },
];

const CheckOut = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');

    return (
        <>
            <TopHeader />
            <MainHeader />

            <div className="checkout-container">
                <div className="checkout-breadcrumb">
                    <span className="bc-item muted">Account</span>
                    <span className="bc-slash">/</span>
                    <span className="bc-item muted">My Account</span>
                    <span className="bc-slash">/</span>
                    <span className="bc-item muted">Product</span>
                    <span className="bc-slash">/</span>
                    <span className="bc-item muted">View Cart</span>
                    <span className="bc-slash">/</span>
                    <span className="bc-item active">CheckOut</span>
                </div>

                <div className="checkout-layout">
                    {/* KHỐI TRÁI: FORM BILLING DETAILS */}
                    <div className="checkout-form-box">
                        <h1 className="checkout-title">Billing Details</h1>

                        <form className="checkout-form">
                            <div className="checkout-field">
                                <label>First Name<span className="required">*</span></label>
                                <input type="text" />
                            </div>

                            <div className="checkout-field">
                                <label>Company Name</label>
                                <input type="text" />
                            </div>

                            <div className="checkout-field">
                                <label>Street Address<span className="required">*</span></label>
                                <input type="text" />
                            </div>

                            <div className="checkout-field">
                                <label>Apartment, floor, etc. (optional)</label>
                                <input type="text" />
                            </div>

                            <div className="checkout-field">
                                <label>Town/City<span className="required">*</span></label>
                                <input type="text" />
                            </div>

                            <div className="checkout-field">
                                <label>Phone Number<span className="required">*</span></label>
                                <input type="text" />
                            </div>

                            <div className="checkout-field">
                                <label>Email Address<span className="required">*</span></label>
                                <input type="email" />
                            </div>

                            <label className="checkout-checkbox-row">
                                <input type="checkbox" defaultChecked />
                                <span className="checkout-checkbox-fake"></span>
                                Save this information for faster check-out next time
                            </label>
                        </form>
                    </div>

                    {/* KHỐI PHẢI: TÓM TẮT ĐƠN HÀNG + THANH TOÁN */}
                    <div className="checkout-summary-box">
                        {orderItems.map((item) => (
                            <div className="checkout-order-row" key={item.id}>
                                <div className="checkout-order-product">
                                    <img src={item.image} alt={item.name} className="checkout-order-img" />
                                    <span>{item.name}</span>
                                </div>
                                <span className="checkout-order-price">{item.price}</span>
                            </div>
                        ))}

                        <div className="checkout-total-row">
                            <span>Subtotal:</span>
                            <span>$1750</span>
                        </div>
                        <div className="checkout-total-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="checkout-total-row checkout-total-final">
                            <span>Total:</span>
                            <span>$1750</span>
                        </div>

                        <div className="checkout-payment-row">
                            <label className="checkout-radio-row">
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={paymentMethod === 'bank'}
                                    onChange={() => setPaymentMethod('bank')}
                                />
                                <span className="checkout-radio-fake"></span>
                                Bank
                            </label>
                            <PaymentIcons />
                        </div>

                        <label className="checkout-radio-row">
                            <input
                                type="radio"
                                name="payment"
                                checked={paymentMethod === 'cod'}
                                onChange={() => setPaymentMethod('cod')}
                            />
                            <span className="checkout-radio-fake"></span>
                            Cash on delivery
                        </label>

                        <div className="checkout-coupon-row">
                            <input type="text" placeholder="Coupon Code" className="checkout-coupon-input" />
                            <button type="button" className="checkout-coupon-btn">Apply Coupon</button>
                        </div>

                        <button type="button" className="checkout-place-order-btn">Place Order</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
};

export default CheckOut;
