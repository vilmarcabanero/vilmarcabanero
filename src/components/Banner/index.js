import * as S from './index.style'
import Main from 'containers/Main'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
const facebook = 'https://www.facebook.com/vilmarcabanero'
const linkedin = 'https://www.linkedin.com/in/vilmar-caba%C3%B1ero-b189a9184/'
const github = 'https://github.com/vilmarcabanero'

const Index = () => {
	return (
		<Container>
			<Main>
				<S.Section className='text-center'>
					<Row>
						<S.Name>Hi, I'm Vilmar.</S.Name>
						<S.Details>I'm a Mechanical and Software Engineer</S.Details>
					</Row>
					<Row>
						{links.map(items => (
							<S.Link href={items.href} target='_blank' rel='noreferrer'>
								<FontAwesomeIcon className='icon' icon={items.icon} />
							</S.Link>
						))}
					</Row>
				</S.Section>
			</Main>
		</Container>
	)
}

const links = [
	{
		href: facebook,
		icon: faFacebookF,
	},
	{
		href: linkedin,
		icon: faLinkedin,
	},
	{
		href: github,
		icon: faGithub,
	},
]
export default Index
