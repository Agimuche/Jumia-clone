import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, addToCart, decreaseQty } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0)
    return (
      <div className="container">
        <h2>Your cart is empty.</h2>
        <Link to="/" className="button">Go Shopping</Link>
      </div>
    );

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 16 }}>
            <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8 }} />
            <span style={{ flex: 1 }}>{item.name}</span>
            <button className="button" onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty}</span>
            <button className="button" onClick={() => addToCart(item)}>+</button>
            <span>₦{item.price * item.qty}</span>
            <button className="button" style={{ marginLeft: 10 }} onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ₦{total}</h3>
      <button className="button" onClick={() => navigate("/payment")}>Proceed to Payment</button>
      <button className="button" style={{ marginLeft: 10, background: "#f33" }} onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
