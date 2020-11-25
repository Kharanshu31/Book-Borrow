const express = require('express');
const bodyParser = require("body-parser");
const connectDB=require("./config/db");
const path = require('path');

const app=express();
app.use(bodyParser.json());
app.use(express.json());

connectDB();

app.use("/book",require("./routes/book"));

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server is running at ${port}`));
