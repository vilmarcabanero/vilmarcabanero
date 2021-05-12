import './App.css'
import { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import { themes } from './helpers/theme'
import ScrollToTop from './helpers/ScrollToTop'
import Background from './containers/Background'
import Header from './containers/Header'
import MobileHeader from './containers/MobileHeader'
import HomePage from './pages/Home'
import SkillsPage from './pages/Skills'
import ResumePage from './pages/Resume'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'
import DarkModePage from './pages/DarkMode'
import DarkModeHomePage from './pages/DarkModeHome'

const App = () => {
	const [theme, setTheme] = useState('dark')
	const location = useLocation()

	return (
		<main>
			<ScrollToTop>
				<ThemeProvider theme={themes[theme]}>
					<Background theme={theme} setTheme={setTheme} />
					<Header theme={theme} setTheme={setTheme} />
					<MobileHeader theme={theme} setTheme={setTheme} />

					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							{/* <Route
								theme={theme}
								setTheme={setTheme}
								exact
								path='/'
								component={HomePage}
							/>
							<Route exact path='/skills' component={SkillsPage} />
							<Route exact path='/resume' component={ResumePage} />
							<Route exact path='/projects' component={ProjectsPage} />
							<Route exact path='/contact' component={ContactPage} /> */}
							<Route exact path='/' component={DarkModeHomePage} />
							<Route exact path='/darkmode' component={DarkModePage} />
						</Switch>
					</AnimatePresence>
				</ThemeProvider>
			</ScrollToTop>
		</main>
	)
}

export default App
