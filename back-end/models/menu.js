const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  userId: {
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

  price: {
    type: Number,
    trim: true,
    required: [true, "product name must be provided"],
  },
});

module.exports = mongoose.model("menu", menuSchema);
