import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import homecards from "../data/homecards.json";
import HomeCard from "./HomeCard"
import Left from "./Left"

export default function Home({ name }) {
  // const [HomeCards, setHomeCards] = useState(

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
                  <p>
                    I discovered my passion for computer science when I was a
                    sophomore in High School; it was then, when I started
                    learning more for my passion. I am pursuing my bachelor's
                    degree at Avantika University, major in Computer science and
                    engineering. A year later I was introduced to Embedded
                    systems, where I discovered the love for electrics and
                    electronics and also for embedded systems. Then I got a
                    scholarship opportunity to do a research work on Smart grid
                    and started the never-ending journey of becoming a developer
                    along with sharpening my eye for innovations.
                  </p>
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
