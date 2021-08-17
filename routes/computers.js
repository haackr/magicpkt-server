require("dotenv").config();
const express = require("express");
const Computer = require("../models/Computer");

const router = express.Router();

router.get("/", async (req, res) => {
  const computers = await Computer.find();
  res.send(computers);
});

module.exports = router;
