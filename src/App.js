import './App.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from './components/DarkMode/useDarkMode'
import { GlobalStyles } from './components/DarkMode/Globalstyle'
import { lightTheme, darkTheme } from './components/DarkMode/Themes'
import ScrollToTop from './helpers/ScrollToTop'
import DarkModeToggle from './components/DarkModeToggle'
import Particles from './components/Particles'
// import Background from './containers/Background'
import Header from './containers/Header'
import MobileHeader from './containers/MobileHeader'
import HomePage from './pages/Home'
import SkillsPage from './pages/Skills'
import ResumePage from './pages/Resume'
import ProjectsPage from './pages/Projects'
import ContactPage from './pages/Contact'
const App = () => {
	const location = useLocation()
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<main>
			<ScrollToTop>
				<ThemeProvider theme={themeMode}>
					<GlobalStyles />
					<DarkModeToggle theme={theme} toggleTheme={themeToggler} />

					{/* <Background theme={theme} /> */}
					<Particles theme={theme}/>

					<Header theme={theme} />
					<MobileHeader theme={theme} />

					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.pathname}>
							= <Route exact path='/' component={HomePage} />
							<Route exact path='/skills' component={SkillsPage} />
							<Route exact path='/resume' component={ResumePage} />
							<Route exact path='/projects' component={ProjectsPage} />
							<Route exact path='/contact' component={ContactPage} />
						</Switch>
					</AnimatePresence>
				</ThemeProvider>
			</ScrollToTop>
		</main>
	)
}

export default App
