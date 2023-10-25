import { HiOutlineSearch } from "react-icons/hi";
import PropTypes from "prop-types";

export const SearchBox = ({ onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <div>
      <HiOutlineSearch />
      <input type="text" value={value} name="name" onChange={handleChange} />
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
