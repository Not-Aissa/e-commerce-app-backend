import { Request, Response, Router } from "express";
import Monitors from "../../models/monitors";
import MonitorsResponse from "./types/MonitorsResponse";

const router = Router();

router.get("/", async (req: Request, res: Response<MonitorsResponse>) => {
  try {
    const monitors = await Monitors.find();

    return res.status(200).json(monitors);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req: Request, res: Response<MonitorsResponse>) => {
  try {
    const { id } = req.params;

    const monitor = await Monitors.findOne({ _id: id });

    if (!monitor) return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(monitor);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
