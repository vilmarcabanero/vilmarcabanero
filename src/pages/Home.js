import { motion } from 'framer-motion'
import Banner from '../components/Banner'

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Banner />
		</motion.div>
	)
}

export default Home
