import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header';
import CryptoList from '../crypto-list';
import './app.scss';
import { fetchCrypto } from '../../store/cryptoServiceSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <main>
        <h2 className="subtitle">Top 10 Cryptocurrencies In April 2022</h2>
        <CryptoList />
      </main>
    </div>
  );
}

export default App;
