import { Request, Response, Router } from "express";
import Hats from "../../models/hats";
import HatsResponse from "./types/HatsResponse";

const router = Router();

router.get("/", async (req: Request, res: Response<HatsResponse>) => {
  try {
    const hats = await Hats.find();

    return res.status(200).json(hats);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response<HatsResponse>) => {
  try {
    const { id } = req.params;

    const hat = await Hats.findOne({ _id: id });

    if (!hat) return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(hat);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
