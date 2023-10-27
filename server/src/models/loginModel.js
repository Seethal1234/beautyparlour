const mongoose  = require("mongoose");   //connecting mongoose db to a const
const schema = mongoose.Schema          // schema to create and structure
const loginSchema = new schema({        //adding new schema
    username:{type:String,required:true},  
    password:{type:String,required:true},        //fields and types
    role:{type:String,required:true},        //fields and types
    
})

const loginModel = mongoose.model('login_tb',loginSchema) //adding the structure and value to a table book_tb
module.exports = loginModel                            //exporting the bookModel for redirecting in another page
