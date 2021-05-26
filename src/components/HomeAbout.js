import React from 'react'
import Home_data from '../data/home_data.json'

function HomeAbout() {
	return (
		<div>
			<p>{Home_data.data.about}</p>
		</div>
	)
}

export default HomeAbout
