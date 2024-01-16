import express, { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { connect } from "http2";
const prisma = new PrismaClient();

// Criar livro e adicionar um autor já existente nele
export const newbook = async (req: Request, res: Response) => {
  const { bookName, authors } = req.body;
  const newBook = await prisma.books.create({
    data: {
      bookName: bookName,
      authors: {
        create: authors.map((author_id: number) => ({
          author: {
            connect: {
              id: author_id,
            },
          },
        })),
      },
    },
    include: {
      authors: true,
    },
  });

  res.json(newBook);
};
