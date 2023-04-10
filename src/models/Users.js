const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", schema);

module.exports = User;
