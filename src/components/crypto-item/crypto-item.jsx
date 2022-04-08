import React from 'react';
import './crypto-item.scss';

function CryptoItem({ name, current_price: price }) {
  return (
    <li className="list-item">
      <span>{name}</span>
      <span>{' '}</span>
      <span>
        {price}
        {' '}
        $
      </span>
    </li>
  );
}

export default CryptoItem;
