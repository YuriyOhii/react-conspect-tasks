import PropTypes from "prop-types";
import { ProductCard } from "../ProductCard";
import { List } from "./ProductList.styled";
export const ProductList = ({ products }) => {
  console.log(products);
  return (
    <List>
      {products.map((el) => (
        <li key={el.id}>
          <ProductCard item={el} />
        </li>
      ))}
    </List>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
