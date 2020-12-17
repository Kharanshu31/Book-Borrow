import React,{Fragment} from 'react';
import { Route, Switch,withRouter} from 'react-router-dom';
import './App.css';

import Main from "./main";
import Post from "./components/Post/post.js";
import Description from "./components/Description/Description.js"

function App() {
  return (
    <div>
    <Fragment>
      <Switch>
        <Route path="/add" component={Post}/>
        <Route path="/info" component={Description}/>
        <Route path="/" component={Main}/>
      </Switch>
    </Fragment>
    </div>
  );
}

export default withRouter(App);
