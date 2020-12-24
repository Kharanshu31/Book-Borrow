const router = require('express').Router();
const Bookuser = require("../models/bookuser");
const Book=require('../models/book');

router.route("/").get((req,res)=>{
  Bookuser.find()
    .then(time=>res.json(time))
    .catch(err=>res.status(400).json("Error:" + err));
})

router.route('/getUser').get(async(req,res)=>{
  try {

    const l=await Bookuser.findOne({_id:req.query.id})

    console.log(l);

    if(!l)
    {
      return res.json("User not found")
    }

    res.json(l);

  } catch(err) {
    console.log(err);
    res.status(500).json("Server Error!!")
  }

})

// router.route('/find').post((req,res)=>{
//   Bookuser.findOne({email:req.body.email,password:req.body.password})
//   .then((response)=>{
//     res.json(response.data)
//   })
//   .catch(err=>res.json("User does not exist"));
// })

router.route('/find').post(async(req,res)=>{
  try {

    const u=await Bookuser.findOne({email:req.body.email})

    if(!u)
    {
      return res.json("Email does not exist")
    }

    console.log(u);

    if(u.password!==req.body.password)
    {
      return res.json("Password does not match")
    }

    //const up=await Bookuser.update({email:req.body.email},{$set:{isLoggedIn:true}})

    res.json(u);

  } catch(err){
    console.log(err);
    res.status(500).json("Server Error!!")
  }
})

router.route("/add").post((req,res)=>{
  //const userBook=req.body.email;
  const newBookuser=new Bookuser(req.body);

  newBookuser.save()
    .then(()=>res.json(newBookuser))
    .catch(err=>res.status(400).json("Error:" + err));
})

router.route("/wish/:bid/:uid").post(async(req,res)=>{
  try {
    //console.log(req.params.bid);
    //console.log(req.params.uid);
    const b=await Bookuser.updateOne({_id:req.params.uid},{$addToSet:{
      "wishlist":req.params.bid
    }})

    res.json(b);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("cannot add to wishlist")
  }
})

module.exports = router;
