import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Messages from '../message/list-message';
import Account from '../account/account-info';
import Home from "../homepage/home";
export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
    {/* <Redirect exact from="/" to="/signin" /> */}
    <Route exact path="/" component={Home} />
     <Route exact path="/messages" component={Messages} />
     <Route exact path="/messages/:id" component={Messages} />
     <Route exact path="/account" component={Account} />
     </Switch>      
    </div>
    </Router>
  )
};