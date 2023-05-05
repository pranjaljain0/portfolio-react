import React from 'react'
import {Col} from 'react-bootstrap'

function ProjectCard({projectObj}) {
	return (
		<Col className='ColStyle' xs={6} md={4}>
			<div className='innerCol'>
				<a href={projectObj.projectRoute} className='projectLink'>
					<div
						style={{
							background:
								`linear-gradient(120deg,` +
								projectObj.initialColor +
								`,` +
								projectObj.finalColor +
								`)`,
						}}
						className='innerColImg'
					>
						<p className='projectTitle'>{projectObj.title}</p>
					</div>
				</a>
			</div>
		</Col>
	)
}

export default ProjectCard
