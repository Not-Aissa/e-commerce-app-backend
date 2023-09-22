import { Request, Response, Router } from "express";
import ShirtsResponse from "./types/ShirtsResponse";
import Shirts from "../../models/shirts";

const router = Router();

router.get("/", async (req: Request, res: Response<ShirtsResponse>) => {
  try {
    const shirts = await Shirts.find();

    return res.status(200).json(shirts);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response<ShirtsResponse>) => {
  try {
    const { id } = req.params;

    const shirt = await Shirts.findOne({ _id: id });

    if (!shirt) return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(shirt);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
