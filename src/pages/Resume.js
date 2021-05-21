import { motion } from 'framer-motion'
import { useState } from 'react'
import Main from 'containers/Main'

const Resume = () => {
	const [theme, setTheme] = useState('dark')
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
				<Main theme={theme} setTheme={setTheme}>
					This is the resume page.
				</Main>
		</motion.div>
	)
}

export default Resume
