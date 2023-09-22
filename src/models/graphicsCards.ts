import { Schema, model } from "mongoose";
import GraphicsCard from "./interfaces/GraphicsCard";

const graphicsCardSchema = new Schema<GraphicsCard>({
  name: String,
  brand: String,
  subBrand: String,
  price: Number,
  imageUrl: String,
  target: String,
  specifications: {
    vram: String,
    ports: [String],
  },
});

const GraphicsCards = model("GraphicsCards", graphicsCardSchema);

export default GraphicsCards;
