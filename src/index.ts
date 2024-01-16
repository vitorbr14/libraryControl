import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import auth from "./routes/author";
import books from "./routes/books";
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
app.use("/api/v1/", books);
// app.use(errorMiddleware);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
