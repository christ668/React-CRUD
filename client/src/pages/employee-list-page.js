import React, { Component} from 'react';
import { connect } from 'react-redux';
import EmployeeList from '../Components/employee-list';
import { fetchEmployees } from '../Actions/employee-action';
import { deleteEmployee } from '../Actions/employee-action';

class EmployeeListPage extends Component {

  componentDidMount() {
    this.props.fetchEmployees();
  }


  render() {
    return (
      <div>
        <h1>List of Employee</h1>
        {/* <table>
        <tr>
          <th>EmployeeID</th>
          <th>name</th> 
          <th>gender</th>
        </tr>
        </table> */}
        <EmployeeList employees={this.props.employees} deleteEmployee={this.props.deleteEmployee}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
    employees : state.employeeStore.employees
  }
}




export default connect(mapStateToProps, {fetchEmployees,deleteEmployee})(EmployeeListPage);