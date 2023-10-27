var express = require("express");
const regModel = require("../models/regModel");
const loginModel = require("../models/loginModel");
const { default: mongoose } = require("mongoose");
const regRouter = express.Router();
const bcrypt =require("bcryptjs")

regRouter.post( "/register", async (req, res) => {   //to add 
    try {
       
        const oldUser = await loginModel.findOne({ username: req.body.username });
        if (oldUser) {
            
            return res.status(400).json({ success: false, error: true, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
         const oldphone = await regModel.findOne({ phone:req.body.phone });
        if (oldphone) { 
            return res.status(400).json({ success: false, error: true, message: "Phone number already exists" });
         }
            let log = {username: req.body.username, password: hashedPassword, role: 2 } 
            const result = await loginModel(log).save()
            let reg = { login_id: result._id, name: req.body.name, address: req.body.address, phone: req.body.phone ,email: req.body.email,gender: req.body.gender,username: req.body.username,password: req.body.password}
            const result2 = await regModel(reg).save()
            
    if (result2) {
        res.status(201).json({ success: true, error: false, message: "Registration completed", details: result2 });
    }
} catch (error) {
    res.status(500).json({ success: false, error: true, message: "Something went wrong" });
    console.log(error);
}
       
});

// regRouter.get("/userdetails",async(req,res)=>{          //to view user details
//     try{
//         const userdata= await regModel.find()
//         if(userdata[0]){
//             return res.status(200).json({success:true,error:false,user_details:userdata})
//         }else{
//             return res.status(400).json({success:false,error:true,message:"No data found"})
//         }
//     }catch(error){
//         return res.status(400).json({success:false,error:true,message:"something went wrong"})
//     }
// })

//view details of one user (get one id)

// regRouter.get("/userdetails/:regid", async (req, res) => { 

//     try{
//         const userid=req.params.regid
//         const data=await regModel.aggregate([
//             {
//               '$lookup': {                       //to match tables
//                 'from': 'login_tbs', 
//                 'localField': 'login_id', 
//                 'foreignField': '_id', 
//                 'as': 'login'
//               }
//             },
//             {
//                 '$unwind':'$login'  //empty array delete and convert array to object
//             },
//             {
//                 '$match':{
//                     '_id':new mongoose.Types.ObjectId(userid)    //to view details of one given id
//                 }
//             },
//             {
//                 '$group':{
//                     '_id':'$_id',
//                     'name':{'$first':'$name'},
//                     'address':{'$first':'$address'},
//                     'username':{'$first':'$login.username'}, //to take details from  another tables 
//                 }
//             }
//           ])

//         if (data) { 

//             return res.status(200).json({ success: true, error: false, user_details: data })

//         } else {

//             return res.status(400).json({ success: false, error: true, message: "No data found" })
//         }

//     }catch(error){

//         return res.status(400).json({ success: false, error: true, message: "something went wrong" })

//     }
// })



module.exports = regRouter;

