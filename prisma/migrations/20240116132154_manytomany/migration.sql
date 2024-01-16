-- CreateTable
CREATE TABLE "Books" (
    "id" TEXT NOT NULL,
    "bookName" TEXT,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BooksandAuthors" (
    "authorid" INTEGER NOT NULL,
    "booksid" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BooksandAuthors_pkey" PRIMARY KEY ("authorid","booksid")
);

-- AddForeignKey
ALTER TABLE "BooksandAuthors" ADD CONSTRAINT "BooksandAuthors_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksandAuthors" ADD CONSTRAINT "BooksandAuthors_booksid_fkey" FOREIGN KEY ("booksid") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
