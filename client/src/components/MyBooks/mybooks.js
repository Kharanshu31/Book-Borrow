import React,{Component,Fragment} from 'react';
import bimg from "../../assets/book.jpg";
import "./mybooks.css";
import axios from 'axios';

class Mybooks extends Component {

  state={
    book:[]
  }

  componentDidMount(){
      const u=window.localStorage.getItem("_id");
      // console.log(u);
      if(u === null || u.length === 0)
      {
        alert("Please login")
      }
      else
      {
        axios.get(`http://localhost:5000/book/userfind/${u}`)
          .then(response=>{
            // console.log(response.data);
            this.setState({book:response.data})
          }).catch(error=>console.log(error.response));
      }
  }

  render(){
    return (
      <div>

      {this.state.book.length===0 ? (
        <h1 style={{textAlign: 'center'}}>No books added</h1>
      ) : (
        <Fragment>
          <h1 style={{textAlign: 'center',fontStyle: 'italic'}}>My Books</h1>
          {this.state.book.map(el=>{
            return(
            <div key={el._id} className="descBox">
              <div className="imgbox">
                <img src={bimg} alt="Book" className="bookdescimg"/>
              </div>
              <div>
                <h2>Name : {el.name}</h2>
                <h2>Subject : {el.subject}</h2>
                <h2>Price : {el.price}</h2>
              </div>
            </div>
          )
          })}
        </Fragment>
      )}

      </div>
    );
  }
}

export default Mybooks;
