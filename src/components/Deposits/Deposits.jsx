import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();

  const formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  return (
    <React.Fragment>
      <Title>Price</Title>
      <Typography component="p" variant="h4">
      {props.price}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {formattedDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Details
        </Link>
      </div>
    </React.Fragment>
  );
}