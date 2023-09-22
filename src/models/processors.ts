import { Schema, model } from "mongoose";
import Processor from "./interfaces/Processor";

const processorSchema = new Schema<Processor>({
  name: String,
  brand: String,
  price: Number,
  imageUrl: String,
  target: String,
  specifications: {
    speed: Number,
    cores: Number,
    logicalProcessors: Number,
  },
});

const Processors = model("Processors", processorSchema);

export default Processors;
