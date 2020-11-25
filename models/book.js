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
  }
})

const Book=mongoose.model("Book",bookSchema);

module.exports=Book;
