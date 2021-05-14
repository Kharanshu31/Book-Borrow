import React,{Component} from 'react';
import "./SingleDiv.css";
//import book from "../../../../src/assets/book.jpg";
import axios from 'axios';
// import Description from "../../../../src/components/Description/Description.js"

class SingleDiv extends Component {

  state={
    bookimage:''
  }

  componentDidMount(){

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    };

    axios.get(`http://localhost:5000/material/${this.props.id}`,config)
        .then(response=>{
          //console.log(response.data);
          if(response.data!=='No Book Found!')
          {
              this.setState({bookimage:response.data.material});
          }
        }).catch(error=>console.log(error.response));
  }

render(){

  const url=`http://localhost:5000/${this.state.bookimage}`;
  //console.log('url : ',url);

  return (
    <div className="singleContainer" onClick={(e)=>{
      e.preventDefault();
      window.location.href=`/info/?id=${this.props.id}`;
    }}>
        <div className="singleDesc">
          {this.state.bookimage === '' ? null : (
            <React.Fragment>
                <img src={url} alt="Book" className="bookimg"/>
            </React.Fragment>
          )}
          <h1 className="singleHeading">{this.props.name}</h1>
          <p className="singlePara">Subject : {this.props.subject}</p>
          <p className="singlePara">Price : Rs {this.props.price}</p>
        </div>
    </div>
  );
}
}

export default SingleDiv;
