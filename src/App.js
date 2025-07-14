import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <nav style={{ background: '#0070f3', padding: '10px', marginBottom: 20 }}>
          <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none', fontSize: 24, marginRight: 20 }}>Jumia 3D</Link>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: 18 }}>Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <footer style={{
          background: '#222',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
          marginTop: 40
        }}>
          &copy; {new Date().getFullYear()} Jumia 3D Clone. All rights reserved.
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;
