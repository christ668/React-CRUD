import { combineReducers } from 'redux';
import EmployeeReducer from './employee-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  employeeStore: EmployeeReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;