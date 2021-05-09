import { Container, Section, Name, Details, Link } from './styles/banner'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faFacebookF,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export default function Banner() {
	return (
		<Container>
			<Section className='text-center'>
				<Row>
					<Name>Hi. I'm Vilmar.</Name>
					<Details>I'm an engineer turned developer.</Details>
				</Row>
				<Row>
					<Link
						href='https://www.facebook.com/io.cabanero'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon className='icon' icon={faFacebookF} />
					</Link>
					<Link
						href='https://www.linkedin.com/in/vilmar-caba%C3%B1ero-b189a9184/'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon className='icon' icon={faLinkedin} />
					</Link>
					<Link
						href='https://github.com/vilmarcabanero'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon className='icon' icon={faGithub} />
					</Link>
				</Row>
			</Section>
		</Container>
	)
}
