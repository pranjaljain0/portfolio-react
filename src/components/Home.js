import { Col, Container, Row } from "react-bootstrap";

import React from "react";
// import Navigation from "./Navigation";
import homecards from "../data/homecards.json";
import loadable from "@loadable/component";

const HomeAbout = loadable(() => import("./HomeAbout"));
const Navigation = loadable(() => import("./Navigation"));
const HomeCard = loadable(() => import("./HomeCard"));
const Left = loadable(() => import("./Left"));

export default function Home({ name }) {
  const HomeCards = homecards.data;

  return (
    <div>
      <Navigation />
      <Container className="innerContainer" fluid>
        <Row className="mainRow">
          <Left />
          <Col lg className="cols">
            <Row className="RightSec">
              <Row className="RightUpperSec">
                <Col className="RightUpperSecContent">
                  <h2>About Me</h2>
                  <HomeAbout />
                </Col>
              </Row>
              <Row className="RightLowerSec">
                {HomeCards.map((HomeCards, index) => {
                  return <HomeCard HomeCards={HomeCards} key={index} />;
                })}
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
