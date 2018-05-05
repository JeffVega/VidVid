import React from "react";
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import Messages from '../message/list-message'
import Main from '../main'
export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
    {/* <Redirect exact from="/" to="/signin" /> */}
    <Route exact path="/" component={Main} />
     <Route exact path="/messages" component={Messages} />
     </Switch>      
    </div>
    </Router>
  )
};