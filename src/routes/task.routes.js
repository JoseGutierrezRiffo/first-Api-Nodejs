import { Router } from "express";
import { connect } from "../database/database";
import uuid from "uuid";

const router = Router();

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db
    .collection("tasks")
    .find({})
    .toArray();

  await res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("tasks").findOne({ _id: id });
  await res.json(result);
});

router.post("/", async (req, res) => {
  const db = await connect();
  const task = {
    _id: uuid(),
    title: req.body.title,
    description: req.body.description
  };
  const result = await db.collection("tasks").insertOne(task);
  await res.json(result.ops[0]);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const updateTask = {
    title: req.body.title,
    description: req.body.description
  };
  await db.collection("tasks").updateOne({ _id: id }, { $set: updateTask });
  await res.json({
    message: `Task ${id} updated`
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("tasks").deleteOne({ _id: id });
  await res.json({
    message: `Tasks ${id} deleted`,
    result
  });
});

export default router;
