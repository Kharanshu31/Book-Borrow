const express = require("express");
const router = express.Router();

const Book=require('../models/book');

router.route("/").post(async (req,res)=>{
  try {

    //console.log(`${req.body.name}\n${req.body.subject}\n${req.body.price}`);

    const newbook=new Book({
      name:req.body.name,
      subject:req.body.subject,
      price:req.body.price
    })

    console.log(newbook);

    const n=await newbook.save();

    res.json(n);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot post")
  }
})

router.route("/").get(async (req,res)=>{

  try {
    const t=await Book.find();

    res.json(t);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot post")
  }

})

module.exports=router;
