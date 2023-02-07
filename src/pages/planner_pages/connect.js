const mongoose =require("mongoose")
const DB = "mongodb+srv://admin:admin@cluster0.ainnpst.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(DB).then(()=>{

    console.log("success");
}).catch((err)=>console.log('no'));