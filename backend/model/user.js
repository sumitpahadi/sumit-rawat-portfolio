const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  number:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model("User", userSchema);
