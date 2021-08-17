const mongoose = require("mongoose");

const computerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mac: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Computer", computerSchema);
