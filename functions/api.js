const express=require("express");
const serverless=require('serverless-http')
const bodyParser=require("body-parser");
const port=4000;
const app= express();
const routesUrls = express.Router();
const cors =require('cors')



const mongoose =require("mongoose");
const exp = require("constants");

const DB = "mongodb+srv://admin:admin@cluster0.ainnpst.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(DB).then(()=>{

    console.log("success");
}).catch((err)=>console.log('no'));


app.use(express.json());
app.use(cors());
app.use('/.netlify/functions/api',routesUrls);

module.exports.handler =serverless(app);