import React,{Fragment} from 'react';
import { Route, Switch,withRouter} from 'react-router-dom';
import './App.css';

import Main from "./main";
import Post from "./components/Post/post.js";
import Description from "./components/Description/Description.js";
import Reg from "./components/Registration/reg.js";
import Login from "./components/Login/login.js";
import Mybook from "./components/MyBooks/mybooks.js";

function App() {
  return (
    <div>
    <Fragment>
      <Switch>
        <Route path="/add" component={Post}/>
        <Route path="/info" component={Description}/>
        <Route path="/reg" component={Reg}/>
        <Route path="/login" component={Login}/>
        <Route path="/mybook" component={Mybook}/>
        <Route path="/" component={Main}/>
      </Switch>
    </Fragment>
    </div>
  );
}

export default withRouter(App);
