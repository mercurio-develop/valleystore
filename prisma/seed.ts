import { prisma } from "@/lib/prisma";

import sampleData from "@/db/sample-data"


async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: sampleData.products,
  })
  await prisma.$disconnect()
  console.log('Seeding complete')
}

main().catch((e) => console.error(e))