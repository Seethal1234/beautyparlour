const mongoose  = require("mongoose");   //connecting mongoose db to a const
const schema = mongoose.Schema          // schema to create and structure
const regSchema = new schema({  
    login_id:{type: schema.Types.ObjectId , ref:"login_tb"}, 
    name:{type:String,required:true},  
    address:{type:String,required:true},        //fields and types
    phone:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},        //fields and types
   
})

const regModel = mongoose.model('reg_tb',regSchema) //adding the structure and value to a table book_tb
module.exports = regModel                           //exporting the bookModel for redirecting in another page
