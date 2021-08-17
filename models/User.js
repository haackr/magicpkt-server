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
  computers: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Computer",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
