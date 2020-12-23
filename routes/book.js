const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const router = express.Router();
const multer = require('multer');

const Book=require('../models/book');
const Bookuser = require("../models/bookuser");

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
      price:req.body.price,
      user:req.body.user
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

router.route("/userfind/:id").get(async(req,res)=>{
  try {
    const id=req.params.id;

    const b=await Book.find({user:id})

    res.json(b);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot find user book")
  }
})

router.route("/edit/:id").post(async(req,res)=>{
  try{
    const id=req.params.id;
    //console.log(req.body);

    const b=await Book.updateMany({_id:id},{$set:{
      name:req.body.name,
      subject:req.body.subject,
      price:req.body.price
    }})

    res.json(b);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot edit")
  }

})

router.route("/remove/:id").delete(async(req,res)=>{
  try {
    const id=req.params.id;

    const b=await Book.findById(id);
    // console.log(b);
    await b.remove();
    res.json("Succesfully deleted");

  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot edit")
  }
})

module.exports=router;
