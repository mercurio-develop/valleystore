import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "@/components/shared/product/product-price";


const ProductCard = ({product}: {
  product: { slug: string, name: string, images: string[], brand: string, rating: number,stock: number, price: string }
}) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 justify-items-center">
        <Link href={`/product/${product.slug}`}>
          <Image src={product.images[0]} alt={product.name} width={200} height={200}/>
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-sx">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} starts</p>
          {product.stock > 0 ? <ProductPrice value={Number(product.price)}/> : <p className="text-destructive">Out of Stock</p>}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;