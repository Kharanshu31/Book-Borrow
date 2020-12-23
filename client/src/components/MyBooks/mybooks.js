import React,{Component,Fragment} from 'react';
import bimg from "../../assets/book.jpg";
import "./mybooks.css";
import axios from 'axios';
import Modal from "react-modal";

class Mybooks extends Component {

  state={
    book:[],
    open:false,
    editname:"",
    editprice:"",
    editsub:"",
    editid:""
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
        axios.get(`http://localhost:5000/book/userfind/${u}`)
          .then(response=>{
            // console.log(response.data);
            this.setState({book:response.data})
          }).catch(error=>console.log(error.response));
      }
  }

  openModal=(name,subject,price,id)=> {
    this.setState({open:true})
    this.setState({editname:name})
    this.setState({editsub:subject})
    this.setState({editprice:price})
    this.setState({editid:id})
  }

  closeModal=()=>{
    this.setState({open:false})
  }

  handleChangeName=(e)=>{
    let h=e.target.value;
    this.setState({editname:h});
  }

  handleChangeSubject=(e)=>{
    let h=e.target.value;
    this.setState({editsub:h});
  }

  handleChangePrice=(e)=>{
    let h=e.target.value;
    this.setState({editprice:h});
  }

  saveEdit=(e)=>{
    e.preventDefault();
    const item={
      name:this.state.editname,
      subject:this.state.editsub,
      price:this.state.editprice,
    }
    //console.log(item);
    //console.log(this.state.editid);
    axios.post(`http://localhost:5000/book/edit/${this.state.editid}`,item)
      .then(response=>{
        //console.log(response.data);
        //alert("succesfully done");
      }).catch(error=>console.log(error.response));

      window.location.href="/mybook";
  }

  removeBook=(id)=>{
    axios.delete(`http://localhost:5000/book/remove/${id}`)
      .then(response=>{
        console.log(response.data);
      }).catch(error=>console.log(error.response));

      window.location.href="/mybook";
  }

  render(){
    return (
      <div>

      {this.state.book.length===0 ? (
        <h1 style={{textAlign: 'center'}}>No books added</h1>
      ) : (
        <Fragment>
          <h1 style={{textAlign: 'center',fontStyle: 'italic'}}>My Books</h1>
          {this.state.book.map(el=>{
            return(
            <div key={el._id} className="descBox">
              <div className="imgbox">
                <img src={bimg} alt="Book" className="bookdescimg"/>
              </div>
              <div>
                <h2>Name : {el.name}</h2>
                <h2>Subject : {el.subject}</h2>
                <h2>Price : {el.price}</h2>
                <button className="editbtn" onClick={()=>this.openModal(el.name,el.subject,el.price,el._id)}>Edit</button>
                <button className="editbtn" onClick={()=>this.removeBook(el._id)}>Delete</button>
              </div>
            </div>
          )
          })}

          <Modal
            isOpen={this.state.open}
            onRequestClose={this.closeModal}
            style={{
              top:'50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }}
            contentLabel="Example Modal"
          >
            <h2 style={{textAlign: 'center'}}>Edit Details</h2>
            <div className="editbox">
              <input className="editinput" defaultValue={this.state.editname} onChange={this.handleChangeName}></input>
              <input className="editinput" defaultValue={this.state.editsub} onChange={this.handleChangeSubject}></input>
              <input className="editinput" defaultValue={this.state.editprice} onChange={this.handleChangePrice}></input>
              <div>
                <button onClick={this.closeModal} className="editbtnmodal">Close</button>
                <button className="editbtnmodal" onClick={this.saveEdit}>Save</button>
              </div>
            </div>
          </Modal>

        </Fragment>
      )}

      </div>
    );
  }
}

export default Mybooks;
