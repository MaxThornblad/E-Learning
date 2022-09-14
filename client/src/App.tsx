import React from 'react';
import {Route, Switch} from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import Navigation from "./components/Navigation";

function App() {
  return (
  <>
  <Navigation/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/detail" component={DetailPage}/>
    </Switch>
  </>
  );
  
}

export default App;
