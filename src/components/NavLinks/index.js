import { Link, NavLink } from 'react-router-dom'
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
			<NavLink to='/' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faHome} />
				<span> Home </span>
			</NavLink>

			<NavLink to='/about' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faUser} />
				<span> About </span>
			</NavLink>

			<NavLink to='/resume' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faFile} />
				<span> Resume </span>
			</NavLink>

			<NavLink to='/projects' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faFileCode} />
				<span> Projects </span>
			</NavLink>

			<NavLink to='/contact' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faEnvelope} />
				<span> Contact </span>
			</NavLink>
		</StyledNavLinks>
	)
}
