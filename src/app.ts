import express, { Application } from "express";
import { resultController } from "./controllers/result";
import { connectToDatabase } from "./services/db.service";

const app: Application = express();

const port: number = 8080;

connectToDatabase().then(() => {
  console.log("conn");
  app.use("/result", resultController);
  app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
  });
});
