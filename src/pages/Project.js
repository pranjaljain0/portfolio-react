import {Col, Container, Row} from 'react-bootstrap'

import Navigation from '../components/Navigation'
import React from 'react'
import homecards from '../data/homecards.json'

function Project(props) {
	var project_id = props.match.params.project_id

	const projectsData = homecards.data.find((data) => data.title === 'Projects')
	const projectData = projectsData.value
		? projectsData.value.find((project) => project.id === project_id)
		: {}

	return (
		<React.Fragment>
			<Navigation />
			<Container className='innerContainer' fluid>
				<Row style={{marginTop: 30}}>
					<Col>
						{Object.entries(projectData).map(([key, value], index) => {
							return (
								<React.Fragment key={`project-info-element-${index}`}>
									<h4>{key}</h4>
									{value}
								</React.Fragment>
							)
						})}
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}

export default Project
