import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { StyledMobileNavLinks } from './styles/mobileNavLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faUser,
	faFile,
	faFileCode,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'

export default function NavLinks() {
	return (
		<StyledMobileNavLinks>
			<Row>
				<Col>
					<Link to='/'>
						<FontAwesomeIcon className='icon' icon={faHome} />
						<span> Home </span>
					</Link>
				</Col>

				<Col>
					<Link to='/about'>
						<FontAwesomeIcon className='icon' icon={faUser} />
						<span> About </span>
					</Link>
				</Col>

				<Col>
					<Link to='/resume'>
						<FontAwesomeIcon className='icon' icon={faFile} />
						<span> Resume </span>
					</Link>
				</Col>

				<Col>
					<Link to='/projects'>
						<FontAwesomeIcon className='icon' icon={faFileCode} />
						<span> Projects </span>
					</Link>
				</Col>

				<Col>
					<Link to='/contact'>
						<FontAwesomeIcon className='icon' icon={faEnvelope} />
						<span> Contact </span>
					</Link>
				</Col>
			</Row>
		</StyledMobileNavLinks>
	)
}
