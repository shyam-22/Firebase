import React, { Component } from 'react';
import Navigation from './component/navigation/navigation';

import Home from "./component/home/home";


import {Route,Switch} from "react-router-dom";

 class App extends Component {
   render()
   {
    return (

      <React.Fragment>

        <Navigation/>
        <Home/>
        <div className="container">
      <Switch>
        <Route path="/" exact Component={Home}/>
        <Route path="/home" Component={Home}/>
      </Switch>
      </div>

      </React.Fragment>
      
    )
   
   }
  
}

export default App;
