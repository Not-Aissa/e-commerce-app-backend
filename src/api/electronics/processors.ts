import { Request, Response, Router } from "express";
import Processors from "../../models/processors";
import ProcessorsResponse from "./types/ProcessorsResponse";

const router = Router();

router.get("/", async (req: Request, res: Response<ProcessorsResponse>) => {
  try {
    const processors = await Processors.find();

    return res.status(200).send(processors);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response<ProcessorsResponse>) => {
  try {
    const { id } = req.params;

    const processor = await Processors.findOne({ _id: id });

    if (!processor) return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(processor);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
