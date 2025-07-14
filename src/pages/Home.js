import React from 'react';
import products from '../data/products';
import Product3DBox from '../components/Product3DBox';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  const addToCart = (product) => {
    // Add to cart functionality
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container">
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
            <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="button">View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
