import express, { Application } from "express";
import router from "./api/route";
import { connectToDatabase } from "./services/db.service";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();

const port: number = 8080;

connectToDatabase().then(() => {
  console.log("conn");
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use("/api", router);
  app.listen(port, function () {
    console.log(`App is listening on port ${port} !`);
  });
});