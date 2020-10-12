import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import homecards from "../data/homecards.json";

function Project(props) {
  var project_id = props.match.params.project_id;

  const projectsData = homecards.data.find((data) => data.title === "Projects");
  const projectData = projectsData?.value
    ? projectsData.value.find((project) => project.id === project_id)
    : {};

  return (
    <>
      <Navigation />
      <Container className="innerContainer" fluid>
        <Row style={{ marginTop: 30 }}>
          <Col>
            {Object.entries(projectData).map(([key, value], index) => {
              return (
                <React.Fragment key={`project-info-element-${index}`}>
                  <h4>{key}</h4>
                  {value}
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Project;
