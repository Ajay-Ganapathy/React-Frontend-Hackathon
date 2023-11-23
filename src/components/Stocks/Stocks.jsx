import React, { useState, useEffect } from 'react';

const StockData = () => {
  const [stockData, setStockData] = useState([]);
  const apiKey = ' 3O9DZ9X7OVZX4BW8';

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const symbols = ['AAPL', 'MSFT', 'GOOGL']; // Add more symbols as needed
        const stockPromises = symbols.map(async (symbol) => {
          const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
          const response = await fetch(apiUrl);
          const data = await response.json();

          // Extract relevant information from the response
          const stockInfo = {
            symbol: symbol,
            timeSeries: data['Time Series (5min)'] || {},
          };

          return stockInfo;
        });

        const stocks = await Promise.all(stockPromises);
        setStockData(stocks);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, [apiKey]);

  return (
    <div>
      <h2>Stock Data</h2>
      {stockData.map((stock) => (
        <div key={stock.symbol}>
          <h3>{stock.symbol}</h3>
          <ul>
            {Object.entries(stock.timeSeries).map(([timestamp, data]) => (
              <li key={timestamp}>
                {timestamp}: {data['1. open']}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StockData;
