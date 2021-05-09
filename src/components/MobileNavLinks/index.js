import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from './index.style'
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
		<Container>
			<Row>
				<Col>
					<NavLink to='/' exact activeClassName='active' >
						<FontAwesomeIcon className='icon' icon={faHome} />
						<span> Home </span>
					</NavLink>
				</Col>

				<Col>
					<NavLink to='/about' exact activeClassName='active' >
						<FontAwesomeIcon className='icon' icon={faUser} />
						<span> About </span>
					</NavLink>
				</Col>

				<Col>
					<NavLink to='/resume' exact activeClassName='active' >
						<FontAwesomeIcon className='icon' icon={faFile} />
						<span> Resume </span>
					</NavLink>
				</Col>

				<Col>
					<NavLink to='/projects' exact activeClassName='active' >
						<FontAwesomeIcon className='icon' icon={faFileCode} />
						<span> Projects </span>
					</NavLink>
				</Col>

				<Col>
					<NavLink to='/contact' exact activeClassName='active' >
						<FontAwesomeIcon className='icon' icon={faEnvelope} />
						<span> Contact </span>
					</NavLink>
				</Col>
			</Row>
		</Container>
	)
}
