import PropTypes from "prop-types";
import {} from "./Home.styled";

export const Home = (props) => {
  return (
    <main>
      <h1>Welcome</h1>
      <img src="https://via.placeholder.com/960x240" alt="Grey backdrop" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p>
    </main>
  );
};

Home.propTypes = {};
