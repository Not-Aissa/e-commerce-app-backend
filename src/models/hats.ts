import { Schema, model } from "mongoose";
import Hat from "./interfaces/Hat";

const hatSchema = new Schema<Hat>({
  name: String,
  brand: String,
  price: Number,
  imageUrl: String,
  target: String,
  colors: [String],
  sizes: [String],
});

const Hats = model("Hats", hatSchema);

export default Hats;
