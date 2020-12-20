const express = require("express");
const fs = require('fs');
const router = express.Router();
const multer = require('multer');

const Book=require('../models/book');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});

const upload = multer({ storage: storage });

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
    res.status(500).send("cannot get")
  }

})

router.route("/find/:id").get(async(req,res)=>{
  try {
    const p=req.params.id;
    //console.log(p);
    const b=await Book.findById(p);
    res.json(b);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot find id")
  }
})

module.exports=router;
