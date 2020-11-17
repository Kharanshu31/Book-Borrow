import React from 'react';
import "./SingleDiv.css";

function SingleDiv() {
  return (
    <div className="singleContainer">
        <div className="singleDesc">
          <h1 className="singleHeading">Jaggi Mathur</h1>
          <p className="singlePara">Subject : Maths</p>
          <p className="singlePara">Price : Rs 200</p>
        </div>
    </div>
  );
}

export default SingleDiv;
