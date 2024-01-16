import express, { Request, Response, Router } from "express";
import { addAuthorToBook, getBook, newbook } from "../controllers/books";
const router = express.Router();

router.route("/newbook").post(newbook);
router.route("/book").patch(addAuthorToBook);
router.route("/book/:bookid").get(getBook);
export default router;
