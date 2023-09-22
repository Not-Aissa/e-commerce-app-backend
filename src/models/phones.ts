import { Schema, model } from "mongoose";
import Phone from "./interfaces/Phone";

const phoneSchema = new Schema<Phone>({
  name: String,
  brand: String,
  price: Number,
  imageUrl: String,
  target: String,
  specifications: {
    storage: Number,
    ram: Number,
    battery: Number,
    processor: String,
    cameras: {
      front: Number,
      rear: [Number],
    },
    screenType: String,
    screenSize: Number,
    system: String,
    systemVersion: Number,
  },
});

const Phones = model("Phones", phoneSchema);

export default Phones;
