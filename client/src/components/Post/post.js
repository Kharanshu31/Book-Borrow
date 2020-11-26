import React,{Component} from 'react';
import './post.css';

class Post extends Component {
  render(){
    return (
      <div className="postDiv">
        <h1>Add The Book Details</h1>
        <div className="postBox">
          <input className="postInput" placeholder="Enter book name"></input>
          <input className="postInput" placeholder="Enter subject"></input>
          <input className="postInput" placeholder="Enter price"></input>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Post;
