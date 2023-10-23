import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  return (
    <div>
      <img src="https://via.placeholder.com/960x240" alt="Grey backdrop" />
      <h3>
        {" "}
        Product {product.name} {product.id}
      </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sunt
        excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate a, sed
        reprehenderit? Deleniti optio quasi, amet natus reiciendis atque fuga
        dolore? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Impedit suscipit quisquam incidunt commodi fugiat aliquam praesentium
        ipsum quos unde voluptatum?
      </p>
    </div>
  );
};
