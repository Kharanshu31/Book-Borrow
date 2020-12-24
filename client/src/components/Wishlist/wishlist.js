import React,{Component} from 'react';
import book from "../../assets/book.jpg";
import "./wishlist.css";
import axios from 'axios';

class Description extends Component {

  state={
    book:[]
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

                })
            )
          })

        })
    }
  }

  render(){
    return (
      <div>
      <h1 style={{textAlign: 'center',fontStyle: 'italic'}}>My Wishlist</h1>
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
            </div>
          </div>
        )
      })}

      </div>
    );
  }
}

export default Description;
