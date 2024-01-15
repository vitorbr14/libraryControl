import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import auth from "./routes/author";
import fs from "fs";
import { errorMiddleware } from "./middlewares/error";
import {
  ApiError,
  BadRequestError,
  UnauthorizedError,
} from "./errors/api-errors";

const app = express();
app.use(express.json());

app.use("/api/v1/", auth);

app.use(errorMiddleware);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
