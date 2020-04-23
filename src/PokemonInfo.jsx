import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

function PokemonInfo({ name }) {
  return (
    <Col xs="2" className="my-2">
      <Link to={`/${name}`}>{name}</Link>
    </Col>
  );
}

export default PokemonInfo;
