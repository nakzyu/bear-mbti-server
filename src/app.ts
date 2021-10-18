import express, { Application } from "express";
import { getResult, postResult } from "./controllers/result";

const app: Application = express();

const port: number = 3001;

app.post("/result", postResult);
app.get("/result", getResult);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
