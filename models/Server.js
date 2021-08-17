const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  account: {
    type: mongoose.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  computers: [
    {
      computer: {
        type: mongoose.Types.ObjectId,
        ref: "Computer",
      },
    },
  ],
});

module.exports = mongoose.model("Server", serverSchema);
