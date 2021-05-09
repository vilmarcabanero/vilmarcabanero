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

export default function NavLinks() {
	return (
		<Container>
			<NavLink to='/' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faHome} />
				<span> Home </span>
			</NavLink>

			<NavLink to='/skills' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faCode} />
				<span> Skills </span>
			</NavLink>

			{/* <NavLink to='/resume' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faFile} />
				<span> Resume </span>
			</NavLink> */}

			<NavLink to='/projects' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faFileCode} />
				<span> Projects </span>
			</NavLink>

			<NavLink to='/contact' exact activeClassName='active'>
				<FontAwesomeIcon className='icon' icon={faEnvelope} />
				<span> Contact </span>
			</NavLink>
		</Container>
	)
}
