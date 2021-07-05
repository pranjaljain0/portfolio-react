import * as Sentry from "@sentry/react";

import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Integrations } from "@sentry/tracing";
import routes from './routes'
import useAckee from 'use-ackee'

export default function Routes() {
	Sentry.init({
		dsn: "https://aa99498b2e0149d4a2ac0dbf5d8ac712@o912654.ingest.sentry.io/5849881",
		integrations: [new Integrations.BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0,
	});

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
