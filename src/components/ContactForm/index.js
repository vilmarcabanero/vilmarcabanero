import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
	Styled,
	Form,
	Title,
	InputGroup,
	Input,
	Placeholder,
	TextArea,
	Button,
	Alert,
} from './index.style'
import Main from '../../containers/Main'
import 'bootstrap/dist/css/bootstrap.css'

const ContactForm = () => {
	const [alert, setAlert] = useState(false)

	const submit = e => {
		e.preventDefault()
		setAlert(true)

		setTimeout(() => {
			setAlert(false)
		}, 4000)
	}

	return (
		<Container>
			<Main>
				<Styled>
					<Row className='container-row'>
						<Col xl={6} lg={8} md={8} className='container-col'>
							<Form onSubmit={submit}>
								<Title>Contact me </Title>

								<InputGroup>
									<Input type='text' required />
									<Placeholder className='placeholder'> Full Name</Placeholder>
								</InputGroup>

								<InputGroup>
									<Input type='text' required />
									<Placeholder className='placeholder'>
										{' '}
										Email Address
									</Placeholder>
								</InputGroup>

								<InputGroup>
									<TextArea required />
									<Placeholder className='placeholder'>Message</Placeholder>
								</InputGroup>

								<Button type='submit'>Send</Button>

								<Alert>
									{alert ? 'Thank you for getting in touch with me!' : ''}
								</Alert>
							</Form>
						</Col>
					</Row>
				</Styled>
			</Main>
		</Container>
	)
}

export default ContactForm
