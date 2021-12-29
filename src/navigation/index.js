import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import React from 'react'
import routes from './routes'

export default function Routes() {
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
