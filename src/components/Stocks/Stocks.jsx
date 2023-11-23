import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockData = () => {
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
  {console.log(stockData)}
  return (
    <div class="container mt-5 px-2">
       <div class="mb-2 d-flex justify-content-between align-items-center">
        
        <div class="position-relative">
            <span class="position-absolute search"><i class="fa fa-search"></i></span>
            <input class="form-control w-100" placeholder="Search by order#, name..." />
        </div>
        
        <div class="px-2">
            
            <span>Filters <i class="fa fa-angle-down"></i></span>
            <i class="fa fa-ellipsis-h ms-3"></i>
        </div>
        
    </div>

    
    <div class="table-responsive">
    <table class="table table-responsive table-borderless">
        
      <thead>
        <tr class="bg-light">
          {/* <th scope="col" width="5%"><input class="form-check-input" type="checkbox" /></th> */}
          {/* <th scope="col" width="5%">#</th> */}
          <th scope="col" width="20%">Symbol:</th>
          <th scope="col" width="20%">Price:</th>
     
          <th scope="col" width="20%">Change:</th>
          <th scope="col" class="text-end" width="20%"><span>Change Percent: </span></th>
        </tr>
      </thead>
      
     {

      stockData ? <tbody>
      <td>  {stockData['01. symbol']} </td>
      <td> {stockData['05. price']} </td>
      <td> {stockData['09. change']}</td>
      <td> {stockData['10. change percent']}</td>
    </tbody> : <>
            <p className = " mt-4 text-center">Loading...</p>
        </>

     }
      
     

      </table>
  
  </div>
    
</div>
  
  );
};

export default StockData;
