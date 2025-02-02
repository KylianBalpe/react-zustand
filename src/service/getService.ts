import axios from "axios";

export const getPokemon = async (offset: number, limit: number) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
  return response.data;
};
