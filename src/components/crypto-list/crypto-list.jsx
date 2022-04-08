import React from 'react';
import { useSelector } from 'react-redux';
import CryptoItem from '../crypto-item';
import './crypto-list.scss';

function CryptoList() {
  const coins = useSelector((state) => state.crypto.crypto);

  return (
    <ul className="list">
      {coins.map((coin) => (
        <CryptoItem
          key={coin.id}
          {...coin}
        />
      ))}
    </ul>
  );
}

export default CryptoList;
