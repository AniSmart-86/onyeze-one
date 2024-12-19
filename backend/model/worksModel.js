const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Path to the uploaded image
    // required: true,
    default: "https://i.ibb.co/4pDNDk1/avatar.png",
  },
});

const Workmodel = mongoose.model("Work", WorkSchema);
module.exports = Workmodel