-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "birthday" VARCHAR(255) NOT NULL,
    "createDateTime" TIMESTAMP(3) NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL,
    "lastChangedDateTime" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "date" VARCHAR(255) NOT NULL,
    "hour" VARCHAR(255) NOT NULL,
    "responsable" VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "createDateTime" TIMESTAMP(3) NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL,
    "lastChangedDateTime" TIMESTAMP(3) NOT NULL,
    "lastChangedBy" VARCHAR(255) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_id_key" ON "tasks"("id");
