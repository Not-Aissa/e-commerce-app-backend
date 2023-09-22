import express from "express";
import PORT from "./config/port";
import { connect, listen, sayHello } from "./app";
import cors from "cors";
import apiRouter from "./api";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/products-api", apiRouter);

connect();

app.get("/", sayHello);

app.listen(PORT, listen);
