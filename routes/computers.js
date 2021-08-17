const express = require("express");
const Computer = require("../models/Computer");

const router = express.Router();

router.get("/", async (req, res) => {
  const computers = await Computer.find();
  res.send(computers);
});

router.get("/:id", async (req, res) => {
  try {
    const computer = await Computer.findById(req.params.id);
    res.send(computer);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.post("/", async (req, res) => {
  if (!req.body.computer)
    res.status(400).send("You must send a computer object in the body!");

  console.log(req.body.computer);
  try {
    const newComputer = await Computer.create(req.body.computer);
    res.send({ computer: newComputer });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Computer.deleteOne({ _id: req.params.id });
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedComputer = await Computer.updateOne(
      { _id: req.params.id },
      { ...req.body.computer }
    );
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

module.exports = router;
