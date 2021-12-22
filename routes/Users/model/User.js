const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
  firstName:{
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  username:{
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})


module.exports = mongoose.model("user", userSchema)