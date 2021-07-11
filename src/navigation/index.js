import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import React from 'react'
import routes from './routes'
import useAckee from 'use-ackee'

export default function Routes() {
	useAckee(
		'/',
		{
			server: process.env.REACT_APP_ACKEE_DOMAIN_SERVER,
			domainId: process.env.REACT_APP_ACKEE_DOMAIN_ID,
		},
		{
			detailed: true,
			ignoreLocalhost: true,
		}
	)

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
