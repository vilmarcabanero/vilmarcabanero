import { Container, Link } from './index.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faFacebookF,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
	return (
		<Container>
			{links.map(items => {
				return (
					<Link href={items.href} target='_blank' rel='noreferrer'>
						<FontAwesomeIcon className='icon' icon={items.icon} />
					</Link>
				)
			})}
		</Container>
	)
}

const links = [
	{
		href: 'https://www.facebook.com/io.cabanero',
		icon: faFacebookF,
	},
	{
		href: 'https://www.linkedin.com/in/vilmar-caba%C3%B1ero-b189a9184/',
		icon: faLinkedin,
	},
	{
		href: 'https://github.com/vilmarcabanero',
		icon: faGithub,
	},
]

export default SocialLinks
