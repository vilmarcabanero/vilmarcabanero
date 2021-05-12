import './App.css'
import { useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import styled, { ThemeProvider } from 'styled-components'
import { themes } from './helpers/theme'
import { useDarkMode } from './components/DarkMode/useDarkMode'
import { GlobalStyles } from './components/DarkMode/Globalstyle'
import { lightTheme, darkTheme } from './components/DarkMode/Themes'
import ScrollToTop from './helpers/ScrollToTop'
import Toggle from './components/DarkMode/Toggler'
import Background from './containers/Background'
import Header from './containers/Header'
import MobileHeader from './containers/MobileHeader'
import HomePage from './pages/Home'
import SkillsPage from './pages/Skills'
import ResumePage from './pages/Resume'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'
import DarkModeProjectsPage from './pages/DarkModeProjects'
import DarkModeHomePage from './pages/DarkModeHome'

const App = () => {
	const location = useLocation()
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<main>
			<ScrollToTop>
				<ThemeProvider theme={themeMode}>
					<Div>
						<Toggle theme={theme} toggleTheme={themeToggler} />
					</Div>

					<Background theme={theme} />
					<Header theme={theme} />
					<MobileHeader theme={theme} />

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
							<Route exact path='/projects' component={DarkModeProjectsPage} />
						</Switch>
					</AnimatePresence>
				</ThemeProvider>
			</ScrollToTop>
		</main>
	)
}

const Div = styled.div`
	position: relative;
	z-index: 9999;
`

export default App
