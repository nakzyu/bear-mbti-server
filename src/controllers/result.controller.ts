import { Request, Response } from "express";
import Result from "../models/result";
import * as resultService from "../services/result.service";

export const get = (req: Request, res: Response): void => {
  const freqs = resultService.getTypeFreqs();
  res.end(freqs);
};
export const post = (req: Request, res: Response): void => {
  const result: Result = req.body;
  resultService.postOne(result);
  res.end();
};
