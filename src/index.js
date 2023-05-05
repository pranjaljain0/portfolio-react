import './index.css'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

serviceWorkerRegistration.register()
