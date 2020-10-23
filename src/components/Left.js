import React from "react";
import { Col } from "react-bootstrap";
import LeftText from "./LeftText";
import loadable from "@loadable/component";

const Particles = loadable(() => import("react-particles-js"));

function Left() {
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
      <LeftText />
    </Col>
  );
}

export default Left;
