import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import Product3DBox from '../components/Product3DBox';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div>Product not found</div>;
  return (
    <div className="container">
      <Link to="/" className="button" style={{ marginBottom: 20 }}>Back to Home</Link>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <img src={product.image} alt={product.name} className="product-image" style={{ maxWidth: 350 }} />
        <div>
          <h1>{product.name}</h1>
          <Product3DBox image={product.image} />
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>₦{product.price}</p>
          <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;