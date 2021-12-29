import {Col} from 'react-bootstrap'
import LeftText from './LeftText'
import React from 'react'
// import loadable from '@loadable/component'

// const Particles = loadable(() => import('react-tsparticles'))

function Left() {
	return (
		<Col md className='LeftSec'>
			<LeftText />
		</Col>
	)
}

export default Left
