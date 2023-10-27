const mongoose = require("mongoose");
const schema = mongoose.Schema          
const serviceSchema = new schema({  

    category:{type:String,required:true},
    nameofservice:{type:String,required:true},
    description:{type:String,required:true},        
    price:{type:String,required:true},
    image:{type:String,required:true},
   
    
})

const serviceModel = mongoose.model('service_tb',serviceSchema) 
module.exports = serviceModel                              

