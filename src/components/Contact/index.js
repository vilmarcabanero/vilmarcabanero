import { Row, Col, FormGroup } from 'react-bootstrap'
import {
	Container,
	Form,
	Title,
	InputGroup,
	Input,
	Placeholder,
	TextArea,
	Button,
} from './styles/contact'
import 'bootstrap/dist/css/bootstrap.css'
export default function Contact() {
	return (
		<Container>
			<Row className='container d-flex justify-content-center align-items-center'>
				<Form className='col-12'>
					<Title>Contact </Title>

					<InputGroup>
						<Input type='text' required />
						<Placeholder className='placeholder'> Full Name</Placeholder>
					</InputGroup>

					<InputGroup>
						<Input type='text' required />
						<Placeholder className='placeholder'> Email Address</Placeholder>
					</InputGroup>

					<InputGroup>
						<TextArea required />
						<Placeholder className='placeholder'>Message</Placeholder>
					</InputGroup>

					<Button type='submit' className='button'>
						Send
					</Button>
				</Form>
			</Row>
		</Container>
	)
}
