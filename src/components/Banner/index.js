import { Section, Name, Details, Link } from './index.style'
import Main from '../../containers/Main'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faFacebookF,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const facebook = 'https://www.facebook.com/io.cabanero'
const linkedin = 'https://www.linkedin.com/in/vilmar-caba%C3%B1ero-b189a9184/'
const github = 'https://github.com/vilmarcabanero'

export default function Banner() {
	return (
		<Container>
			<Main>
				<Section className='text-center'>
					<Row>
						<Name>Hi. I'm Vilmar.</Name>
						<Details>I'm an engineer turned developer.</Details>
					</Row>
					<Row>
						<Link href={facebook} target='_blank' rel='noreferrer'>
							<FontAwesomeIcon className='icon' icon={faFacebookF} />
						</Link>
						<Link href={linkedin} target='_blank' rel='noreferrer'>
							<FontAwesomeIcon className='icon' icon={faLinkedin} />
						</Link>
						<Link href={github} target='_blank' rel='noreferrer'>
							<FontAwesomeIcon className='icon' icon={faGithub} />
						</Link>
					</Row>
				</Section>
			</Main>
		</Container>
	)
}
