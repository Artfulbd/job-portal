const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\+\d{1,4}-\d{10}/.test(v);
      },
      msg: "Phone number is invalid!",
    },
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("RecruiterInfo", schema);