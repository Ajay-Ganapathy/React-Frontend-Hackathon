import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title/Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const Charts = () => {
//   const [selectedCompany, setSelectedCompany] = useState('AAPL');
//   const [hourlyData, setHourlyData] = useState([]);
//   const apiKey = '3O9DZ9X7OVZX4BW8';

//   const companies = ['AAPL', 'MSFT', 'GOOGL', 'AMZN']; // Add more companies as needed

//   const handleCompanyChange = (event) => {
//     setSelectedCompany(event.target.value);
//   };

//   useEffect(() => {
//     const fetchHourlyData = async () => {
//       try {
//         const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedCompany}&interval=60min&apikey=${apiKey}`;
//         const response = await axios.get(apiUrl);

//         // Extract relevant information from the response
//         const data = response.data['Time Series (60min)'] || {};
//         const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format

//       const hourlyPrices = Object.entries(data)
//         .filter(([timestamp]) => timestamp.startsWith(currentDate))
//         .map(([timestamp, values]) => ({
//           timestamp,
//           open: parseFloat(values['1. open']),
//           high: parseFloat(values['2. high']),
//           low: parseFloat(values['3. low']),
//           close: parseFloat(values['4. close']),
//           volume: parseInt(values['5. volume']),
//         }));

//       setHourlyData(hourlyPrices);
//       } catch (error) {
//         console.error('Error fetching hourly stock data:', error);
//       }
//     };

//     // Fetch hourly data on component mount and when the selectedCompany changes
//     fetchHourlyData();

//     // Set up interval to fetch new data every hour
//     const intervalId = setInterval(fetchHourlyData, 60 * 60 * 1000);

//     // Clear interval on component unmount to avoid memory leaks
//     return () => clearInterval(intervalId);
//   }, [apiKey, selectedCompany]);

//   return (
//     <div>
//       <h2>Hourly Stock Updates for {selectedCompany}</h2>
//       <label>
//         Select Company:
//         <select value={selectedCompany} onChange={handleCompanyChange}>
//           {companies.map((company) => (
//             <option key={company} value={company}>
//               {company}
//             </option>
//           ))}
//         </select>
//       </label>
//       <LineChart
//         width={800}
//         height={400}
//         data={hourlyData}
//         margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="timestamp" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="close" stroke="#8884d8" />
//       </LineChart>
//     </div>
//   );
// };

// export default Charts;
