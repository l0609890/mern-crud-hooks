//this is going to be the crud application for users
//since user can't be deleted or edited it will only include the cr part of crud

const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//create exercise

router.post("/create-user", async (req, res) => {
  try {
    let { username } = req.body;

    let user = new User({
      username
    });

    await user.save();

    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
