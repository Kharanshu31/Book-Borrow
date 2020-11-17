import React from 'react';
import "./Landing.css";

import SingleDiv from "./SingleDiv/SingleDiv.js";

function Landing() {

  let ar=[];
  for(let i=0;i<10;i++)
  {
    ar.push(<SingleDiv key={i}/>);
  }

  return (
    <div className="landingContainer">
    {ar.map(el=>el)}
    </div>
  );
}

export default Landing;
