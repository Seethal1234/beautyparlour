const mongoose  = require("mongoose");   //connecting mongoose db to a const
const schema = mongoose.Schema          // schema to create and structure
const employeeSchema = new schema({  
    
    login_id:{type: schema.Types.ObjectId , ref:"login_tb"}, 
    employeename:{type:String,required:true},  
    address:{type:String,required:true},        
    phone:{type:String,required:true},
    gender:{type:String,required:true}, 
    qualification:{type:String,required:true}, 
   
})

const employeeModel = mongoose.model('emp_tb',employeeSchema) //adding the structure and value to a table book_tb
module.exports = employeeModel                               //exporting the bookModel for redirecting in another page
