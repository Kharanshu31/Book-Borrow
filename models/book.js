const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema=new Schema({
  name:{
    type:String
  },
  subject:{
    type:String
  },
  price:{
    type:Number
  },
  img:{
     data: Buffer,
    contentType: String
  },
  user:{
    type:mongoose.Schema.Types.ObjectID,
    ref:"Bookuser"
  }
})

const Book=mongoose.model("Book",bookSchema);

module.exports=Book;
