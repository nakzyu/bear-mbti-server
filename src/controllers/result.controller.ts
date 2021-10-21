import { Request, Response } from "express";
import Result from "../models/result";
import * as resultService from "../services/result.service";

export const get = (
  req: Request,
  res: Response
): Response<Record<string, [string, number][]>> => {
  console.log("get req");
  const freqs = resultService.getTypeFreqs();
  return res.status(200).send(freqs);
};
export const post = (
  req: Request,
  res: Response
): Response<Record<string, string>> => {
  console.log("post req");
  const result: Result = req.body;
  const posted = resultService.postOne(result);
  if (posted) return res.status(201).send(posted);
  return res.status(403);
};
