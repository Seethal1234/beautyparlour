const mongoose = require("mongoose");
const schema = mongoose.Schema; 
const productbookingSchema = new schema({
  user_id: { type: schema.Types.ObjectId, ref: "reg_tb" },
  product_id: { type: schema.Types.ObjectId, ref: "product_tb" },
  status:{type:String,required:true},
});

const productbookingModel = mongoose.model("sbook_tb", productbookingSchema); //adding the structure and value to a table book_tb
module.exports = productbookingModel;
