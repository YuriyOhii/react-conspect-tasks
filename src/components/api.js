import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
const fetchQuery = async (query) => {
  const responce = await axios.get(`search?query=${query}`);
  return responce.data.hits;
};

export default { fetchQuery };
