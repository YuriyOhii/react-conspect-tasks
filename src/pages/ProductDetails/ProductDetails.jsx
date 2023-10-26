import { useLocation, useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BackLink } from "./ProductDetails.styled";
export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLink = location.state?.from ?? "/products";
  return (
    <div>
      <BackLink to={backLink}>
        <HiArrowNarrowLeft />
        Back to products
      </BackLink>
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
}
