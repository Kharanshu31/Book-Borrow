import React,{Component} from 'react';
import book from "../../assets/book.jpg";
import "./Description.css"

class Description extends Component {
  render(){
    return (
      <div className="descBox">
        <div className="imgbox">
          <img src={book} alt="Book" className="bookdescimg"/>
        </div>
        <div>
          <h2>Name : Jaggi Mathur</h2>
          <h2>Subject : Maths</h2>
          <h2>Price : Rs 200</h2>
        </div>
      </div>
    );
  }
}

export default Description;
