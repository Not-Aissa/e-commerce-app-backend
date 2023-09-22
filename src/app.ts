import { Request, Response } from "express";
import MessageResponse from "./interfaces/MessageResponse";
import PORT from "./config/port";
import mongoose from "mongoose";
import URI from "./config/uri";
import Product from "./interfaces/Product";

export function sayHello(req: Request, res: Response<MessageResponse>): void {
  res.status(200).json({ message: "Hello world!" });
}

export function listen(): void {
  console.log(`App start at: http://localhost:${PORT}`);
}

export async function connect() {
  try {
    await mongoose.connect(URI);

    console.log("DB connected");
  } catch (error: any) {
    console.log(error.message);
  }
}

export function shuffleData(data: Product[]): Product[] {
  for (let i = data.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [data[i], data[j]] = [data[j], data[i]];
  }

  return data;
}
