const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
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
