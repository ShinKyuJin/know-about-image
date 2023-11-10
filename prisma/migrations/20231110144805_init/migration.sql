-- CreateTable
CREATE TABLE "user" (
    "id" VARCHAR(40) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(60) NOT NULL,
    "cellphone" VARCHAR(20) NOT NULL,
    "army_number" VARCHAR(15) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
