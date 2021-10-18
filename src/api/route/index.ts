import { Router } from "express";
import ResultRouter from "./result.router";

const router = Router();

router.use("/result", ResultRouter);

export default router;
