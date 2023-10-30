const mongoose = require("mongoose");

const MockSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  participants: {
    type: Number,
    trim: true,
  },
  time:{
    type: String,
    trim: true,
  },
  img : {
    type: String,
    required: true,
    trim: true,
  },
  price :{
    type: Number,
    required: true,
    trim: true,
  }


});

module.exports = mongoose.model("MOCKTEST", MockSchema);
