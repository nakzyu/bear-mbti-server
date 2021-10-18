import { Router } from "express";
import { ResultController } from "../../controllers";
const router = Router();
router.get("/", ResultController.get);
router.post("/", ResultController.post);
export default router;
