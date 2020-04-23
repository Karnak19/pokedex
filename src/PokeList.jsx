import React from "react";
import { Row } from "reactstrap";
import usePokemon from "./usePokemon";
import PokemonInfo from "./PokemonInfo";

function PokeList() {
  const { pokemons } = usePokemon(100);
  return (
    <Row>
      {pokemons.map((pokemon) => {
        return <PokemonInfo name={pokemon.name} />;
      })}
    </Row>
  );
}
export default PokeList;
