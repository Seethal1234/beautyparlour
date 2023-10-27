var express = require("express");
const userRouter = express.Router();
const serviceModel = require("../models/serviceModel");
const productModel = require("../models/productModel");
const mongoose = require("mongoose");
const multer = require('multer');
const checkAuth = require("../../middlewares/checkAuth");


userRouter.get("/view-service",async(req,res)=>{          
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

userRouter.get("/view-product", async(req,res)=>{          
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

userRouter.get("/productdetails/:productid", async (req, res) => { 

    try{
        const id =req.params.productid
        const data=await productModel.findOne({_id:id})

        if (data) { 

            return res.status(200).json({ success: true, error: false, product_details: data })

        } else {

            return res.status(400).json({ success: false, error: true, message: "No employee found" })
        }

    }catch(error){

        return res.status(400).json({ success: false, error: true, message: "something went wrong" })

    }
})
module.exports=userRouter