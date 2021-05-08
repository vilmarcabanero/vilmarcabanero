import { Link } from 'react-router-dom'
import { StyledNavLinks } from './styles/navLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faUser,
	faFile,
	faFileCode,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

export default function NavLinks() {
	return (
		<StyledNavLinks>
			<Link to='/'>
				<FontAwesomeIcon className='icon' icon={faHome} />
				<span> Home </span>
			</Link>

			<Link to='/about'>
				<FontAwesomeIcon className='icon' icon={faUser} />
				<span> About </span>
			</Link>

			<Link to='/resume'>
				<FontAwesomeIcon className='icon' icon={faFile} />
				<span> Resume </span>
			</Link>

			<Link to='/projects'>
				<FontAwesomeIcon className='icon' icon={faFileCode} />
				<span> Projects </span>
			</Link>

			<Link to='/contact'>
				<FontAwesomeIcon className='icon' icon={faEnvelope} />
				<span> Contact </span>
			</Link>
		</StyledNavLinks>
	)
}
