import React from 'react';
import ReactDOM from 'react-dom';
import SmartDataTable from 'react-smart-data-table';
import PropTypes from 'prop-types';

export default function EmployeeTable({employee, deleteEmployee}) {

    return (
        <SmartDataTable
        data={employee}
        name='test-table'
        className='ui compact selectable table'
        sortable
        > </SmartDataTable>
    //   <Card>
    //     <Card.Content>
    //       <Card.Header>
    //         <Icon name='user outline'/> {employee.name}
    //       </Card.Header>
    //       <Card.Description>
    //         <p><Icon name='employee_id'/> {employee.employeeID}</p>
    //         <p><Icon name='gender'/> {employee.gender}</p>
    //         <p><Icon name='DateOfBirth'/> {employee.DateOfBirth}</p>
    //         <p><Icon name='PlaceOfBirth'/> {employee.PlaceOfBirth}</p>
    //         <p><Icon name='MaritalStatus'/> {employee.MaritalStatus}</p>
    //         <p><Icon name='Remark eye icon'/> {employee.Remark}</p>
    //       </Card.Description>
    //     </Card.Content>
    //     <Card.Content extra>
    //       <div className="ui two buttons">
    //         <Link to={`/employees/edit/${employee.employeeID}`} className="ui basic button green">Edit</Link>
            
    //         <Button basic color="red" onClick={() =>{
    //                 confirmAlert({
    //                   title: 'Confirm to delete',
    //                   message: 'Are you sure to do this.',
    //                   buttons: [
    //                     {
    //                       label: 'Yes',
    //                       onClick: () => deleteEmployee(employee.employeeID)
    //                     },
    //                     {
    //                       label: 'No'
    //                       //onClick: () => alert('Click No')
    //                     }
    //                   ]
    //                 })
    //               } //deleteEmployee(employee.employeeID)
    //         }
    //         >Delete</Button>
    //       </div>
    //     </Card.Content>
    //   </Card>
    )
  }
  
  EmployeeTable.propTypes = {
      employee: PropTypes.object.isRequired
  }