import { Row, Col } from 'react-bootstrap'
import {
	Container,
	ProjectContainer,
	Description,
	Title,
	Title1,
	Link,
	TextContainer,
	Image
} from './index.style'
import 'bootstrap/dist/css/bootstrap.css'
import entropiya from '../../assets/images/entropiya.JPG'
import niventa from '../../assets/images/niventa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
	return (
		<Container>
			<div class='container'>
				<Title1 class='text-center'>Projects</Title1>
				<Row className='project-container'>
					<Col xl={6} xs={{ order: 2 }}>
						<ProjectContainer>
							<TextContainer>
								<Title class='text-center pt-3'>Niventa</Title>
								<Description class='text-justify'>
									Niventa is an e-commerce website written in React.js for the
									front end, and Node.js/Express.js for the back end.
								</Description>
							</TextContainer>

							<Row>
								<Col className='d-flex justify-content-end align-items-center'>
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
						</ProjectContainer>
					</Col>
					<Col xl={6}>
						<ProjectContainer>
							<div class='text-center'>
								<Image src={niventa} alt='Niventa' />
							</div>
						</ProjectContainer>
					</Col>
				</Row>
				<Row className='project-container'>
					<Col xl={6}>
						<ProjectContainer>
							<TextContainer>
								<Title class='text-center pt-3'>Entropiya</Title>
								<Description class='text-justify'>
									Entropiya envisions itself to be the premier online review
									center for licensure examinations.
								</Description>
							</TextContainer>

							<Row>
								<Col className='d-flex justify-content-end align-items-center'>
									<Link href={entropiyaWeb} target='_blank' rel='noreferrer'>
										<FontAwesomeIcon className='icon' icon={faGlobe} />
									</Link>
								</Col>

								<Col className='d-flex justify-content-start align-items-center '>
									<Link href={entropiyaGithub} target='_blank' rel='noreferrer'>
										<FontAwesomeIcon className='icon' icon={faGithub} />
									</Link>
								</Col>
							</Row>
						</ProjectContainer>
					</Col>
					<Col xl={6}>
						<ProjectContainer>
							<div class='text-center'>
								<Image src={entropiya} alt='Entropiya' />
							</div>
						</ProjectContainer>
					</Col>
				</Row>
			</div>
		</Container>
	)
}

const niventaWeb = 'https://niventa.vilmarcabanero.com'
const niventaGithub = 'https://github.com/vilmarcabanero/niventa-client'
const entropiyaWeb = 'https://www.entropiya.ph/'
const entropiyaGithub = 'https://github.com/vilmarcabanero/entropiya-client'
