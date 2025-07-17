import React from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  const addToCart = async () => {
    // You can implement a global cart or show a modal here
    const res = await fetch("http://localhost:8001/api/cart")
    
    console.log(await res.json()) 
  };

  return (
    <div className="container">
      <div className="cart-top-right">
        <button className="button" onClick={addToCart}>Add to Cart</button>
      </div>
      <h1>Jumia 3D Clone</h1>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h2>{product.name}</h2>
            <p>₦{product.price}</p>
            <button className="button" onClick={() => alert(`Added ${product.name} to cart`)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="button">View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
