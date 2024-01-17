// const express = require("express");
// const app = express();

const mongoose = require("mongoose");
const connectDB = async () => {
  mongoose.connect("mongodb://127.0.0.1:27017/ecomm");
  const productSchema = new mongoose.Schema({});
  const product = mongoose.model("product", productSchema);
  const data = await product.find();
  console.log(data);
};

connectDB();

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(5000);