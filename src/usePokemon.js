import { useState, useEffect } from 'react';
import axios from 'axios';

export default function (limit) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );
      setPokemons(data.results);
    };
    getPokemons();
  }, [limit]);

  return { pokemons };
}
