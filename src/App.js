import React from 'react';
import { BrowserRouter,  Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import Error from './components/Error';
import  Account from "./components/Account";
import Forms  from "./components/Forms";

function App() {
  return (
    <main className='wrapper'>
      <div className='header'>
        <h3>Välkommen!</h3>
               
      </div>
      <BrowserRouter>
          <Switch>
            
            <Route exact path="/">
              <Redirect to="/registration" />
            </Route>

            <Route  path='/registration' component={ Forms } />

            <Route path= '/account' component={ Account } /> 

            <Route component={ Error} />

          </Switch>
      </BrowserRouter>  
    </main>
  );
}

export default App;
