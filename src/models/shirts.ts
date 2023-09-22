import { Schema, model } from "mongoose";
import Shirt from "./interfaces/Shirt";

const shirtSchema = new Schema<Shirt>({
  name: String,
  brand: String,
  price: Number,
  imageUrl: String,
  target: String,
  colors: [String],
  sizes: [String],
});

const Shirts = model("Shirts", shirtSchema);

export default Shirts;
