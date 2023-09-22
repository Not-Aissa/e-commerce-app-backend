import { Schema, model } from "mongoose";
import Monitor from "./interfaces/Monitor";

const monitorSchema = new Schema<Monitor>({
  name: String,
  brand: String,
  price: Number,
  imageUrl: String,
  target: String,
  specifications: {
    resolution: String,
    delay: Number,
    ports: [String],
    displayType: String,
    refreshRate: Number,
  },
});

const Monitors = model("Monitors", monitorSchema);

export default Monitors;
