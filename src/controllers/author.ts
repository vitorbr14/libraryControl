import express, { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../errors/api-errors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type autor_id = {
  id: number;
};
export const newauthor = async (req: Request, res: Response) => {
  const { authorname } = req.body;

  if (!authorname) {
    throw new BadRequestError("O campo nome é obrigatório.");
  }
  const newAuthor = await prisma.author.create({
    data: {
      name: authorname,
    },
  });
  res.json(newAuthor);
};

export const singleAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    throw new BadRequestError("Insira o ID do autor");
  }

  const autor = await prisma.author.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!autor) {
    throw new NotFoundError("Autor não encontrado");
  }

  res.json(autor);
};

export const editAuthor = async (req: Request, res: Response) => {
  const { idauthor } = req.params;
  const { authorname } = req.body;
  if (!idauthor) {
    throw new BadRequestError("Insira o ID do autor");
  }

  const upadteAuthor = await prisma.author.update({
    where: {
      id: Number(idauthor),
    },
    data: {
      name: authorname,
    },
  });

  if (!upadteAuthor) {
    throw new NotFoundError("Autor não encontrado");
  }

  res.json(upadteAuthor);
};

export const deleteAuthor = async (req: Request, res: Response) => {
  const { idauthor } = req.params;
  if (!idauthor) {
    throw new BadRequestError("Insira o ID do autor");
  }

  const deleteAuthor = await prisma.author.delete({
    where: {
      id: Number(idauthor),
    },
  });
  if (!deleteAuthor) {
    throw new NotFoundError("Autor não encontrado");
  }

  res.json(deleteAuthor);
};
