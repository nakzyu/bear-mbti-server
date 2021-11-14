import { Router } from "express";
import { ResultController } from "../../controllers";
const router = Router();
router.get("/", ResultController.get);
router.get("/length", ResultController.getLength);
router.post("/", ResultController.post);
export default router;
