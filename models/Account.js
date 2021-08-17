const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  admins: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  keys: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Account", accountSchema);
