const express = require("express");

const User = require("../models/Users");

const router = express.Router();

const getUserOrError = async (filter) => {
  const user = await User.findOne(filter);
  if (user === null) throw new Error("User not found");
  return user;
};

router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (error) {
    response.json({
      message: "Error",
    });
  }
});

router.post("/", async (request, response) => {
  const { firstName, lastName, email, phone } = request.body;
  try {
    await User.create({
      firstName,
      lastName,
      email,
      phone,
    });
    response.json({
      message: "User created",
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

router.put("/:email", async (request, response) => {
  const { email } = request.params;
  const { firstName, lastName, phone } = request.body;
  try {
    await getUserOrError({ email });
    await User.updateOne({ email }, { firstName, lastName, phone });

    response.json({
      message: "User updated",
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

router.delete("/:email", async (request, response) => {
  const { email } = request.params;

  try {
    await getUserOrError({ email });
    await User.deleteOne({ email });

    response.json({
      message: "User deketed",
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
