import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import Left from "./Left";
import HomeCard from "./HomeCard";

export default function Home() {
  // const [HomeCards, setHomeCards] = useState(
  let HomeCards = [
    {
      title: "Projects",
      value: [
        {
          title: "Integrated Autonomous guided wheelchair",
          projectRoute: "/project/1",
          badgeTitle: "Integerated project",
          initialColor: "#56CCF2",
          finalColor: "#2F80ED",
        },
        {
          title: "Multi terrain vehicle",
          projectRoute: "#",
          badgeTitle: "Integerated project",
          initialColor: "#373B44",
          finalColor: "#4286f4",
        },
        {
          title: "KOSK",
          projectRoute: "#",
          badgeTitle: "Mobile",
          initialColor: "#f12711",
          finalColor: "#f5af19",
        },
        {
          title: "KOSK",
          projectRoute: "#",
          badgeTitle: "Web",
          initialColor: "#007991",
          finalColor: "#78ffd6",
        },
        {
          title: "Edudroid",
          projectRoute: "#",
          badgeTitle: "Desktop",
          initialColor: "#11998e",
          finalColor: "#38ef7d",
        },
        {
          title: "Smart Grid",
          projectRoute: "#",
          badgeTitle: "Internet of things",
          initialColor: "#e1eec3",
          finalColor: "#f05053",
        },
      ],
      route: "/projects",
      initialColor: "#56CCF2",
      finalColor: "#2F80ED",
      icon: "GiThorHammer",
    },
    {
      title: "Coding",
      value: [
        {
          title: "Python",
          level: "Advance",
        },
        {
          title: "HTML",
          level: "Advance",
        },
        {
          title: "PHP",
          level: "Advance",
        },
        {
          title: "JAVA",
          level: "Advance",
        },
        {
          title: "C++",
          level: "Advance",
        },
        {
          title: "C",
          level: "Advance",
        },
        {
          title: "Android",
          level: "Intermediate",
        },
        {
          title: "JS",
          level: "Intermediate",
        },
        {
          title: "MongoDB",
          level: "Intermediate",
        },
        {
          title: "ReactJS",
          level: "Beginner",
        },
      ],
      route: "/languages",
      initialColor: "#373B44",
      finalColor: "#4286f4",
      icon: "DiJavascript1",
    },
    {
      title: "Hobbies & Interest",
      value: [
        {
          title: "Solving puzzles",
        },
        {
          title: "Computing",
        },
        {
          title: "Going to the gym",
        },
        {
          title: "Travelling",
        },
        {
          title: "Networking",
        },
        {
          title: "Playing guitar",
        },
      ],
      route: "#",
      initialColor: "#f12711",
      finalColor: "#f5af19",
      icon: "FaGuitar",
    },
    {
      title: "Education",
      value: [
        {
          title: "Avantika University",
          duration: "2017-2021",
          location_city: "Ujjain",
          location_state: "Madhya Pradesh",
          location_country: "IN",
          description: "Bachelor of Technology",
          sec_details: "Specialization : Computer Science engineering",
          color: "#fef54b",
          text: "#1d1d1d",
        },
        {
          title: "The Sanskaar Valley School",
          duration: "2012 - 2016",
          location_city: "Bhopal",
          location_state: "Madhya Pradesh",
          location_country: "IN",
          description: "High school",
          sec_details: "ISC- 66%; ICSE- 87%",
          color: "#ffe54a",
          text: "#1d1d1d",
        },
        {
          title: "The Scindia School",
          duration: "2008 - 2011",
          location_city: "Gwalior",
          location_state: "Madhya Pradesh",
          location_country: "IN",
          description: "High school",
          sec_details: "",
          color: "#ffd448",
          text: "#1d1d1d",
        },
        {
          title: "St. Joseph's Co-ed School ",
          duration: "2003 - 2007",
          location_city: "Bhopal",
          location_state: "Madhya Pradesh",
          location_country: "IN",
          description: "Middle school",
          sec_details: "",
          color: "#ffc446",
          text: "#1d1d1d",
        },
      ],
      route: "#",
      initialColor: "#007991",
      finalColor: "#78ffd6",
      icon: "GiBookshelf",
    },
    {
      title: "Contact",
      value: [
        {
          title: "instagram",
          link: "",
        },
        {
          title: "linkedin",
          link: "",
        },
        {
          title: "github",
          link: "",
        },
        {
          title: "instagram",
          link: "",
        },
      ],
      route: "#",
      initialColor: "#11998e",
      finalColor: "#38ef7d",
      icon: "TiSocialAtCircular",
    },
    {
      title: "Work Experience",
      value: [
        {
          title: "HUDE Labs",
          description: "Website Development",
          duration: "3 Months",
          location: "Bhopal, Madhya Pradesh 462024, IN",
        },
        {
          title: "Emote Electric",
          description:
            "Website Development, Android and iOS App Development, Hosting Solutions, SEO and Hardware Interfacing",
          duration: "3 Months",
          location: "Coimbatore, Tamil Nadu 641032, IN",
        },
      ],
      route: "#",
      initialColor: "#e1eec3",
      finalColor: "#f05053",
      icon: "GoRepo",
    },
  ];
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
