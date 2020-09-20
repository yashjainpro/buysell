const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  location: [
    {
      FlatNo: {
        type: String,
        required: true,
      },
      Address1: {
        type: String,
        required: true,
      },
      Address2: {
        type: String,
        required: true,
      },
    },
  ],

  contact: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cards: [
    {
      Cardno: {
        type: Number,
        required: true,
      },
      expiry: {
        type: String,
        required: true,
      },
      cvv: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("profile", ProfileSchema);
