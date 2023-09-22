import { Request, Response, Router } from "express";
import Phones from "../../models/phones";
import PhonesResponse from "./types/PhonesResponse";

const router = Router();

router.get("/", async (req: Request, res: Response<PhonesResponse>) => {
  try {
    const phones = await Phones.find();

    return res.status(200).json(phones);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response<PhonesResponse>) => {
  try {
    const { id } = req.params;

    const phone = await Phones.findOne({ _id: id });

    if (!phone) return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(phone);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
