import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stocks = () => {
  const [stockData, setStockData] = useState(null);
  const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '3O9DZ9X7OVZX4BW8';
        const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const data = response.data['Global Quote'];

        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <div>
      <h2>Stock Data</h2>
      {stockData ? (
        <div>
          <p>Symbol: {stockData['01. symbol']}</p>
          <p>Price: {stockData['05. price']}</p>
          <p>Change: {stockData['09. change']}</p>
          <p>Change Percent: {stockData['10. change percent']}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stocks;
