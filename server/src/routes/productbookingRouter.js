var express = require("express");
const productbookingRouter = express.Router();
const productbookingModel = require("../models/productbookingModel");
const mongoose = require("mongoose");
const multer = require("multer");
const checkAuth = require("../../middlewares/checkAuth");

productbookingRouter.post("/book",checkAuth, async (req, res) => {
  try {
    const productdata = {
      user_id: req.userData.userId,
      product_id: req.body.id,
      status: 0,
    };

    const booking = await productbookingModel(productdata).save();

    if (booking) {
      res
        .status(201)
        .json({
          success: true,
          error: false,
          message: "booking success",
          details: booking,
        });
    }
    console.log(booking);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: true, message: "Failed to book" });
    console.log(error);
  }
});

productbookingRouter.get("/bookedproducts/:pro_id", async (req, res) => {
  try {
    const productid = req.params.pro_id;
    const data = await productbookingModel.aggregate([
      {
        $match: {
          product_id: new mongoose.Types.ObjectId(productid),
          //to view details of one given id
          //product_id is from  model
        },
      },
    ]);

    if (data) {
      return res
        .status(200)
        .json({ success: true, error: false, product_details: data });
    } else {
      return res
        .status(400)
        .json({ success: false, error: true, message: "No data found" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "something went wrong" });
  }
});

productbookingRouter.get("/view-booked",checkAuth, async (req, res) => {
  try {
    const bookingdata = {
      user_id: req.userData.userId,
      product_id: req.body.product_id,
      status: 0,
    };

    const data = await productbookingModel.aggregate([
      {
        $lookup: {
          from: "product_tbs",
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },

      {
        $match :{
            user_id: new mongoose.Types.ObjectId(bookingdata.user_id)
        }
      },

      {
        $unwind: "$product",
      },

      {
        '$group': {
          '_id': "$_id",
          'productname': { $first: "$product.productname" },
          'image': { $first: "$product.image" },
          'price': { $first: "$product.price" },
          'user_id':{$first: "$user_id"}
        },
      },
    ]);
    console.log(data);

    

    if (data[0]) {
      return res
        .status(200)
        .json({ success: true, error: false, booked_details: data });
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


module.exports = productbookingRouter;
