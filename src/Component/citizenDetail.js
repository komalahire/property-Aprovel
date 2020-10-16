import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    
  },

  Title:{
      textAlign:'center',
      marginTop:'2%'

  },
  TableCell:{
fontSize:30
  }
});


export default function CitizenDetail({userData}) {
  const classes = useStyles();

  return (
      <Container  >
    <Typography  className={classes.Title} variant="h4">Property Details</Typography>

    <TableContainer component={Paper} style={{marginTop:'2%'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >PTIN</TableCell>
            <TableCell align="center">Owner Name</TableCell>
            <TableCell align="center">Financial Year</TableCell>
            <TableCell align="center">Last_Payment_Date</TableCell>
            <TableCell align="center">Property Type</TableCell>
            <TableCell align="center">House No.</TableCell>
            <TableCell align="center">Zone</TableCell>
            <TableCell align="center">Total_Paid_Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((item, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {item.PTIN}
              </TableCell>
              <TableCell align="center">{item.Owner_Name }</TableCell>
              <TableCell align="center">{item.Financial_Year  }</TableCell>
              <TableCell align="center">{item.Last_Payment_Date }</TableCell>
              <TableCell align="center">{item.Property_type   }</TableCell>
              <TableCell align="center">{item.House_No     }</TableCell>
              <TableCell align="center">{item.Zone }</TableCell>
              <TableCell align="center">{item.Total_Paid_Amount }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}














// import React, {useState } from "react";

// export default function CitizenDetail({userData}) {
//     console.log(userData ,"RRRRRRRRRRRRRRRRRRRashmi")
//     return (
//         <React.Fragment>
//          <div>Citizen Details</div>
//              <table>

// <thead>
//     <tr>
//         <th scope="col">PTIN</th>
//         <th scope="col ">Owner Name</th>
//         <th scope="col">Financial Year</th>
//         <th scope="col"> Last_Payment_Date</th>
//         <th scope="col">Property Type</th>
//         <th scope="col">House No. </th>
//         <th scope="col">Zone </th>
//         <th scope="col">Total_Paid_Amount </th>
//     </tr>
// </thead>
// <tbody >
//     {userData.map((item, i) => {
//         return (<tr key={i}>
//             <td data-label="Name">{item.PTIN}</td>
//             {/* <td data-label="Entry Date">{item.enterDate}</td>
//             <td data-label="Phone no.">{item.mobile_number}</td>
//             <td data-label="Exit Date">{item.exitDate}</td> */}
//         </tr>
//         )

//     })}
// </tbody>
// </table>
//         </React.Fragment>
     
//     )
// }