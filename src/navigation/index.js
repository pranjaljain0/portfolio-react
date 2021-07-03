import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import routes from './routes'
import useAckee from 'use-ackee'

export default function Routes() {

	useAckee('/', {
		server: 'https://stats.pranjaljain.me',
		domainId: 'e04eb40f-8f6d-4cca-8c46-7a0df821c53d'
	}, {
		detailed: true,
		ignoreLocalhost: true,
	})

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
