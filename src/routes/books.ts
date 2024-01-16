import express, { Request, Response, Router } from "express";
import { newbook } from "../controllers/books";
const router = express.Router();

router.route("/newbook").post(newbook);

export default router;
