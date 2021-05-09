import './App.css'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './helpers/theme'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Background from './containers/Background'
import Header from './containers/Header'
import MobileHeader from './containers/MobileHeader'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ResumePage from './pages/Resume'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'

const App = () => {
	const [theme, setTheme] = useState('dark')
	const location = useLocation()

	return (
		<main>
			<ThemeProvider theme={themes[theme]}>
				<Background theme={theme} setTheme={setTheme} />
				<Header theme={theme} setTheme={setTheme} />
				<MobileHeader theme={theme} setTheme={setTheme} />
			</ThemeProvider>

			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route
						theme={theme}
						setTheme={setTheme}
						exact
						path='/'
						component={HomePage}
					/>
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/resume' component={ResumePage} />
					<Route exact path='/projects' component={ProjectsPage} />
					<Route exact path='/contact' component={ContactPage} />
				</Switch>
			</AnimatePresence>
		</main>
	)
}

export default App
