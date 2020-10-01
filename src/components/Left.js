import React from "react";
import { Col } from "react-bootstrap";
import Particles from "react-particles-js";
import LeftText from "./LeftText";

function Left({ name }) {
  return (
    <Col md className="LeftSec">
      <Particles
        className="particlejs"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
          },
        }}
      />
      <LeftText name={name} />
    </Col>
  );
}

export default Left;
