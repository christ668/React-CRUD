import React from 'react';
import { Card } from 'semantic-ui-react';
//import ContactCard from './employee-card';
import { Link } from 'react-router-dom';
import { Button, Icon, TableDetail } from 'semantic-ui-react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import EmployeeTable from './employee-table';


export default function EmployeeList({ employees, deleteEmployee }) {

  //injectTapEventPlugin();
  const cards = () => {
    return <Table>
      <TableHeader>
        <TableRow>
        <TableHeaderColumn>EmployeeID</TableHeaderColumn>
        <TableHeaderColumn>name</TableHeaderColumn>
        <TableHeaderColumn>gender</TableHeaderColumn>
        <TableHeaderColumn>dateOfBirth</TableHeaderColumn>
        <TableHeaderColumn>PlaceOfBirth</TableHeaderColumn>
        <TableHeaderColumn>Marital</TableHeaderColumn>
        <TableHeaderColumn>Remark</TableHeaderColumn>
        <TableHeaderColumn>update</TableHeaderColumn>
        <TableHeaderColumn>delete</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
      {employees.map(employee => {
        return (
          
            <TableRow>
            <TableRowColumn>{employee.employeeID}</TableRowColumn>
            <TableRowColumn>{employee.name}</TableRowColumn>
            <TableRowColumn >{employee.gender}</TableRowColumn>
            <TableRowColumn >{employee.DateOfBirth}</TableRowColumn>
            <TableRowColumn >{employee.PlaceOfBirth}</TableRowColumn>
            <TableRowColumn>{employee.MaritalStatus}</TableRowColumn>
            <TableRowColumn >{employee.Remark}</TableRowColumn>
            <TableRowColumn >
              <Link to={`/employees/edit/${employee.employeeID}`} className="ui basic button green">Edit</Link>
            </TableRowColumn>
            <TableRowColumn >
              <Button basic color="red" onClick={() => {
                confirmAlert({
                  title: 'Confirm to delete',
                  message: 'Are you sure to do this.',
                  buttons: [
                    {
                      label: 'Yes',
                      onClick: () => deleteEmployee(employee.employeeID)
                    },
                    {
                      label: 'No'
                    }
                  ]
                })
              }
              }
              >Delete</Button>
            </TableRowColumn>
            </TableRow>
          
          // <ContactCard key={employee.name} employee={employee} deleteEmployee={deleteEmployee}/>
        )
      })
      } </TableBody></Table>
  }

  return (
    <MuiThemeProvider>
      {cards()}
    </MuiThemeProvider>
  )


}

//////////////////////////////////////////
//ganti return()
// return (
//   // <Card.Group>
//   <table border="1">
//     <th>
//       <td>EmployeeID</td>
//       <td>EmployeeName</td>
//       <td>Gender</td>
//       <td>DateOfBirth</td>
//       <td>Address</td>
//       <td>MaritalStatus</td>
//       <td>Remark</td>
//       <td></td>

//      {
//        cards()
//      }
//      </th>
//   </table>
// ) 