import express from "express";
import { conn } from "../server.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ data: "hi" });
});

router.get("/users", async (req, res) => {
  let sql = `SELECT * FROM users`;

  await conn.execute(sql, (err, result) => {
    if (err)
      res.status(500).json({
        message: err.message,
      });
    res.status(200).json({
      message: "เรียกข้อมูลสำเร็จ",
      data: result,
    });
  });
});

export default router;
