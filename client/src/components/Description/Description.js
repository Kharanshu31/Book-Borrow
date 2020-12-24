import React,{Component} from 'react';
import book from "../../assets/book.jpg";
import "./Description.css";
import axios from 'axios';

class Description extends Component {

  state={
    book:"",
    bid:"",
    uid:""
  }

  componentDidMount(){
    //console.log(this.props);
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    console.log(id);
    this.setState({bid:id});
    const u=window.localStorage.getItem("_id")
    if(u===null)
    {
      this.setState({uid:""})
    }
    else
    {
      this.setState({uid:u})
    }

    axios.get(`http://localhost:5000/book/find/${id}`)
      .then(response=>{
        //console.log(response.data);
        this.setState({
          book:response.data
        })
      }).catch(error=>console.log(error.response));
  }

  onAddToWishlist=(e)=>{

    if(this.state.uid==="" || this.state.bid==="")
    {
      alert("Please login")
    }
    else
    {
      axios.post(`http://localhost:5000/user/wish/${this.state.bid}/${this.state.uid}`)
        .then(response=>{
          alert("Successfully added to wishlist")
        }).catch(error=>console.log(error.response));
    }
  }

  render(){
    return (
      <div>
      <h1 style={{textAlign: 'center',fontStyle: 'italic'}}>Book Details</h1>
      <div className="descBox">
        <div className="imgbox">
          <img src={book} alt="Book" className="bookdescimg"/>
        </div>
        <div>
          <h2>Name : {this.state.book.name}</h2>
          <h2>Subject : {this.state.book.subject}</h2>
          <h2>Price : {this.state.book.price}</h2>
          <h2>Uploaded By : Kharanshu</h2>
          <button onClick={this.onAddToWishlist}>Add to Wishlist</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Description;
