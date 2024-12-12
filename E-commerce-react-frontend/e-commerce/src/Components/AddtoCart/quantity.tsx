import React, { useState } from 'react';

import "../../assets/quantity.css";

interface QuantitySelectorProps {
  init_quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ init_quantity, onQuantityChange }) => {

  const decreaseQuantity = () => {
    if (init_quantity > 1) {
      onQuantityChange(init_quantity - 1);
    }
  };

  const increaseQuantity = () => {
    onQuantityChange(init_quantity + 1);
  };

  return (
    <div className='functional'>
      <button className='change' onClick={decreaseQuantity}>
        <svg width="10" height="10" viewBox="0 0 10 10">
          <line x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" />
        </svg>
      </button>
      <span id='qty'>{init_quantity}</span>
      <button className='change' onClick={increaseQuantity}>
        <svg width="10" height="10" viewBox="0 0 10 10">
          <line x1="1" y1="5" x2="9" y2="5" stroke="black" strokeWidth="2" />
          <line x1="5" y1="1" x2="5" y2="9" stroke="black" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;
