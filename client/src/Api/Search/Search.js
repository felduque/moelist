import axios from "axios";

export const search = async (searchTerm) => {
  const response = await axios.get(
    `http://localhost:3000/search/${searchTerm}`
  );
  return response;
};
