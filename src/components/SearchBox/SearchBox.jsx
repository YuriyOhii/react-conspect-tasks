import { HiOutlineSearch } from "react-icons/hi";
import PropTypes from "prop-types";
import { Box, Input } from './SearchBox.styled'

export const SearchBox = ({ onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <Box>
      
      <span><HiOutlineSearch /></span>
      <Input type="text" value={value} name="name" onChange={handleChange} />
    </Box>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
