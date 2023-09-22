import { Request, Response, Router } from "express";
import GraphicsCards from "../../models/graphicsCards";
import GraphicsCardsResponse from "./types/GraphicsCardsResponse";

const router = Router();

router.get("/", async (req: Request, res: Response<GraphicsCardsResponse>) => {
  try {
    const graphicsCards = await GraphicsCards.find();

    return res.status(200).json(graphicsCards);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response<GraphicsCardsResponse>) => {
  try {
    const { id } = req.params;

    const graphicsCard = await GraphicsCards.findOne({ _id: id });

    if (!graphicsCard) return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(graphicsCard);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
