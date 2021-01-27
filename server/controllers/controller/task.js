const express = require("express"),
  router = express.Router();
const e = require("express");
const Task = require("../../models/task");

router.post("/add", async (req, res) => {
  try {
    const { userId, todo } = req.body;
    const isCompleted = false;
    const task = Task.create({ userId, todo, isCompleted });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/get", async (req, res) => {
  console.log(req.body);
  try {
    const tasks = await Task.find({ userId: req.body.userId }).exec();
    console.log(tasks);
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

router.post("/remove", async (req, res) => {
  try {
    const task = Task.findOneAndDelete({ _id: req.body.id }).exec();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
