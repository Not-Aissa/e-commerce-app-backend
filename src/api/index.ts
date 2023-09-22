import { Request, Response, Router } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import clothesRouter from "./clothes";
import electronicsRouter from "./electronics";
import productsRouter from "./products";

const router = Router();

router.use("/clothes", clothesRouter);
router.use("/electronics", electronicsRouter);
router.use("/products", productsRouter);

router.get("/", (req: Request, res: Response<MessageResponse>) => {
  return res.status(200).json({ message: "Products API - Aissa Bedr" });
});

export default router;
