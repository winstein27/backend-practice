import express from "express";
import { createRouter } from "./routes";

const app = express();

app.use(express.json());
app.use("/", createRouter());

app.listen(3000);
