import React,{Component} from 'react';
import "./SingleDiv.css";
import book from "../../../../src/assets/book.jpg";
// import Description from "../../../../src/components/Description/Description.js"

class SingleDiv extends Component {
render(){
  return (
    <div className="singleContainer" onClick={(e)=>{
      e.preventDefault();
      window.location.href=`/info/?id=${this.props.id}`;
    }}>
        <div className="singleDesc">
          <img src={book} alt="Book" className="bookimg"/>
          <h1 className="singleHeading">{this.props.name}</h1>
          <p className="singlePara">Subject : {this.props.subject}</p>
          <p className="singlePara">Price : Rs {this.props.price}</p>
        </div>
    </div>
  );
}
}

export default SingleDiv;
