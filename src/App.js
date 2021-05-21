import Routes from 'Routes'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'components/DarkMode/useDarkMode'
import { GlobalStyles } from 'components/DarkMode/Globalstyle'
import { lightTheme, darkTheme } from 'components/DarkMode/Themes'
import ScrollToTop from 'helpers/ScrollToTop'
import DarkModeToggle from 'components/DarkModeToggle'
import Particles from 'components/Particles'
import Header from 'containers/Header'
import MobileHeader from 'containers/MobileHeader'

const App = () => {
	const [theme, themeToggler, mountedComponent] = useDarkMode()

	const themeMode = theme === 'light' ? lightTheme : darkTheme

	if (!mountedComponent) return <div />

	return (
		<ScrollToTop>
			<ThemeProvider theme={themeMode}>
				<GlobalStyles />
				<DarkModeToggle theme={theme} toggleTheme={themeToggler} />
				<Particles theme={theme} />
				<Header theme={theme} />
				<MobileHeader theme={theme} />

				<Routes />
			</ThemeProvider>
		</ScrollToTop>
	)
}

export default App
