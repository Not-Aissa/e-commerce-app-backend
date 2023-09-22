import { Request, Response, Router } from "express";
import Hats from "../models/hats";
import Shirts from "../models/shirts";
import Monitors from "../models/monitors";
import GraphicsCards from "../models/graphicsCards";
import Processors from "../models/processors";
import Phones from "../models/phones";
import ProductsResponse from "./types/ProductsResponse";
import Product from "../interfaces/Product";
import { shuffleData } from "../app";

const router = Router();

router.get("/", async (req: Request, res: Response<ProductsResponse>) => {
  try {
    const hats = (await Hats.find()).map((item) => {
      const { _id, name, brand, price, imageUrl, target } = item;

      return { _id, name, brand, price, imageUrl, target };
    });

    const shirts = (await Shirts.find()).map((item) => {
      const { _id, name, brand, price, imageUrl, target } = item;

      return { _id, name, brand, price, imageUrl, target };
    });

    const monitors = (await Monitors.find()).map((item) => {
      const { _id, name, brand, price, imageUrl, target } = item;

      return { _id, name, brand, price, imageUrl, target };
    });

    const graphicsCards = (await GraphicsCards.find()).map((item) => {
      const { _id, name, brand, price, imageUrl, target } = item;

      return { _id, name, brand, price, imageUrl, target };
    });

    const processors = (await Processors.find()).map((item) => {
      const { _id, name, brand, price, imageUrl, target } = item;

      return { _id, name, brand, price, imageUrl, target };
    });

    const phones = (await Phones.find()).map((item) => {
      const { _id, name, brand, price, imageUrl, target } = item;

      return { _id, name, brand, price, imageUrl, target };
    });

    const products: Product[] = [...hats, ...shirts, ...monitors, ...graphicsCards, ...processors, ...phones];

    return res.status(200).json(shuffleData(products));
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;
