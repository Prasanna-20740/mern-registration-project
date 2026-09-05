const express = require("express");
const Data = require("../models/user.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      rollNo,
      class: className,
      schoolname,
      phone,
      email,
      address
    } = req.body;

    const newData = new Data({
      name: name,
      rollNo: rollNo,
      class: className,
      schoolname: schoolname,
      phone: phone,
      email: email,
      address: address
    });

    await newData.save();

    res.json({
      success: true,
      message: "User Registered Successfully"
    });

  } catch (error) {
    console.log("Registration Error:", error);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
      error: error.message
    });
  }
});

module.exports = router;