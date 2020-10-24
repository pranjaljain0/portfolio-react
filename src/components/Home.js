import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import homecards from "../data/homecards.json";
import HomeCard from "./HomeCard";
import Left from "./Left";
import loadable from "@loadable/component";

const HomeAbout = loadable(() => import("./HomeAbout"));

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
