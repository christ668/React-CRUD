//import { employees } from '../employee-data';
import { client } from './';

const url = '/api/employee'; 
const url_insert ='/api/create/employee'  
const url_delete ='/api/delete/employee/'
const url_update ='/api/update/employee'

  export function fetchEmployees(){
    return dispatch => {
      dispatch({
        type: 'FETCH_EMPLOYEES',
        payload: client.get(url)
      })
    }
}

export function newEmployee() {
  return dispatch => {
    dispatch({
      type: 'NEW_EMPLOYEE'
    })
  }
}


export function saveEmployee(employee) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_EMPLOYEE',
      payload: client.post(url_insert, employee)
    })
  }
}

//buat delete
export function deleteEmployee(employeeID) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: client.delete(`${url_delete}${employeeID}`),
      success: window.location.reload()
      //redirect:true
    })
  }
}
// buat update
export function fetchEmployee(employeeID) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_EMPLOYEE',
      payload: client.get(`${url}/${employeeID}`)
    })
  }
}

export function updateEmployee(employee) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_EMPLOYEE',
      payload: client.put(`${url_update}/${employee.employeeID}`, employee)
    })
  }
}


//action creator //DAO