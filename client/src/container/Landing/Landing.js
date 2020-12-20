import React,{Component} from 'react';
import "./Landing.css";
import axios from 'axios';

import SingleDiv from "./SingleDiv/SingleDiv.js";

class Landing extends Component{

  state={
    books:[]
  }

  componentDidMount(){
    axios.get("http://localhost:5000/book/")
      .then(response=>{
        //console.log(response.data);
        this.setState({
          books:response.data
        })
      }).catch(error=>console.log(error.response));
  }

  render(){

    return (
      <div className="landingContainer">
      {this.state.books.map(el=><SingleDiv key={el._id} name={el.name} subject={el.subject} price={el.price} id={el._id}/>)}
      </div>
    );

  }
}

export default Landing;
