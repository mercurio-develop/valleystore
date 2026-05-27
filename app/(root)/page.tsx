import ProductList from '@/components/shared/product/product-list';
import {getLatestProducts} from "@/lib/actions/product.actions";
import {Product} from "@/types";

const Home = async () => {
  const products: Product[] = await getLatestProducts();
  return (
    <>
      <ProductList data={products} title="Featured Products" limit={4}/>
    </>)
};

export default Home;
