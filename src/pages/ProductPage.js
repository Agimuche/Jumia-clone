import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>₦{product.price}</p>
      <p>{product.description}</p>
      <button className="button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;

