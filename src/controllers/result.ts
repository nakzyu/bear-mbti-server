import { Request, Response } from "express";

export const getResult = (req: Request, res: Response) => {
  console.log("get");
};
export const postResult = (req: Request, res: Response) => {
  console.log("post");
};
