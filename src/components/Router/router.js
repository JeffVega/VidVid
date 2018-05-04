import React from "react";
import { BrowserRouter as Router, Route,Redirect,Switch } from "react-router-dom";


export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
    {/* <Redirect exact from="/" to="/signin" /> */}
     <Route exact path="/signin" component={Login} />
     </Switch>      
    </div>
    </Router>
  )
};