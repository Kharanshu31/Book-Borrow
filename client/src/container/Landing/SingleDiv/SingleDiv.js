import React from 'react';
import "./SingleDiv.css";

function SingleDiv(props) {
  return (
    <div className="singleContainer">
        <div className="singleDesc">
          <h1 className="singleHeading">{props.name}</h1>
          <p className="singlePara">Subject : {props.subject}</p>
          <p className="singlePara">Price : Rs {props.price}</p>
        </div>
    </div>
  );
}

export default SingleDiv;
