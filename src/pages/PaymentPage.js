import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { cart, clearCart } = useCart();
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaid(true);
    clearCart();
  };

  if (paid)
    return (
      <div className="container">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
        <Link to="/" className="button">Back to Home</Link>
      </div>
    );

  if (cart.length === 0)
    return (
      <div className="container">
        <h2>No items to pay for.</h2>
        <Link to="/" className="button">Go Shopping</Link>
      </div>
    );

  return (
    <div className="container">
      <h2>Payment</h2>
      <p>Total: <strong>₦{total}</strong></p>
      <form onSubmit={handlePayment} style={{ maxWidth: 400 }}>
        <input type="text" placeholder="Card Number" required className="button" style={{ width: "100%", marginBottom: 10, color: "#333", background: "#fff" }} />
        <input type="text" placeholder="Expiry Date" required className="button" style={{ width: "100%", marginBottom: 10, color: "#333", background: "#fff" }} />
        <input type="text" placeholder="CVV" required className="button" style={{ width: "100%", marginBottom: 10, color: "#333", background: "#fff" }} />
        <button type="submit" className="button" style={{ width: "100%" }}>Pay Now</button>
      </form>
      <button className="button" style={{ marginTop: 10 }} onClick={() => navigate("/cart")}>Back to Cart</button>
    </div>
  );
};

export default PaymentPage;