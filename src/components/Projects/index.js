import { Row, Col } from 'react-bootstrap'
import {
	Container,
	ProjectContainer,
	Description,
	ProjectImage,
	Title,
	Title1,
	// Image
} from './styles/projects'
import 'bootstrap/dist/css/bootstrap.css'
import entropiya from '../../assets/images/entropiya.JPG'
import niventa from '../../assets/images/niventa.png'

export default function Projects() {
	return (
		<Container>
			<div class='container'>
				<Title1 class='text-center'>Projects</Title1>
				<div class='row mt-3 mb-4'>
					<div class='col-12 col-xl-6'>
						<ProjectContainer>
							<Title class='text-center pt-3'>Niventa</Title>
							<Description class='text-justify'>
								Niventa is an e-commerce website written in React.js for the
								front end, and Node.js/Express.js for the back end.
							</Description>
						</ProjectContainer>
					</div>
					<div class='col-12 col-xl-6'>
						<ProjectContainer>
							<div class='text-center'>
								<img class='img-fluid' src={niventa} alt='Niventa' />
							</div>
						</ProjectContainer>
					</div>
				</div>
				<div class='row mb-4'>
					<div class='col-12 col-xl-6'>
						<ProjectContainer>
							<Title class='text-center pt-3'>Entropiya</Title>
							<Description class='text-justify'>
								Entropiya envisions itself to be the premier online review
								center for licensure examinations.
							</Description>
						</ProjectContainer>
					</div>
					<div class='col-12 col-xl-6'>
						<ProjectContainer>
							<div class='text-center'>
								<img class='img-fluid' src={entropiya} alt='Entropiya' />
							</div>
						</ProjectContainer>
					</div>
				</div>
			</div>
		</Container>
	)
}
