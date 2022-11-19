const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "First Name is Required"],
      minlength: [2, "First Name must be longer than 3 characters"],
    },
    position: {
      type: String,
      required: [true, "Position is Required"],
      minlength: [2, "Position must be longer than 2 characters"],
    },
    game1: {
      type: String,
      default: "undecided",
    },
    game2: {
      type: String,
      default: "undecided",
    },
    game3: {
      type: String,
      default: "undecided",
    },
  },
  { timestamps: true }
);

module.exports.Player = mongoose.model("Player", PlayerSchema);
