const express = require('express');
const connectDB=require("./config/db");
const path = require('path');

const app=express();

connectDB();

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running at ${port}`));
