import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import {newEmployee,saveEmployee,fetchEmployee, updateEmployee } from '../Actions/employee-action';
import EmployeeForm from '../Components/employee-form';

class EmployeeFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {
    const { employeeID } = this.props.match.params;
    console.log(employeeID);
    if(employeeID){
      this.props.fetchEmployee(employeeID)
    } else {
      this.props.newEmployee();
    }
  }

  // submit = (employee) => {
  //   return this.props.saveEmployee(employee)
  //     .then(response => this.setState({ redirect:true }))
  //     .catch(err => {
  //        throw new SubmissionError(this.props.errors)
  //      })
  // }
 
   
  submit = (employee) => {
    console.log(employee);
    //console.log(employee._id);
    if(!employee._id) {
      return this.props.saveEmployee(employee)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateEmployee(employee)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  // render() {
  //   return (
  //     <div>
  //       <EmployeeForm/>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <EmployeeForm employee={this.props.employee} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    employee: state.employeeStore.employee,
    errors: state.employeeStore.errors
  }
}
export default connect(mapStateToProps, {newEmployee,saveEmployee,fetchEmployee, updateEmployee})(EmployeeFormPage);
//export default EmployeeFormPage;