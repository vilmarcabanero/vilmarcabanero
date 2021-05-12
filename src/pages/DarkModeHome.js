import { motion } from 'framer-motion'
import { useState } from 'react'
import Banner from '../components/Banner'

const Home = () => {
	const [theme, setTheme] = useState('dark')
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Banner theme={theme} setTheme={setTheme} />
      <h1>Hello from dark mode home</h1>
		</motion.div>
	)
}

export default Home
