import { motion } from 'framer-motion'
import Projects from '../components/Projects'

const ProjectPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
				<Projects />
		</motion.div>
	)
}

export default ProjectPage
