-- CreateTable
CREATE TABLE "IterestDelay" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "payDay" TIMESTAMP(3) NOT NULL,
    "paymentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "IterestDelay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IterestDelay_id_key" ON "IterestDelay"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IterestDelay_paymentId_key" ON "IterestDelay"("paymentId");

-- AddForeignKey
ALTER TABLE "IterestDelay" ADD CONSTRAINT "IterestDelay_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
