const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookuserSchema=new Schema({
  email:{type:String},
  password:{type:String},
  isLoggedIn:{type:Boolean},
  wishlist:[
    {
      type:mongoose.Schema.Types.ObjectID,
      ref:"Book"
    }
  ]
},{
  timestamps: true,
})

const Bookuser=mongoose.model("Bookuser",bookuserSchema);

module.exports = Bookuser;
