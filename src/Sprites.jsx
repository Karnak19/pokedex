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
            </Col>
          );
        })}
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </Row>
  );
}

export default Sprites;
