import * as ackeeTracker from 'ackee-tracker'

import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import routes from './routes'

export default function Routes() {

	useEffect(() => {
		const instance = ackeeTracker.create({
			server: 'http://stats.pranjaljain.me/',
			domainId: 'e04eb40f-8f6d-4cca-8c46-7a0df821c53d'
		}, {
			ignoreLocalhost: true,
			// doNotTrack: false
		})
		const attributes = ackeeTracker.attributes()
		instance.record(attributes)
	}, [])

	return (
		<Router>
			<Switch>
				{routes.map((route, i) => (
					<Route key={i} {...route} />
				))}
			</Switch>
		</Router>
	)
}
