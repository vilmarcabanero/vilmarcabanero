import './App.css'
import {  Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Background from './containers/Background'
import Header from './containers/Header'

import HomePage from './pages/Home'

function App() {
	const location = useLocation()
	return (
		
		<div>
			<Background />
			<Header />

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/s' component={HomePage} />
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
