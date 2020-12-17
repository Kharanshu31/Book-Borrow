import React from 'react';
import "./SingleDiv.css";
import book from "../../../../src/assets/book.jpg";
// import Description from "../../../../src/components/Description/Description.js"

function SingleDiv(props) {
  return (
    <div className="singleContainer" onClick={(e)=>{
      e.preventDefault();
      window.location.href="/info";
    }}>
        <div className="singleDesc">
          <img src={book} alt="Book" className="bookimg"/>
          <h1 className="singleHeading">{props.name}</h1>
          <p className="singlePara">Subject : {props.subject}</p>
          <p className="singlePara">Price : Rs {props.price}</p>
        </div>
    </div>
  );
}

export default SingleDiv;
