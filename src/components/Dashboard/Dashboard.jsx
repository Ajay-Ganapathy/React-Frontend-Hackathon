
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../ListItems/ListItems';
import Chart from '../Charts/Charts';
import Deposits from '../Deposits/Deposits';
import Orders from '../Orders/Orders';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title/Title';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Stock Management System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function Dashboard() {
  const [stockData, setStockData] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState('AAPL');
  

    const companies = ['AAPL', 'IBM' ,'MSFT', 'GOOGL', 'AMZN'];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '3O9DZ9X7OVZX4BW8';
        const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedCompany}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const data = response.data['Global Quote'];

        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [selectedCompany]);
  
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Price */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits price = {stockData &&stockData['05. price']} />
                </Paper>
              </Grid>
              {/* Recent Updates */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders data = {stockData} /> */}

                  {/* <label>
        Select Company:  
        <select value={selectedCompany} className='ml-4' onChange={handleCompanyChange}> 
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </label> */}

<Title>Select the Company</Title>

<Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedCompany}
          label="Age"
          onChange={handleCompanyChange}
        >
          {
            companies.map((company) => (
              <MenuItem value={company}>{company}</MenuItem>
            ))
          }
          
        </Select>
                  <Title>Stock Details</Title>

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
            <TableCell>{stockData['02. open']}</TableCell>
            <TableCell>{stockData['04. low']}</TableCell>
            <TableCell>{stockData['03. high']}</TableCell>
            <TableCell>{stockData['05. price']}</TableCell>
            <TableCell>{stockData['07. latest trading day']}</TableCell>
            <TableCell align="right">{stockData['10. change percent']}</TableCell>
          </TableRow> 

          }
          
          
        </TableBody>
      </Table>

      
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}