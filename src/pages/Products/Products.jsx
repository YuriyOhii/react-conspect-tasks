import {} from "./Products.styled";
import { getProducts } from "../../services/api";
import { ProductList } from "../../components/ProductList/ProductList";

export const Products = (props) => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
