const express = require("express"),
  router = express.Router();
const e = require("express");
const Task = require("../../models/task");

router.post("/add", async (req, res) => {
  try {
    const { userId, todo } = req.body;
    const task = Task.create({ userId, todo });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/get", async (req, res) => {
  try {
    const tasks = Task.find({ userId: req.body.userId }).exec();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/edit", async (req, res) => {
  try {
    const task = Task.findOneAndUpdate(
      { _id: req.body.id },
      { $set: { todo: req.body.todo } }
    ).exec();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/edit", async (req, res) => {
  try {
    const task = Task.findOneAndRemove({ _id: req.body.id }).exec();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
