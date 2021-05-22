import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'index.css'
import App from 'AppCopy'

ReactDOM.render(
	<Router>
		<Route path='/' component={App} />
	</Router>,
	document.getElementById('root')
)
