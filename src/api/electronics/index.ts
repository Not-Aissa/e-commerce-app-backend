import { Router } from "express";
import monitorsRouter from "./monitors";
import graphicsCardsRouter from "./graphicsCards";
import processorsRouter from "./processors";
import phonesRouter from "./phones";

const router = Router();

router.use("/monitors", monitorsRouter);
router.use("/graphicsCards", graphicsCardsRouter);
router.use("/processors", processorsRouter);
router.use("/phones", phonesRouter);

export default router;
