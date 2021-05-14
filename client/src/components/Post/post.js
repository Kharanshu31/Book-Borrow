import React,{Component} from 'react';
import './post.css';
import axios from 'axios';

class Post extends Component {
  state={
      name:'',
      subject:'',
      price:0,
      userid:'',
      file:null
  }

  componentDidMount(){
    const id=window.localStorage.getItem("_id")

    if(id === null || id.length === 0)
    {
      this.setState({userid:''})
    }
    else
    {
      this.setState({userid:id})
    }
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

  handleChangeFile=(e)=>{
    let h=e.target.files[0];
    console.log('file : ',h);
    this.setState({file:h});
  }

  submitBook=(e)=>{
    e.preventDefault();

    if(this.state.userid==='')
    {
      alert("Please Register/Login")
    }
    else
    {
      const item={
        name:this.state.name,
        subject:this.state.subject,
        price:this.state.price,
        user:this.state.userid
      }

      //console.log(item);



      axios.post("http://localhost:5000/book/",item)
        .then(response=>{
          console.log(response.data);
          const data = new FormData();
          data.append('text',this.state.name);
          data.append('material',this.state.file);
          data.append('book',response.data._id);
          axios.post("http://localhost:5000/material/",data)
            .then((res)=>{
              console.log(res.data);
            })


        }).catch(error=>console.log(error.response));

        this.props.history.push("/");
    }
  }

  render(){
    return (
      <div className="postDiv">
        <h1>Add The Book Details</h1>
        <div className="postBox">
          <input className="postInput" placeholder="Enter book name" onChange={this.handleChangeName}></input>
          <input className="postInput" placeholder="Enter subject" onChange={this.handleChangeSubject}></input>
          <input className="postInput" placeholder="Enter price" onChange={this.handleChangePrice}></input>
          <input type="file" onChange={this.handleChangeFile} />
            {/*<button onClick={this.onFileUpload}>Upload!</button>*/}

          <button onClick={this.submitBook}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Post;
