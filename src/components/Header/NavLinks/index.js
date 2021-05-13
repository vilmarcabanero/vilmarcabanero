import { NavLink } from 'react-router-dom'
import { Container } from './index.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	// faUser,
	faCode,
	// faFile,
	faFileCode,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const NavLinks = () => {
	return (
		<Container>
			{navLinks.map(items => (
				<NavLink to={items.to} exact activeClassName='active'>
					<FontAwesomeIcon className='icon' icon={items.icon} />
					<span> {items.title} </span>
				</NavLink>
			))}
		</Container>
	)
}

const navLinks = [
	{
		to: '/',
		icon: faHome,
		title: 'Home',
	},
	{
		to: '/skills',
		icon: faCode,
		title: 'Skills',
	},
	{
		to: '/projects',
		icon: faFileCode,
		title: 'Projects',
	},
	{
		to: '/contact',
		icon: faEnvelope,
		title: 'Contact',
	},
]

export default NavLinks
