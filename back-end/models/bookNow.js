const mongoose = require("mongoose");

const bookNowSchema = mongoose.Schema({
  bookUserId: {
    type: String,
  },
  shift: {
    type: String,
    trim: true,
    required: [true, "Please provide shift"],
  },
  date: [
    {
      type: String,
      trim: true,
      required: [true, "Please provide break fast"],
    },
  ],

  guest: [
    {
      type: String,
      trim: true,
      required: [true, "Please provide dinner"],
    },
  ],

  type: [
    {
      type: String,
      trim: true,
      required: [true, "Please provide desert"],
    },
  ],
});

module.exports = mongoose.model("bookedNow", bookNowSchema);
