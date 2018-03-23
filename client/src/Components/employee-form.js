import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

// class EmployeeForm extends Component {
//   render() {
//     return (
//       <div>
//         <p>Form under construction</p>
//       </div>
//     )
//   }
// }

// export default EmployeeForm;

class EmployeeForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Receive Contact data Asynchronously
    const { employee } = nextProps;
    console.log(this.props.employee);
    if(employee.employeeID !== this.props.employee.employeeID) { // Initialize form only once
      this.props.initialize(employee)
    }
  }
  
    renderField = ({ input, label, type, meta: { touched, error } }) => {
      // console.log("touch "+touched);
      // console.log("error "+error);
      return (
        <Form.Field className={classnames({error:touched && error})}>
          <label>{label}</label>
          {type==="text"  ?
          <input {...input} placeholder={label} type={type}/>
          :type==="date"  ? 
          <input {...input} placeholder={label} type={type}/>
          :type==="cmbGender"?
          <select {...input} placeholder={label} type={type}><option></option><option>male</option> <option>female</option> </select>
          :type==="cmbMarital"?
          <select {...input} placeholder={label} type={type}><option></option><option>single</option><option>married</option> <option>widow</option></select>
          :<textarea {...input} placeholder={label} type={type}/>
          }
          {touched && error && <span className="error">{error.message}</span>}
        
        </Form.Field>
      );
    } 

    // condition ? true : false;
    // type==='textarea' ? <textarea /> : <input />
  

    render() {
      const { handleSubmit, pristine, submitting, loading } = this.props;
  
      return (
        <Grid centered columns={2}>
          <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{this.props.employee.employeeID ? 'Edit Contact' : 'Add New Contact'}</h1>
            <Form onSubmit={handleSubmit} loading={loading}>
                <Field name="employeeID" type="text" component={this.renderField} label="employee id"/>
              <Field name="name" type="text" component={this.renderField} label="Name"/>
              <Form.Group widths='equal'>
              <Field name="PlaceOfBirth" type="text" component={this.renderField} label="Place Of Birth"/> 
              <Field name="gender" type="cmbGender" component={this.renderField} label="gender"/>
              </Form.Group>
              <Form.Group widths='equal'>
              <Field name="MaritalStatus" type="cmbMarital"   component={this.renderField} label="Marital"/>
              <Field name="DateOfBirth" type="date" component={this.renderField} label="Date Of Birth"/>
              </Form.Group>
              <Field name="Remark" type="textarea"   component={this.renderField} label="Remarks"/>
              <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
            </Form>
          </Grid.Column>
        </Grid>
      )
    }
  }

  
  
  const validate = (values) => {
    const errors = {employee:{}};
    // if(!values.name || !values.name.first) {
    //   errors.name.first = {
    //     message: 'Employee ID kosong'
    //   }
    // }
    // if(!values.phone) {
    //   errors.phone = {
    //     message: 'You need to provide a Phone number'
    //   }
    // } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    //   errors.phone = {
    //     message: 'Phone number must be in International format'
    //   }
    // }
    // if(!values.email) {
    //   errors.email = {
    //     message: 'You need to provide an Email address'
    //   }
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = {
    //     message: 'Invalid email address'
    //   }
    // }
    return errors;
  }

  export default reduxForm({form: 'employee',validate})(EmployeeForm);