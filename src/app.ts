import express, { Application } from "express";
import router from "./api/route";
import { connectToDatabase } from "./services/db.service";
import cors from "cors";
import bodyParser from "body-parser";
import { updateRatio } from "./services/result.service";

const app: Application = express();

const init = async () => {
  await connectToDatabase();
  await updateRatio();
  console.log("conn");
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use("/api", router);

  app.listen(process.env.PORT, function () {
    console.log(`App is listening on port ${process.env.PORT} !`);
  });
};

init();
