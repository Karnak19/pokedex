import React from 'react';
import { Col, Row } from 'reactstrap';

function Sprites({ sprites }) {
  return (
    <Row>
      {Object.entries(sprites)
        .filter(([k]) => !k.includes('male'))
        .map(([key, value]) => {
          return (
            <Col key={`${key}`}>
              <img src={value} alt="" />
              <p>{key}</p>
            </Col>
          );
        })}
    </Row>
  );
}

export default Sprites;
