import express, { Request, Response } from "express";
import Result from "../models/result";
import { collections } from "../services/db.service";

export const resultController = express.Router();
resultController.use(express.json());
resultController.get("/", (req: Request, res: Response) => {
  collections.result?.insertOne(new Result("a", "a", new Date()));
  res.end();
});
