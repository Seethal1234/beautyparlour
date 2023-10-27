const mongoose = require("mongoose"); //connecting mongoose db to a const
const schema = mongoose.Schema; // schema to create and structure
const productSchema = new schema({
  productname: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const productModel = mongoose.model("product_tb", productSchema); //adding the structure and value to a table book_tb
module.exports = productModel;
