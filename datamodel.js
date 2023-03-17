const mongoose =require("mongoose");

const datatemplate =new mongoose.Schema({
    List1hook:{
        type:Array,

    },
    List2hook:{
        type:Array,

    },
    List3hook:{
        type:Array,

    },
    List4hook:{
        type:Array,

    },
    useremail:{
        type:String,
    },
    route1:{
        type:Array
    },
    route2:{
        type:Array
    },
    route3:{
        type:Array
    },
    route4:{
        type:Array
    },
    date:{
        type:String
    },
    cityy:{
        type:String
    }
    
 

})
module.exports=mongoose.model('mytable',datatemplate);