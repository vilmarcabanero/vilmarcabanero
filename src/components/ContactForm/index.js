import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import {
	Container,
	Form,
	Title,
	InputGroup,
	Input,
	Placeholder,
	TextArea,
	Button,
	Alert,
} from './index.style'
import 'bootstrap/dist/css/bootstrap.css'

export default function Contact() {
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
			<Row className='container'>
				<Col xl={6} lg={8} md={8} >
					<Form onSubmit={submit}>
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

						<Button type='submit'>Send</Button>

						<Alert>
							{alert
								? 'Thank you for getting in touch with me! Kindly check your email for my response.'
								: ''}
						</Alert>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}
