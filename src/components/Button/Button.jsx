import PropTypes from "prop-types";

export const Button = ({ label, changeMessage }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired,
};
