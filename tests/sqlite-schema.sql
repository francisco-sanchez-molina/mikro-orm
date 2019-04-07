PRAGMA foreign_keys=OFF;


DROP TABLE IF EXISTS "author3";

CREATE TABLE "author3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "created_at" TEXT DEFAULT NULL,
  "updated_at" TEXT DEFAULT NULL,
  "name" TEXT DEFAULT NULL,
  "email" TEXT UNIQUE DEFAULT NULL,
  "age" INTEGER DEFAULT NULL,
  "terms_accepted" INTEGER DEFAULT NULL,
  "identities" TEXT DEFAULT NULL,
  "born" TEXT DEFAULT NULL
);

ALTER TABLE "author3" ADD "favourite_book_id" INTEGER DEFAULT NULL REFERENCES "book3" ("id") ON DELETE SET NULL ON UPDATE CASCADE;



DROP TABLE IF EXISTS "book3";

CREATE TABLE "book3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "title" TEXT DEFAULT NULL,
  "foo" TEXT DEFAULT NULL
);

ALTER TABLE "book3" ADD "author_id" INTEGER DEFAULT NULL REFERENCES "author3" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "book3" ADD "publisher_id" INTEGER DEFAULT NULL REFERENCES "publisher3" ("id") ON DELETE SET NULL ON UPDATE CASCADE;



DROP TABLE IF EXISTS "book_tag3";

CREATE TABLE "book_tag3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "name" TEXT DEFAULT NULL
);



DROP TABLE IF EXISTS "publisher3";

CREATE TABLE "publisher3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "name" TEXT DEFAULT NULL,
  "type" TEXT DEFAULT NULL
);



DROP TABLE IF EXISTS "test3";

CREATE TABLE "test3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "name" TEXT DEFAULT NULL
);



DROP TABLE IF EXISTS "book3_to_book_tag3";

CREATE TABLE "book3_to_book_tag3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT
);

ALTER TABLE "book3_to_book_tag3" ADD "book3_id" INTEGER DEFAULT NULL REFERENCES "book3" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "book3_to_book_tag3" ADD "book_tag3_id" INTEGER DEFAULT NULL REFERENCES "book_tag3" ("id") ON DELETE CASCADE ON UPDATE CASCADE;



DROP TABLE IF EXISTS "publisher3_to_test3";

CREATE TABLE "publisher3_to_test3" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT
);

ALTER TABLE "publisher3_to_test3" ADD "publisher3_id" INTEGER DEFAULT NULL REFERENCES "publisher3" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "publisher3_to_test3" ADD "test3_id" INTEGER DEFAULT NULL REFERENCES "test3" ("id") ON DELETE CASCADE ON UPDATE CASCADE;



PRAGMA foreign_keys=ON;
