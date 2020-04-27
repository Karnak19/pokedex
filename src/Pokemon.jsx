import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Stats from './Stats';
import Sprites from './Sprites';

function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { pokemon: name } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(data);
      setIsLoading(false);
    };
    setIsLoading(true);
    getPokemon();
  }, [name]);

  if (isLoading) {
    return (
      <Container className="mt-5">
        <Row>
          <Spinner />
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={{ size: 4, offset: 4 }}>
          <h1>{pokemon.name}</h1>
        </Col>
      </Row>
      <Sprites sprites={pokemon.sprites} />
      <Stats stats={pokemon.stats} />
    </Container>
  );
}
export default Pokemon;
