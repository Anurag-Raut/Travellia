const express=require('express');
const { request } = require('http');

const router =express.Router();
const datatemplate =require('../datamodel.js')


router.post('/',(req,res)=>{
    
    const data =new datatemplate({
        
        List1hook:req.body.List1hook,
        List2hook:req.body.List2hook,
        List3hook:req.body.List3hook,
        List4hook:req.body.List4hook,
        useremail:req.body.useremail,

    })
    

    data.save()
    .then( data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

}
)

router.get('/',(req,res)=>{
    
    datatemplate.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })

}
)

module.exports = router;