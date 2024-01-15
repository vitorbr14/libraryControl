import express, { Request, Response, Router } from "express";
import {
  deleteAuthor,
  editAuthor,
  newauthor,
  singleAuthor,
} from "../controllers/author";
const router = express.Router();

router.route("/newauthor").post(newauthor);
router.route("/author/:id").get(singleAuthor);
router.route("/author/:idauthor").patch(editAuthor);
router.route("/author/:idauthor").delete(deleteAuthor);
export default router;
