var express = require("express");
const { default: mongoose } = require("mongoose");
const serviceModel = require("../models/serviceModel");
const employeeRouter = express.Router();


employeeRouter.post( "/add-service", async (req, res) => {
    try {
      console.log(req);
            let addservice = {  category: req.body.category, nameofservice: req.body.nameofservice, description: req.body.description ,price: req.body.price,image:req.body.image}
                const result = await serviceModel(addservice).save()
             console.log(addservice);
        if (result) {
            res.status(201).json({ success: true, error: false, message: "Service added", details: result });
           
        }
        console.log(result)
    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Failed to add service" });
        // console.log(error);
    }
});
    
employeeRouter.get("/view-service",async(req,res)=>{          
    try{
        const servicedata= await serviceModel.find()
        if(servicedata[0]){
            return res.status(200).json({success:true,error:false,service_details:servicedata})
            
        }else{
            return res.status(400).json({success:false,error:true,message:"No service found"})
        }
    }catch(error){
        return res.status(400).json({success:false,error:true,message:"something went wrong"})
    }
 
})

employeeRouter.get("/servicedetails/:serviceid", async (req, res) => { 

    try{
        const id =req.params.serviceid
        const data=await serviceModel.findOne({_id:id})

        if (data) { 

            return res.status(200).json({ success: true, error: false, service_details: data })

        } else {

            return res.status(400).json({ success: false, error: true, message: "No employee found" })
        }

    }catch(error){

        return res.status(400).json({ success: false, error: true, message: "something went wrong" })

    }
})

employeeRouter.post("/update-service", async (req, res) => {             //to update
  
    try {
      const employee_id = req.body._id;
      const data = {
        employeename: req.body.employeename,
        address: req.body.address,
        phone: req.body.phone,
        gender: req.body.gender,
        qualification:req.body.qualification
      };
      console.log(data);

      const datas = await employeeModel.updateOne({ _id: employee_id},{$set:data}); 
     console.log(datas);
      if(datas.modifiedCount==1){

        return res.status(200).json({ success: true, error: false, message: "updated" });
      }
      

      else {

        return res.status(400).json({ success: false, error: true, message: "Failed to update" })
    }
     
    } catch (error) {}
  });

employeeRouter.get("/servicedelete/:id", async (req, res) => {
    try {
      
      const deleteData= await serviceModel.deleteOne({ _id: req.params._id })
      if(deleteData.deletedCount==1){
        res.status(201).json({ success: true, error: false, message: "service deleted",service_details:deleteDa });
               
      }else{
        res.status(500).json({ success: false, error: true, message: "Failed to delete" });

      }
    } catch (error) {}
  });



// employeeRouter.post( "/", async (req, res) => {
//     try {
       
//         const employee = await loginModel.findOne({ username: req.body.username });
//         if (employee) {
//             return res.status(400).json({ success: false, error: true, message: "employee already exists" });
//         }

//          const oldphone = await employeeModel.findOne({ phone:req.body.phone });
//         if (oldphone) { 
//             return res.status(400).json({ success: false, error: true, message: "Phone number already exists" });
//          }
//             let log = {username: req.body.username, password: req.body.password, role: 3 } 
//             const result = await loginModel(log).save()
//             let reg = { login_id: result._id, employeename: req.body.employeename, address: req.body.address, phone: req.body.phone ,email: req.body.email,gender: req.body.gender,qualification: req.body.qualification,username: req.body.username,password: req.body.password}
//             const result2 = await employeeModel(reg).save()
//     if (result2) {
//         res.status(201).json({ success: true, error: false, message: "Registration completed", details: result2 });
//     }
// } catch (error) {
//     res.status(500).json({ success: false, error: true, message: "Something went wrong" });
//     console.log(error);
// }
       
// });

// employeeRouter.get("/employeedetails",async(req,res)=>{        
//     try{
//         const userdata= await employeeModel.find()
//         if(userdata[0]){
//             return res.status(200).json({success:true,error:false,user_details:userdata})
//         }else{
//             return res.status(400).json({success:false,error:true,message:"No data found"})
//         }
//     }catch(error){
//         return res.status(400).json({success:false,error:true,message:"something went wrong"})
//     }
// })

// employeeRouter.get("/employeedetails/:empid", async (req, res) => { 

//     try{
//         const userid=req.params.empid
//         const data=await employeeModel.aggregate([   //to connect different tables details
//             {
//                 '$lookup': {
//                     'from': 'login_tbs', 
//                     'localField': 'login_id', 
//                     'foreignField': '_id', 
//                     'as': 'employee'
//                 }
//               },
//               {
//                 '$unwind':'$employee'  //to empty array delete and convert array to object
//             },
//             {
//                 '$match':{
//                     '_id':new mongoose.Types.ObjectId(userid)    //to view details of one given id
//                 }
//             },
//             {
//                 '$group':{
//                     '_id':'$_id',
//                     'employeename':{'$first':'$employeename'},
//                     'address':{'$first':'$address'},
//                     'username':{'$first':'$employee.username'}, //to take details from  another tables 
//                 }
//             }
//         ])


//         if (data) { 

//             return res.status(200).json({ success: true, error: false, user_details: data })

//         } else {

//             return res.status(400).json({ success: false, error: true, message: "No data found" })
//         }

//     }catch(error){

//         return res.status(400).json({ success: false, error: true, message: "something went wrong" })

//     }
// })

module.exports = employeeRouter;