import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Navigation from "../components/Navigation"

function Project(props) {

    var project_id=props.match.params.project_id
    
    return (
        <div>
            <Navigation/>
                <Container className="innerContainer" fluid> 
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>{project_id}</Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Project