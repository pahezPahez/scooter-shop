import React, { useState, useContext } from 'react';
import './ProductCard.css';
import Notification from './Notification';
import { ThemeContext } from './ThemeContext';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Скрыть уведомление через 3 секунды
    }
  };

  return (
    <div className={`product-card ${theme}`}>
      <img src={product.image} alt={product.name} />
      <h3 className="product-card__title">{product.name}</h3>
      <p className="product-card__descr">{product.description}</p>
      <div className="quantity-controls">
        <p className="quantity-controls__quantity">Количество: <span>{quantity}</span></p>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart} disabled={quantity === 0}>Добавить в корзину</button>
      {showNotification && <Notification message="Товар добавлен в корзину" />}
    </div>
  );
};

export default ProductCard;