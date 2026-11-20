import express from "express";
import router from "./routes";

const app = express();
const routes = router;

app.use(express.json());
app.use("/", routes);

app.listen(3000);
