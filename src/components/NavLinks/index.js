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
			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faHome} />
				<span> Home </span>
			</a>

			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faUser} />
				<span> About </span>
			</a>

			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faFile} />
				<span> Resume </span>
			</a>

			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faFileCode} />
				<span> Projects </span>
			</a>

			<a href='/'>
				<FontAwesomeIcon className='icon' icon={faEnvelope} />
				<span> Contact </span>
			</a>
		</StyledNavLinks>
	)
}
