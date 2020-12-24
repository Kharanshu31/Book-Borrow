import React,{Component,Fragment} from 'react';
import "./Navigation.css";
import {NavLink,withRouter} from "react-router-dom";

class Navigation extends Component {

  state={
    isLoggedin:false
  }

  componentDidMount(){
    const id=window.localStorage.getItem("_id")

    if(id === null || id.length === 0)
    {
      this.setState({isLoggedin:false})
    }
    else
    {
      this.setState({isLoggedin:true})
    }
  }

  render(){

    const authLinks=(
        <Fragment>
          <a href="/" className="postLink" style={{color: 'white'}} onClick={(e)=>{
              e.preventDefault();
              window.localStorage.removeItem("_id");
              window.location.href="/";
          }}>Logout</a>
        </Fragment>
      )

      const guestLinks=(
        <Fragment>
        <NavLink style={{color: 'white'}} to="/reg" className="postLink">Register</NavLink>
        <NavLink style={{color: 'white'}} to="/login" className="postLink">Login</NavLink>
        </Fragment>
      )

  return (
    <div className="navigationContainer">
      <div>
        <h1 className="navigationTitle">Book-Borrow</h1>
      </div>

      <NavLink style={{color: 'white'}} to="/add" className="postLink">Post</NavLink>
      <NavLink style={{color: 'white'}} to="/mybook" className="postLink">MyBooks</NavLink>
      <NavLink style={{color: 'white'}} to="/wish" className="postLink">Wishlist</NavLink>
      {this.state.isLoggedin ? (authLinks) : (guestLinks) }
    </div>
  );
}
}

export default withRouter(Navigation);
