import {Col} from 'react-bootstrap'
import LeftText from './LeftText'
import React from 'react'
import loadable from '@loadable/component'

const Particles = loadable(() => import('react-tsparticles'))

function Left() {
	return (
		<Col md className='LeftSec'>
			<Particles
				className='particlejs'
				params={{
					particles: {
						number: {
							value: 50,
						},
						size: {
							value: 2,
						},
						links: {
							color: '#ffffff',
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: 'none',
							enable: true,
							outMode: 'bounce',
							random: false,
							speed: 6,
							straight: false,
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'grab',
							},
						},
					},
				}}
			/>
			<LeftText />
		</Col>
	)
}

export default Left
