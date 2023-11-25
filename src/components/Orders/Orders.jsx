import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title/Title';
import { useState , useEffect } from 'react';
import axios from 'axios';
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {

  const [stockData, setStockData] = useState(props.stockData);

  const [symbol, setSymbol] = useState('AAPL'); // Default stock symbol

  {stockData && console.log(stockData['01 . symbol'])} 
  
  
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Low</TableCell>
            <TableCell>High</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Latest Trading Day</TableCell>
            <TableCell align="right">Change Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {

          stockData &&
         
          <TableRow >
            <TableCell>{stockData['01. symbol']}</TableCell>
            <TableCell>{stockData['02 . symbol']}</TableCell>
            <TableCell>{stockData['04 . low']}</TableCell>
            <TableCell>{stockData['03 . high']}</TableCell>
            <TableCell>{stockData['05 . price']}</TableCell>
            <TableCell>{stockData['07 . latest trading day']}</TableCell>
            <TableCell align="right">{stockData['10 . change percent']}</TableCell>
          </TableRow> 

          }
          
          
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}