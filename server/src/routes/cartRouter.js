var express = require("express");
const cartRouter = express.Router();
const mongoose = require("mongoose");
const cartModel = require("../models/cartModel");
const checkAuth = require("../../middlewares/checkAuth");

//to add product to cart:taking id of user  to know who added product to cart
cartRouter.post("/add",checkAuth, async (req, res) => {
  try {
    const add_to_cart = {
      user_id: req.userData.userId,
      product_id: req.body.product_id,
      status: 0,
      quantity:1,
    };
    const cart_details = await cartModel(add_to_cart).save();

    if (cart_details) {
      res.status(201).json({
        success: true,
        error: false,
        message: "added to cart",
        details: cart_details,
      });
    }
    console.log(cart_details);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: true, message: "Failed to add" });
    console.log(error);
  }
});
//taking product id

cartRouter.get("/view-cart",checkAuth, async (req, res) => {
  try {
    const cartdata = {
      user_id: req.userData.userId,
      product_id: req.body.product_id,
      status: 0,
      quantity:1,
    };

    const data = await cartModel.aggregate([
      {
        $lookup: {
          from: "product_tbs",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product"
      },

      {
        $match :{
            user_id: new mongoose.Types.ObjectId(cartdata.user_id)
        }
      },


   

      {
        '$group': {
          _id: "$_id",
          productname: { $first: "$product.productname" },
          image: { $first: "$product.image" },
          price: { $first: "$product.price" },
          user_id:{$first: "$user_id"},
          quantity:{$first: "$quantity"}
        },
      },
    ]);
    console.log(data);


    if (data[0]) {
      return res
        .status(200)
        .json({ success: true, error: false, cart_details: data });
    } else {
      return res
        .status(400)
        .json({ success: false, error: true, message: "Not found" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "something went wrong" });
  }
});

cartRouter.get("/increment/:id",async(req,res)=>{
  try{
    const cartid = req.params.id;
    const cartdata= await cartModel.findOne({_id:cartid})  //_id is from model here anything inside model can be given
    const data={
      quantity : parseInt(cartdata.quantity)+1 //quanity string so parseint
    }
    console.log("quantity",data);
    
    const datas = await cartModel.updateOne({ _id: cartid},{$set:data}); 
    
    if(datas.modifiedCount==1){

      return res.status(200).json({ success: true, error: false, message: "increased", result:datas});
    }
    

    else {

      return res.status(400).json({ success: false, error: true, message: "Failed to increase" })
  }
  }
  catch(error){

  }
})

cartRouter.post("/decrement/:id",async(req,res)=>{
  try{
    const cartid = req.params.id;
    const cartdata= await cartModel.findOne({_id:cartid})  //_id is from model here anything inside model can be given
    const data={
      quantity : parseInt(cartdata.quantity)-1 //quanity string so parseint
    }
    console.log(data);
    
    const datas = await cartModel.updateOne({ _id: cartid},{$set:data}); 
    
    if(datas.modifiedCount==1){

      return res.status(200).json({ success: true, error: false, message: "decreaseed", result:datas});
    }
    

    else {

      return res.status(400).json({ success: false, error: true, message: "Failed to increase" })
  }
  }
  catch(error){

  }
})










module.exports = cartRouter;
