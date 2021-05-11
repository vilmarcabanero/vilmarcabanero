import { Container, Row, Col, Card } from 'react-bootstrap'
import { Styled, Link, Title } from './index.style'
import Main from '../../containers/Main'
import 'bootstrap/dist/css/bootstrap.css'
import entropiya from '../../assets/images/entropiya.JPG'
import niventa from '../../assets/images/niventa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
	return (
		<Container>
			<Main>
				<Styled>
					<Title class='text-center'> Projects </Title>
					<Row>
						<Col md={6} className='card-col'>
							<Card className='card'>
								<Card.Img variant='top' src={niventa} className='card-img' />
								<Card.Body>
									<Card.Title className='card-title'>Niventa </Card.Title>
									<Card.Text className='card-text'>
										{niventaDescription}
									</Card.Text>
									<Row className='icon-row'>
										<Col className='d-flex justify-content-end align-items-center '>
											<Link href={niventaWeb} target='_blank' rel='noreferrer'>
												<FontAwesomeIcon className='icon' icon={faGlobe} />
											</Link>
										</Col>

										<Col className='d-flex justify-content-start align-items-center '>
											<Link
												href={niventaGithub}
												target='_blank'
												rel='noreferrer'
												className='text-center'
											>
												<FontAwesomeIcon className='icon' icon={faGithub} />
											</Link>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>

						<Col md={6} className='card-col'>
							<Card className='card'>
								<Card.Img variant='top' src={entropiya} className='card-img' />
								<Card.Body>
									<Card.Title className='card-title'>Entropiya </Card.Title>
									<Card.Text className='card-text'>
										{entropiyaDescription}
									</Card.Text>
									<Row className='icon-row'>
										<Col className='d-flex justify-content-end align-items-center '>
											<Link
												href={entropiyaWeb}
												target='_blank'
												rel='noreferrer'
											>
												<FontAwesomeIcon className='icon' icon={faGlobe} />
											</Link>
										</Col>

										<Col className='d-flex justify-content-start align-items-center '>
											<Link
												href={entropiyaGithub}
												target='_blank'
												rel='noreferrer'
												className='text-center'
											>
												<FontAwesomeIcon className='icon' icon={faGithub} />
											</Link>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Styled>
			</Main>
		</Container>
	)
}

const niventaWeb = 'https://niventa.vilmarcabanero.com'
const niventaGithub = 'https://github.com/vilmarcabanero/niventa-client'
const entropiyaWeb = 'https://www.entropiya.ph/'
const entropiyaGithub = 'https://github.com/vilmarcabanero/entropiya-client'

const niventaDescription = `Niventa is an e-commerce website written in React for the front end, and Node / Express for the back end.`
const entropiyaDescription = `Entropiya is an educational website which provides online review for licensure exam takers. This is written in React and Node /  Express.  `
