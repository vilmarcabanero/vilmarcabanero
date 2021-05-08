import { motion } from 'framer-motion'
import { useState } from 'react'
import Main from '../containers/Main'
import { ThemeProvider } from 'styled-components'
import { themes } from '../helpers/theme'

const Dark = () => {
	const [theme, setTheme] = useState('dark')
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<ThemeProvider theme={themes[theme]}>
				<Main theme={theme} setTheme={setTheme} />
			</ThemeProvider>
		</motion.div>
	)
}

export default Dark
