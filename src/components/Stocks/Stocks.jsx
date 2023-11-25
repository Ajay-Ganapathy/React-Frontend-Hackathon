import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stocks = () => {
  const [selectedCompany, setSelectedCompany] = useState('AAPL');
  const [hourlyData, setHourlyData] = useState([]);
  const apiKey = '3O9DZ9X7OVZX4BW8';

  const companies = ['AAPL', 'MSFT', 'GOOGL', 'AMZN']; // Add more companies as needed

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  useEffect(() => {
    const fetchHourlyData = async () => {
      try {
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedCompany}&interval=60min&apikey=${apiKey}`;
        const response = await axios.get(apiUrl);

        // Extract relevant information from the response
        const data = response.data['Time Series (60min)'] || {};
        const hourlyPrices = Object.entries(data).map(([timestamp, values]) => ({
          timestamp,
          open: values['1. open'],
          high: values['2. high'],
          low: values['3. low'],
          close: values['4. close'],
          volume: values['5. volume'],
        }));

        setHourlyData(hourlyPrices);
      } catch (error) {
        console.error('Error fetching hourly stock data:', error);
      }
    };

    // Fetch hourly data on component mount and when the selectedCompany changes
    fetchHourlyData();

    // Set up interval to fetch new data every hour
    const intervalId = setInterval(fetchHourlyData, 60 * 60 * 1000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [apiKey, selectedCompany]);

  return (
    <div>
      <h2>Hourly Stock Updates for {selectedCompany}</h2>
      <label>
        Select Company:
        <select value={selectedCompany} onChange={handleCompanyChange}>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </label>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {hourlyData.map((entry) => (
            <tr key={entry.timestamp}>
              <td>{entry.timestamp}</td>
              <td>{entry.open}</td>
              <td>{entry.high}</td>
              <td>{entry.low}</td>
              <td>{entry.close}</td>
              <td>{entry.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
