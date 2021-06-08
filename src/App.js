import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Budget from './Pages/Budget';

import PhGallery from './Pages/PhGallery';

import PrivetRoute from './Context/PrivetRoute';
import Account from './Pages/Account';
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/SignUp'

function App() {
  
  return (
    <Router>
      <Navbar /> 
      <div className={'App'}>
        <Switch>
          <Route path="/" exact component={Budget} />
          <Route path="/phGallery" component={PhGallery} />         
          <PrivetRoute path="/account" exact component={Account} />
          <Route path="/login" component={Login} />  
          <Route path="/signup" component={SignUp} />           
        </Switch>
      </div>
    </Router>
  );
}

export default App; 