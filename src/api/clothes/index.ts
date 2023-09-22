import { Router } from "express";
import hatsRouter from "./hats";
import shirtsRouter from "./shirts";

const router = Router();

router.use("/hats", hatsRouter);
router.use("/shirts", shirtsRouter);

export default router;
