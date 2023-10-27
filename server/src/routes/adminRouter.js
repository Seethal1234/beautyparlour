var express = require("express");
const adminRouter = express.Router();
const employeeModel = require("../models/employeeModel");
const productModel = require("../models/productModel");
const bcrypt =require("bcryptjs")
const mongoose = require("mongoose");
const multer = require('multer');
const loginModel = require("../models/loginModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../my-app/public/images/new')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename)
  }
})

const upload = multer({ storage: storage })

adminRouter.post( "/addproduct",upload.single('file'), async (req, res) => {
  try {
          let product = {  productname: req.body.productname, price: req.body.price, category: req.body.category ,description: req.body.description,image:req.body.image}
              const result = await productModel(product).save()
           console.log(product);
      if (result) {
          res.status(201).json({ success: true, error: false, message: "Product Added", details: result });
         
      }
  } catch (error) {
      res.status(500).json({ success: false, error: true, message: "Failed to add product" });
      console.log(error);
  }
  
      
  });

adminRouter.post( "/add-employee", async (req, res) => {
    try {   
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      console.log(hashedPassword);
            let addemployee = {  employeename: req.body.employeename, address: req.body.address, phone: req.body.phone ,gender: req.body.gender,qualification:req.body.qualification,username:req.body.username,password:hashedPassword}
                const result = await employeeModel(addemployee).save()
            
            let employeelog ={username:req.body.username,password:hashedPassword,role:3}
                const result1 = await loginModel(employeelog).save()
                console.log("hi");

        if (result) {
            res.status(201).json({ success: true, error: false, message: "employee registered", details: result });
        }
        if (result1) {
          res.status(201).json({ success: true, error: false, message: "employee login info registerd", details: result });
      }

    } catch (error) {
        res.status(500).json({ success: false, error: true, message: "Failed to add employee" });
        console.log(error);
    }
});
    
adminRouter.get("/view-employee",async(req,res)=>{          
    try{
        const employeedata= await employeeModel.find()
        if(employeedata[0]){
            return res.status(200).json({success:true,error:false,employee_details:employeedata})
            
        }else{
            return res.status(400).json({success:false,error:true,message:"No employee found"})
        }
    }catch(error){
        return res.status(400).json({success:false,error:true,message:"something went wrong"})
    }
 
})

adminRouter.get("/employeedetails/:employeeid", async (req, res) => { 

    try{
        const id =req.params._id
        const data=await employeeModel.findOne({_id:id})

        if (data) { 

            return res.status(200).json({ success: true, error: false, employee_details: data })

        } else {

            return res.status(400).json({ success: false, error: true, message: "No employee found" })
        }

    }catch(error){

        return res.status(400).json({ success: false, error: true, message: "something went wrong" })

    }
})

adminRouter.post("/update-employee", async (req, res) => {             //to update
  
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
      if(datas){

        return res.status(200).json({ success: true, error: false, message: "updated",result:data });
      }
      

      else {

        return res.status(400).json({ success: false, error: true, message: "Failed to update" })
    }
     
    } catch (error) {}
  });

adminRouter.get("/employeedelete/:id", async (req, res) => {
    try {
      
      const deleteData= await employeeModel.deleteOne({ _id: req.params._id })
      if(deleteData.deletedCount==1){
        res.status(201).json({ success: true, error: false, message: "employee deleted",service_details:deleteData });
               
      }else{
        res.status(500).json({ success: false, error: true, message: "Failed to delete" });

      }
    } catch (error) {}
  });
        





 
    
    adminRouter.get("/view-product",async(req,res)=>{          
        try{
            const productdata= await productModel.find()
            if(productdata[0]){
                return res.status(200).json({success:true,error:false,product_details:productdata})
            }else{
                return res.status(400).json({success:false,error:true,message:"No product found"})
            }
        }catch(error){
            return res.status(400).json({success:false,error:true,message:"something went wrong"})
        }
    })
    
    adminRouter.get("/productdetails/:productid", async (req, res) => { 
    
        try{
            const id =req.params.productid
            const data=await productModel.findOne({_id:id})
    
            if (data) { 
    
                return res.status(200).json({ success: true, error: false, Product_details: data })
    
            } else {
    
                return res.status(400).json({ success: false, error: true, message: "No Product found" })
            }
    
        }catch(error){
    
            return res.status(400).json({ success: false, error: true, message: "something went wrong" })
    
        }
    })
    
    adminRouter.post("/update-product", async (req, res) => {             //to update
      
        try {
          const product_id = req.body._id;
          const data = {
            productname: req.body.productname,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
       
          };
          console.log(data);
    
          const datas = await productModel.updateOne({ _id: product_id},{$set:data}); 
         console.log(datas);
          if(datas.modifiedCount==1){
    
            return res.status(200).json({ success: true, error: false, message: "updated" });
          }
          
    
          else {
    
            return res.status(400).json({ success: false, error: true, message: "Failed to update" })
        }
         
        } catch (error) {}
      });

    adminRouter.get("/productdelete/:id", async (req, res) => {
        try {
          
          const deleteData= await productModel.deleteOne({ _id: req.params.id })
          if(deleteData.deletedCount==1){
            res.status(201).json({ success: true, error: false, message: "product deleted",employee_details:deleteData });
                   
          }else{
            res.status(500).json({ success: false, error: true, message: "Failed to delete" });
    
          }
        } catch (error) {}
      });
      












module.exports = adminRouter;