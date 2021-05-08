import {
	Container,
	Section,
	Name,
	Details,
	ButtonGroup,
	Button
} from './styles/banner'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import profile from '../../assets/images/profile-pic.jpg'

export default function Banner() {
	return (
		<Container >
			<Section className='text-center'>
					<Name>Hi. I'm Vilmar.</Name>
					<Details>
						I'm an engineer turned developer. I specialize in Full Stack
						Development using the MERN technology.
					</Details>
			</Section>
		</Container>
	
	)
}
