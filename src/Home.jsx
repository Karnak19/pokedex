import React from "react";
import { Container, Row } from "reactstrap";
import PokeList from "./PokeList";

function Home() {
  return (
    <Container>
      <PokeList />
    </Container>
  );
}

export default Home;
