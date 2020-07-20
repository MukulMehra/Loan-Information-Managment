import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2020', 'Varshang Shrimali', 'Udaipur, Rajasthan', 'VISA ⠀•••• 3719', 60000.44),
  createData(1, '16 Mar, 2020', 'Mukul Mehra', 'Mumbai, Maharashtra', 'VISA ⠀•••• 2574', 54120.99),
  createData(2, '16 Mar, 2020', 'Khushi Gupta', 'Udaipur, Rajasthan', 'Mastar⠀•••• 1253', 25423.81),
  createData(3, '16 Mar, 2020', 'Bharat shrotriya', 'Udaipur, Rajasthan', 'Mastar ⠀•••• 2000', 654481.39),
  createData(4, '15 Mar, 2020', 'Ajay Sharma', 'Udaipur, Rajasthan', 'VISA ⠀•••• 5919', 212457.79),
  createData(4, '15 Mar, 2020', 'Shobha Saraswat', 'Udaipur, Rajasthan', 'VISA ⠀•••• 5919', 212457.79)
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Payments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Loan Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
