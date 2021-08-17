const mongoose = require("mongoose");

const wakeRequestSchema = new mongoose.Schema({
  account: {
    type: mongoose.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  server: {
    type: mongoose.Types.ObjectId,
    ref: "Server",
    required: true,
  },
  computer: {
    type: mongoose.Types.ObjectId,
    ref: "Computer",
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("WakeRequest", wakeRequestSchema);
