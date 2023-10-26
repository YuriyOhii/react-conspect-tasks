import PropTypes from "prop-types";
import { Card } from "./ProductCard.styled";
import { Link, useLocation } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const location = useLocation();
  return (
    <Link to={`/products/${item.id}`} state={{from: location}}>
      <Card>
        <img src="https://via.placeholder.com/200x100" alt="Grey backdrop" />
        <h3>{item.name}</h3>
      </Card>
    </Link>
  );
};

ProductCard.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
