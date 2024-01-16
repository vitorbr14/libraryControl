import express, { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { connect } from "http2";
const prisma = new PrismaClient();

// Criar novo livro e adicionar um autor já existente nele

export const getBook = async (req: Request, res: Response) => {
  const { bookid } = req.params;

  const book = await prisma.books.findUnique({
    where: {
      id: bookid,
    },
    include: {
      authors: true,
    },
  });
  res.json(book);
};
export const newbook = async (req: Request, res: Response) => {
  const { bookName, authors } = req.body;

  if (!authors) {
    const newBook = await prisma.books.create({
      data: {
        bookName: bookName,
      },
    });

    res.json(newBook);
  }
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

//adicionar um autor existente a um livro existente
export const addAuthorToBook = async (req: Request, res: Response) => {
  const { id, authors } = req.body;
  const findBook = await prisma.books.update({
    where: {
      id: id,
    },
    data: {
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
  });
  res.json(findBook);
};
