const { handle } = require("express/lib/application");
const mongoose = require("mongoose")
require("dotenv").config({path : "./.env"});
const uri = process.env.ATLAS_URI
const connectDB = async()=>{
  try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log("DB connected ....");
  } catch (error) {
      handleError(error)
  }

}
module.exports = connectDB