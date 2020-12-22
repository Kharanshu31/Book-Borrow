import React,{Component} from 'react';
import './reg.css';
import axios from 'axios';

class Reg extends Component {
  state={
      email:'',
      password:''
  }

  handleChangeEmail=(e)=>{
    let h=e.target.value;
    this.setState({email:h});
  }

  handleChangePassword=(e)=>{
    let h=e.target.value;
    this.setState({password:h});
  }

  submitUser=(e)=>{
    e.preventDefault();

    const item={
      email:this.state.email,
      password:this.state.password,
    }

    //console.log(item);

    axios.post("http://localhost:5000/user/add/",item)
      .then(response=>{
        // console.log(response.data);
        window.localStorage.setItem("_id",response.data._id)
        window.location.href="/";
      }).catch(error=>console.log(error.response));

      this.props.history.push("/");
  }

  render(){
    return (
      <div className="regDiv">
        <h1>User Registration</h1>
        <div className="regBox">
          <input className="regInput" placeholder="Enter Email" type="email" onChange={this.handleChangeEmail}></input>
          <input className="regInput" placeholder="Enter Password" type="password" onChange={this.handleChangePassword}></input>

          <button onClick={this.submitUser}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Reg;
