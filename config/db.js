const mongoose = require("mongoose");

require('dotenv').config();

const db=process.env.ATLAS_URI;

const connectDB = async () =>{
  try {
    await mongoose.connect(db,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex:true,
       useFindAndModify:false
    });

    console.log("Mongodb connected bois");
  } catch(err) {
    console.log(err.message);

    //Exit process with Failure
    process.exit(1);
  }
}

module.exports = connectDB;
