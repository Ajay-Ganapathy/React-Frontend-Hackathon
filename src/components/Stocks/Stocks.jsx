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

export default Stocks;

// // src/components/Product.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Stocks = ({ product }) => {
//   const [stockData, setStockData] = useState(null);

//   useEffect(() => {
//     // Fetch stock data from the API based on the product name or symbol
//     const fetchStockData = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${product.name}&apikey='3O9DZ9X7OVZX4BW8`
//         );
//         setStockData(response.data);
//       } catch (error) {
//         console.error('Error fetching stock data:', error);
//       }
//     };

//     fetchStockData();
//   }, [product.name]);

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>Description: {product.description}</p>
//       <p>Price: ${product.price}</p>
//       <p>Quantity: {product.quantity}</p>
//       <p>Categories: {product.categories.join(', ')}</p>

//       {stockData && (
//         <div>
//           <h4>Stock Data</h4>
//           {/* Display relevant stock data here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Stocks;

