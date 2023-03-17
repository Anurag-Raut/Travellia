const express=require("express");
const { request } = require('http');
const bodyParser=require("body-parser");
const port=4000;
const app= express();
// const routesUrls = require("./route")
const cors =require('cors')
const serverless =require('serverless-http')
const router =express.Router();
const datatemplate =require('../datamodel.js');


const mongoose =require("mongoose");
const exp = require("constants");
const { ObjectId } = require("mongodb");

app.use(express.json());
const DB = "mongodb+srv://admin:admin@cluster0.ainnpst.mongodb.net/?retryWrites=true&w=majority";

var jsonParser = bodyParser.json()

mongoose.connect(DB).then(()=>{

    console.log("success");
}).catch((err)=>console.log('no'));



router.post('/',(req,res)=>{
    console.log(req.body);

    
    const data =new datatemplate({
        
        List1hook:req.body.List1hook,
        List2hook:req.body.List2hook,
        List3hook:req.body.List3hook,
        List4hook:req.body.List4hook,
      
        route1:req.body.route1,
        route2:req.body.route2,
        route3:req.body.route3,
        route4:req.body.route4,
        date:req.body.date,
        useremail:req.body.useremail,
        cityy:req.body.cityy
   
        

    })
    

    data.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

}
)

router.get('/',(req,res)=>{
    
    datatemplate.find((error, dataa) => {
        if (error) {
            return next(error)
        } else {
            res.json(dataa)
        }
    })

}
)


router.post('/del',async function (req, res) {
    
    var id = req.body.id;
    datatemplate.deleteOne({ "_id":ObjectId(id) }).then(
        res.json({ success: id })
    )
  
   
  });



// router.get('/',(req,res)=>{

//   res.json({
//     'path':'hemlo'
//   });
// })



app.use(bodyParser.json())


app.use(cors());
app.use('/.netlify/functions/api',router);

module.exports.handler=serverless(app);