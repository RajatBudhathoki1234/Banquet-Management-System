const mongoose = require("mongoose");

const bookedSchema = mongoose.Schema({
  bookUserId: {
    type: String,
    trim: true,
    required: [true, "Please provide user id"],
  },
  breakfast: [
    {
      type: String,
      trim: true,
      required: [true, "Please provide break fast"],
    },
  ],

  dinner: [
    {
      type: String,
      trim: true,
      required: [true, "Please provide dinner"],
    },
  ],

  desert: [
    {
      type: String,
      trim: true,
      required: [true, "Please provide desert"],
    },
  ],
});

module.exports = mongoose.model("bookedMenu", bookedSchema);
