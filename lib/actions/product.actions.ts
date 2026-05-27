'use server'

import {prisma} from "@/lib/prisma";
import {convertToPlainObject} from "@/lib/utils";
import {LATEST_PRODUCTS_LIMIT} from "@/lib/constants";
import {Product} from "@/types";

// Get latest products
export async function getLatestProducts() {
  const data:Product[] = await prisma.product.findMany({
    orderBy: {createdAt: 'desc'},
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertToPlainObject(data)
}

// Get product by slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: {slug},
  });
  return convertToPlainObject(data)
}