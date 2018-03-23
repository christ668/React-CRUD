// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started.....!!!!!!!!!!!..., edit <code>src/App.js</code> and save to reload.
//         </p> <br/>
//         test
//       </div>

      
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/employee-list-page.js';
import ContactFormPage from './pages/employee-form-page.js';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Employee List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/employees/new">
            Add Employee
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/employees/new" component={ContactFormPage}/>
        <Route path="/employees/edit/:employeeID" component={ContactFormPage}/>
      </Container>
    );
  }
}

export default App;