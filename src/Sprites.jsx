import React from "react";
import { Col, Row } from "reactstrap";

function Sprites({ sprites }) {
  return (
    <Row>
      {Object.entries(sprites)
        .filter(([k]) => !k.includes("male"))
        .map(([_, value], i) => {
          return (
            <Col key={i}>
              <img src={value} alt="" />
            </Col>
          );
        })}
    </Row>
  );
}

export default Sprites;
