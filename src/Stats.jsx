import React from 'react';
import { Col, Progress, Row } from 'reactstrap';

function Stats({ stats }) {
  return (
    <Row>
      {stats.map((stat) => {
        return (
          <Col>
            {stat.stat.name}
            <Progress value={stat.base_stat} max={100}>
              {stat.base_stat}
            </Progress>
          </Col>
        );
      })}
    </Row>
  );
}

export default Stats;
