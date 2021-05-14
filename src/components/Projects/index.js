import { Container, Row, Col, Card } from 'react-bootstrap'
import { Styled, Link, Title } from './index.style'
import Main from '../../containers/Main'
import 'bootstrap/dist/css/bootstrap.css'
import entropiya from '../../assets/images/entropiya.JPG'
import niventa from '../../assets/images/niventa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
	return (
		<Container>
			<Main>
				<Styled>
					<Title class='text-center'> Projects </Title>
					<Row>
						{cards.map(items => (
							<Col md={6} className='card-col'>
								<Card className='card'>
									<Card.Img
										variant='top'
										src={items.src}
										className='card-img'
									/>
									<Card.Body>
										<Card.Title className='card-title'>
											{items.title}{' '}
										</Card.Title>
										<Card.Text className='card-text'>
											{items.description}
										</Card.Text>
										<Row className='icon-row'>
											<Col className={forLink}>
												<Link
													href={items.hrefWeb}
													target='_blank'
													rel='noreferrer'
												>
													<FontAwesomeIcon
														className='icon'
														icon={items.iconWeb}
													/>
												</Link>
											</Col>

											<Col className={forLink}>
												<Link
													href={items.hrefGitHub}
													target='_blank'
													rel='noreferrer'
													className='text-center'
												>
													<FontAwesomeIcon
														className='icon'
														icon={items.iconGithub}
													/>
												</Link>
											</Col>
										</Row>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Styled>
			</Main>
		</Container>
	)
}

const forLink = 'd-flex justify-content-start align-items-center'

const niventaWeb = 'https://niventa.vilmarcabanero.com'
const niventaGithub = 'https://github.com/vilmarcabanero/niventa-client'
const entropiyaWeb = 'https://www.entropiya.ph/'
const entropiyaGithub = 'https://github.com/vilmarcabanero/entropiya-client'

const niventaDescription = `Niventa is an e-commerce website written in React for the front end, and Node / Express for the back end.`
const entropiyaDescription = `Entropiya is an educational website which provides online review for licensure exam takers. This is written in React and Node /  Express.  `

const cards = [
	{
		src: niventa,
		title: 'Niventa',
		description: niventaDescription,
		hrefWeb: niventaWeb,
		iconWeb: faGlobe,
		hrefGitHub: niventaGithub,
		iconGithub: faGithub,
	},
	{
		src: entropiya,
		title: 'Entropiya',
		description: entropiyaDescription,
		hrefWeb: entropiyaWeb,
		iconWeb: faGlobe,
		hrefGitHub: entropiyaGithub,
		iconGithub: faGithub,
	},
]

export default Projects
