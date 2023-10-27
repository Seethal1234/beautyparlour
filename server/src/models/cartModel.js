const  mongoose = require("mongoose");
const schema = mongoose.Schema
const cartSchema =new schema({
    user_id: { type: schema.Types.ObjectId, ref: "reg_tb" },
    product_id: { type: schema.Types.ObjectId, ref: "product_tb" },
    status:{type:String,required:true},
    quantity:{type:String,required:true},
})

const cartModel = mongoose.model("cart_tb",cartSchema); 
module.exports = cartModel;

