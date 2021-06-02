import './index.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import App from './App'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import {hydrate} from 'react-dom'

hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register()
