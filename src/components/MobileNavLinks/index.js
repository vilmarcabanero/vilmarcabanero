import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from './index.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faUser,
	// faFile,
	faFileCode,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'

export default function NavLinks() {
	return (
		<Container>
			<Row>
				<Col>
					<Link to='/' exact activeClassName='active'>
						<FontAwesomeIcon className='icon' icon={faHome} />
						<span> Home </span>
					</Link>
				</Col>

				<Col>
					<Link to='/about' exact activeClassName='active'>
						<FontAwesomeIcon className='icon' icon={faUser} />
						<span> About </span>
					</Link>
				</Col>

				{/* <Col>
					<NavLink to='/resume' exact activeClassName='active' >
						<FontAwesomeIcon className='icon' icon={faFile} />
						<span> Resume </span>
					</NavLink>
				</Col> */}

				<Col>
					<Link to='/projects' exact activeClassName='active'>
						<FontAwesomeIcon className='icon' icon={faFileCode} />
						<span> Projects </span>
					</Link>
				</Col>

				<Col>
					<Link to='/contact' exact activeClassName='active'>
						<FontAwesomeIcon className='icon' icon={faEnvelope} />
						<span> Contact </span>
					</Link>
				</Col>
			</Row>
		</Container>
	)
}
