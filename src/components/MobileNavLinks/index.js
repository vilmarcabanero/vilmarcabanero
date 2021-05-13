import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from './index.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	// faUser,
	// faFile,
	faFileCode,
	faEnvelope,
	faCode,
} from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap'

const MobileNavLinks = () => {
	return (
		<Container>
			<Row>
				{links.map(items => (
					<Col>
						<Link to={items.to} exact activeClassName='active'>
							<FontAwesomeIcon className='icon' icon={items.icon} />
							<span> {items.title} </span>
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	)
}

const links = [
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

export default MobileNavLinks
