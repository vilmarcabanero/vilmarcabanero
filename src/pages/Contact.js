import { motion } from 'framer-motion'
import Main from '../containers/Main'
import Banner from '../components/Banner'

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Main>
				<Banner />
			</Main>
		</motion.div>
	)
}

export default Contact
