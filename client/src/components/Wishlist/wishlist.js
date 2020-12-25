import React,{Component} from 'react';
import book from "../../assets/book.jpg";
import "./wishlist.css";
import axios from 'axios';

class Description extends Component {

  state={
    book:[],
    p:0
  }

  componentDidMount(){

    const u=window.localStorage.getItem("_id");
    // console.log(u);
    if(u === null || u.length === 0)
    {
      alert("Please login")
    }
    else
    {
      axios.get(`http://localhost:5000/user/getUser?id=${u}`)
        .then(response=>{
          // console.log(response.data.wishlist);

          response.data.wishlist.map(el=>{
            return (
              axios.get(`http://localhost:5000/book/find/${el}`)
                .then(res=>{
                   // console.log(res.data);
                  this.setState(()=>({
                      book:[
                        ...this.state.book,
                        res.data
                      ]
                  }))

                  this.setState((prevstate)=>({
                    p:this.state.p+res.data.price
                  }))

                })
            )
          })

        })
    }
  }

  removeWishBook=(bid)=>{
    const u=window.localStorage.getItem("_id");
    axios.post(`http://localhost:5000/user/removewish/${bid}/${u}`)
      .then(response=>{
        alert("Successfully deleted from wishlist")
        window.location.href="/wish"
      }).catch(error=>console.log(error.response));
  }

  render(){
    return (
      <div>
      <h1 style={{textAlign: 'center',fontStyle: 'italic'}}>My Wishlist</h1>
      <h3 style={{textAlign: 'center'}}>Your current price is {this.state.p}</h3>
      {this.state.book.map(el=>{
        return (
          <div key={el._id} className="descBox">
            <div className="imgbox">
              <img src={book} alt="Book" className="bookdescimg"/>
            </div>
            <div>
              <h2>Name : {el.name}</h2>
              <h2>Subject : {el.subject}</h2>
              <h2>Price : {el.price}</h2>
              <h2>Uploaded By : Kharanshu</h2>
              <button onClick={()=>this.removeWishBook(el._id)}>Remove</button>
            </div>
          </div>
        )
      })}

      </div>
    );
  }
}

export default Description;
