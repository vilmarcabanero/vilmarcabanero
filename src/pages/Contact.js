import { motion } from 'framer-motion'
import ContactForm from 'components/ContactForm'

const ContactPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<ContactForm />
		</motion.div>
	)
}

export default ContactPage
