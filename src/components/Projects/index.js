import { Row, Col } from 'react-bootstrap'
import {
	Container,
	ProjectContainer,
	Description,
	ProjectImage,
	Title,
	Title1,
	Link
	// Image
} from './styles/projects'
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
				<Row class='mt-3 mb-4'>
					<Col xl={6}>
						<ProjectContainer>
							<Row>
								<Title class='text-center pt-3'>Niventa</Title>
								<Description class='text-justify'>
									Niventa is an e-commerce website written in React.js for the
									front end, and Node.js/Express.js for the back end.
								</Description>
							</Row>
							<Row>
								<Col className='d-flex justify-content-end align-items-center'>
									<Link href='https://niventa.vilmarcabanero.com' target='_blank' rel='noreferrer'>
										<FontAwesomeIcon className='icon' icon={faGlobe} />
									</Link>
								</Col>

								<Col className='d-flex justify-content-start align-items-center '>
									<Link href='https://github.com/vilmarcabanero/niventa-server' target='_blank' rel='noreferrer' className='text-center'>
										<FontAwesomeIcon className='icon' icon={faGithub} />
									</Link>
								</Col>
							</Row>
						</ProjectContainer>
					</Col>
					<Col xl={6}>
						<ProjectContainer>
							<div class='text-center'>
								<img class='img-fluid' src={niventa} alt='Niventa' />
							</div>
						</ProjectContainer>
					</Col>
				</Row>
				<Row class='mb-4'>
					<Col xl={6}>
						<ProjectContainer>
							<Row >
								<Title class='text-center pt-3'>Entropiya</Title>
								<Description class='text-justify'>
									Entropiya envisions itself to be the premier online review
									center for licensure examinations.
								</Description>
							</Row>

							<Row >
								<Col className='d-flex justify-content-end align-items-center'>
									<Link href='https://www.entropiya.ph/' target='_blank' rel='noreferrer'>
										<FontAwesomeIcon className='icon' icon={faGlobe} />
									</Link>
								</Col>

								<Col className='d-flex justify-content-start align-items-center '>
									<Link href='https://github.com/vilmarcabanero/entropiya-client' target='_blank' rel='noreferrer'>
										<FontAwesomeIcon className='icon' icon={faGithub} />
									</Link>
								</Col>
							</Row>
						</ProjectContainer>
					</Col>
					<Col xl={6}>
						<ProjectContainer>
							<div class='text-center'>
								<img class='img-fluid' src={entropiya} alt='Entropiya' />
							</div>
						</ProjectContainer>
					</Col>
				</Row>
			</div>
		</Container>
	)
}
