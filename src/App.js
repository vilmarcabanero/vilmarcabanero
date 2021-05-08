import './App.css'
import {  Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Background from './containers/Background'
import Header from './containers/Header'
import MobileHeader from './containers/MobileHeader'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ResumePage from './pages/Resume'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

function App() {
	const location = useLocation()
	return (
		
		<div>
			{/* <Background />
			<Header />
			<MobileHeader/> */}

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/resume' component={ResumePage} />
					<Route exact path='/projects' component={ProjectsPage} />
					<Route exact path='/contact' component={ContactPage} />
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
