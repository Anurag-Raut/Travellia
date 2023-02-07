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
    }

})
module.exports=mongoose.model('mytable',datatemplate);