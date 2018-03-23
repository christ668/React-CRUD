const defaultState = {
    employees: [],
    employee: {name:{}},
    loading: false,
    errors: {}
  }
  
  export default (state=defaultState, action={}) => {
    switch (action.type) {
      // case 'FETCH_EMPLOYEES': {
      //   return {
      //     ...state,
      //     employees: action.payload
      //   }
      // }
      case "FETCH_EMPLOYEES_FULFILLED": {
        return {
          ...state,
          employees: action.payload.data.data || action.payload.data // in case pagination is disabled
        }
      }

      case 'NEW_EMPLOYEE': {
        return {
          ...state,
          employee: {name:{}}
        }
      }

      case 'SAVE_EMPLOYEES_PENDING': {
        return {
          ...state,
          loading: true
        }
      }
  
      case 'SAVE_EMPLOYEES_FULFILLED': {
        return {
          ...state,
          employees: [...state.employees, action.payload.data],
          errors: {},
          loading: false
        }
      }
      
      case 'SAVE_EMPLOYEES_REJECTED': {
        const data = action.payload.response.data;
        // convert feathers error formatting to match client-side error formatting
        const { employeeID, name, gender, DateOfBirth,PlaceOfBirth,MaritalStatus,Remark } = data.errors;
        const errors = { global: data.message, employeeID, name, gender, DateOfBirth,PlaceOfBirth,MaritalStatus,Remark };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }


      case 'DELETE_EMPLOYEE_FULFILLED': {
        const employeeID = action.payload.data.employeeID;
        return {
          ...state,
          employees: state.employees.filter(item => item.employeeID !== employeeID)
        }
      }

      case 'FETCH_EMPLOYEE_PENDING': {
        return {
          ...state,
          loading: true,
          employee: {name:{}}
        }
      }
      
      case 'FETCH_EMPLOYEE_FULFILLED': {
        return {
          ...state,
          employee: action.payload.data,
          errors: {},
          loading: false
        }
      }
      
      case 'UPDATE_EMPLOYEE_PENDING': {
        return {
          ...state,
          loading: true
        }
      }
      
      case 'UPDATE_EMPLOYEE_FULFILLED': {
        const employee = action.payload.data;
        return {
          ...state,
          employees: state.employees.map(item => item.employeeID === employee.employeeID ? employee : item),
          errors: {},
          loading: false
        }
      }
      
      case 'UPDATE_EMPLOYEE_REJECTED': {
        const data = action.payload.response.data;
        const { employeeID, name, gender, DateOfBirth,PlaceOfBirth,MaritalStatus,Remark } = data.errors;
        const errors = { global: data.message, employeeID, name, gender, DateOfBirth,PlaceOfBirth,MaritalStatus,Remark };
        return {
          ...state,
          errors: errors,
          loading: false
        }
      }


      default:
        return state;
    }
  }