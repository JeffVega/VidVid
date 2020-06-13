import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Messages from '../message/list-message';
import Account from '../account/account-info';
import Home from "../homepage/home";
import VideoChat from '../video/video';
import asideVideoChat from '../video/video-aside';
export default function Pages(){
  return(
    <Router>
    <div>
    <Switch> 
  
    <Route exact path="/" component={Home} />
    <Route exact path="/videochat" component={VideoChat}/>
    <Route exact path="/video/:id" component={asideVideoChat}/>
     <Route exact path="/messages" component={Messages} />
     <Route exact path="/messages/:id" component={Messages} />
     <Route exact path="/account" component={Account} />
     </Switch>      
    </div>
    </Router>
  )
};