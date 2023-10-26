import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/api";
import { ProductList } from "../components/ProductList/ProductList";
import { SearchBox } from "../components/SearchBox/SearchBox";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get("name") ?? "";
  const products = getProducts();

  const updateQuerystring = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  const filteredProducts = products.filter((el) =>
    el.name.toLowerCase().includes(nameParam.toLowerCase())
  );

  return (
    <main>
      <SearchBox onChange={updateQuerystring} value={nameParam} />
      <ProductList products={filteredProducts} />
    </main>
  );
}
