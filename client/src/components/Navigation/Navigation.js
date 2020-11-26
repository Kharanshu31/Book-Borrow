import React from 'react';
import "./Navigation.css";
import {NavLink,withRouter} from "react-router-dom";

function Navigation() {
  return (
    <div className="navigationContainer">
      <div>
        <h1 className="navigationTitle">Book-Borrow</h1>
      </div>

      <NavLink style={{color: 'white'}} to="/add">Post</NavLink>
    </div>
  );
}

export default withRouter(Navigation);
