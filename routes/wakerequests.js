const express = require("express");
const WakeRequest = require("../models/WakeRequest");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const wakeRequests = await WakeRequest.find();
    res.send(wakeRequests);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.get("/:id", async (req, res) => {
  try {
    const wakeRequest = await WakeRequest.findById(req.params.id);
    res.send(wakeRequest);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.post("/", async (req, res) => {
  try {
    const newWakeRequest = await WakeRequest.create(req.body);
    res.send(newWakeRequest);
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await WakeRequest.updateOne({ _id: req.params.id }, req.body);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await WakeRequest.deleteOne({ _id: req.params.id });
    res.send();
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

module.exports = router;
