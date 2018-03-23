import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
//import employeeNotif from './employee-notif';




export default function EmployeeCard({employee, deleteEmployee}) {

  return (
    <Card>
    <Card.Content>
      <Card.Header>
        <Icon name='user outline'/> {employee.name}
      </Card.Header>
      <Card.Description>
        <p><Icon /> {employee.employeeID}</p>
        <p><Icon /> {employee.gender}</p>
        <p><Icon /> {employee.DateOfBirth}</p>
        <p><Icon /> {employee.PlaceOfBirth}</p>
        <p><Icon /> {employee.MaritalStatus}</p>
        <p><Icon /> {employee.Remark}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Link to={`/employees/edit/${employee.employeeID}`} className="ui basic button green">Edit</Link>
        
        <Button basic color="red" onClick={() =>{
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
                      //onClick: () => alert('Click No')
                    }
                  ]
                })
              } //deleteEmployee(employee.employeeID)
        }
        >Delete</Button>
      </div>
    </Card.Content>
  </Card>

  )
}

EmployeeCard.propTypes = {
    employee: PropTypes.object.isRequired
}

//////////////////////////

//ganti return()
// return (
//   <tr>
//       <td width="50">{employee.EmployeeID}</td>
//       <td width="200">{employee.EmployeeName}</td>
//       <td width="50">{employee.Gender}</td>
//       <td width="100">{employee.DateOfBirth}</td>
//       <td width="100">{employee.PlaceOfBirth}</td>
//       <td width="100">{employee.MaritalStatus}</td>
//       <td width="100">{employee.Remark}</td>
//       <td width="250">
//         <Link to={`/employees/edit/${employee.EmployeeID}`} className="ui basic button green">Edit</Link>
//         <Button basic color="red" onClick={() =>{
//                 confirmAlert({
//                   title: 'Confirm to delete',
//                   message: 'Are you sure to do this.',
//                   buttons: [
//                     {
//                       label: 'Yes',
//                       onClick: () => deleteEmployee(employee.EmployeeID)
//                     },
//                     {
//                       label: 'No'
//                     }
//                   ]
//                 })
//               }
//           }
//         >Delete</Button>
//       </td>
//     </tr>

// ) 