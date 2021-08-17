const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  account: {
    type: mongoose.Types.ObjectId,
    ref: "Account",
  },
});

module.exports = mongoose.model("User", userSchema);
