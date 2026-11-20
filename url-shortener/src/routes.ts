import express from "express";

const router = express.Router();

router.post("/shorten-url", (req, res) => {
  res.statusCode = 201;
  res.json({ url: "localhost:3000/shortned" });
});

router.get("", (req, res) => {});

export default router;
