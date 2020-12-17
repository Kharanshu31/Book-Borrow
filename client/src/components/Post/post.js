import React,{Component} from 'react';
import './post.css';
import axios from 'axios';

class Post extends Component {
  state={
      name:'',
      subject:'',
      price:0
  }

  handleChangeName=(e)=>{
    let h=e.target.value;
    this.setState({name:h});
  }

  handleChangeSubject=(e)=>{
    let h=e.target.value;
    this.setState({subject:h});
  }

  handleChangePrice=(e)=>{
    let h=e.target.value;
    this.setState({price:h});
  }

  submitBook=(e)=>{
    e.preventDefault();

    const item={
      name:this.state.name,
      subject:this.state.subject,
      price:this.state.price
    }

    //console.log(item);

    axios.post("http://localhost:5000/book/",item)
      .then(response=>{
        //console.log(response.data);
      }).catch(error=>console.log(error.response));

      this.props.history.push("/");
  }

  render(){
    return (
      <div className="postDiv">
        <h1>Add The Book Details</h1>
        <div className="postBox">
          <input className="postInput" placeholder="Enter book name" onChange={this.handleChangeName}></input>
          <input className="postInput" placeholder="Enter subject" onChange={this.handleChangeSubject}></input>
          <input className="postInput" placeholder="Enter price" onChange={this.handleChangePrice}></input>
          <input type="file" onChange={this.onFileChange} />
            <button onClick={this.onFileUpload}>Upload!</button>
            
          <button onClick={this.submitBook}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Post;
