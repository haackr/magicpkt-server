const mongoose = require("mongoose");

const wakeRequestSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  // },
  computer: {
    type: mongoose.Types.ObjectId,
    ref: "Computer",
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("WakeRequest", wakeRequestSchema);
