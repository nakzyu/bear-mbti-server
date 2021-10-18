import express, { Request, Response } from "express";
import Result from "../models/result";
import { collections } from "../services/db.service";

export const get = (req: Request, res: Response) => {
  res.end();
};
export const post = (req: Request, res: Response) => {
  const result: Result = req.body;
  collections.result?.insertOne(new Result(result.type));
  res.end();
};
