const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  rollNo: {
    type: String,
    required: true
  },

  class: {
    type: String,
    required: true
  },

  schoolname: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  }
});

const Data = mongoose.model("datas", DataSchema);

module.exports = Data;