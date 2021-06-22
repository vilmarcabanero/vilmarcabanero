import { Container, Row, Col, Card } from 'react-bootstrap'
import { Styled, Link, Title } from './index.style'
import Main from 'containers/Main'
import 'bootstrap/dist/css/bootstrap.css'
import entropiya from 'assets/images/entropiya.JPG'
import niventa from 'assets/images/niventa.png'
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
									{/* <Card.Img
										variant='top'
										src={items.src}
										className='card-img'
									/> */}
									<Card.Body>
										<Card.Title className='card-title'>
											{items.title}
										</Card.Title>
										<Card.Text className='card-text'>
											{items.description}
										</Card.Text>
										<Row className='icon-row'>
											<Col className='d-flex justify-content-end align-items-center'>
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

											<Col className='d-flex justify-content-start align-items-center'>
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


const niventaWeb = 'https://niventa.vilmarcabanero.com'
const niventaGithub = 'https://github.com/vilmarcabanero/niventa-client'
const entropiyaWeb = 'https://www.entropiya.ph/'
const entropiyaGithub = 'https://github.com/vilmarcabanero/entropiya-client'

const niventaDescription = `Niventa is an e-commerce website written in React for the front end, and Node / Express for the back end.`
const entropiyaDescription = `Entropiya would be an educational website which provides online review for licensure exam takers. This is written in React and Node /  Express.  Currently under development.`

const cards = [
	// {
	// 	src: niventa,
	// 	title: 'Niventa',
	// 	description: niventaDescription,
	// 	hrefWeb: niventaWeb,
	// 	iconWeb: faGlobe,
	// 	hrefGitHub: niventaGithub,
	// 	iconGithub: faGithub,
	// },
	{
		src: entropiya,
		title: 'Entropiya',
		description: entropiyaDescription,
		hrefWeb: entropiyaWeb,
		iconWeb: faGlobe,
		hrefGitHub: entropiyaGithub,
		iconGithub: faGithub,
	},
	{
		// src: entropiya,
		title: 'Task',
		description: 'This is a simple but full stack task app, with user authentication. It uses the React/Node technology.',
		hrefWeb: 'https://task.vilmarcabanero.com',
		iconWeb: faGlobe,
		hrefGitHub: 'https://github.com/vilmarcabanero/task',
		iconGithub: faGithub,
	},
	{
		// src: entropiya,
		title: 'Fiona',
		description: 'This would be a full stack social media app. It will use the React/Node technology. Currently under development.',
		hrefWeb: 'https://fiona.vilmarcabanero.com',
		iconWeb: faGlobe,
		hrefGitHub: 'https://github.com/vilmarcabanero/fiona',
		iconGithub: faGithub,
	},
	{
		// src: entropiya,
		title: 'Gasto v1.0',
		description: 'This is an expense tracker app developed using React. Current version uses local storage.',
		hrefWeb: 'https://gasto-v1.vilmarcabanero.com',
		iconWeb: faGlobe,
		hrefGitHub: 'https://github.com/vilmarcabanero/gasto-v1',
		iconGithub: faGithub,
	},
	{
		// src: entropiya,
		title: 'Gasto v2.0',
		description: 'This would be a full stack expense tracker app that will use the React/Node technology.  Currently under development.',
		hrefWeb: 'https://gasto.vilmarcabanero.com',
		iconWeb: faGlobe,
		hrefGitHub: 'https://github.com/vilmarcabanero/gasto',
		iconGithub: faGithub,
	},
	{
		// src: entropiya,
		title: 'My Portfolio',
		description: 'This website was developed using React. As for styling, I used styled-components.',
		hrefWeb: 'https://vilmarcabanero.com',
		iconWeb: faGlobe,
		hrefGitHub: 'https://github.com/vilmarcabanero/vilmarcabanero',
		iconGithub: faGithub,
	},
	{
		// src: entropiya,
		title: 'Niventa API',
		description: 'This is an e-commerce api writen in Node. This features adding items to cart, updating the cart and clearing the cart, with full user authentication.',
		hrefWeb: 'https://niventa-api-2.herokuapp.com',
		iconWeb: faGlobe,
		hrefGitHub: 'https://github.com/vilmarcabanero/niventa-api-cap2',
		iconGithub: faGithub,
	},
]

export default Projects
