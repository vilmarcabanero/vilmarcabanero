import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import HomePage from './pages/Home'
import SkillsPage from './pages/Skills'
import ResumePage from './pages/Resume'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

const Routes = () => {
	const location = useLocation()
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				= <Route exact path='/' component={HomePage} />
				<Route exact path='/skills' component={SkillsPage} />
				<Route exact path='/resume' component={ResumePage} />
				<Route exact path='/projects' component={ProjectsPage} />
				<Route exact path='/contact' component={ContactPage} />
			</Switch>
		</AnimatePresence>
	)
}

export default Routes
