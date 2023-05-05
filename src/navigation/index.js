import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import React from 'react'
import routes from './routes'

export default function CustomRoutes() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				{routes.map((route, i) => (
					<Route key={i} {...route} />
				))}
			</Routes>
		</Router>
	)
}
