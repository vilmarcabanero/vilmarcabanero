import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
	MyContainer,
	Form,
	Title,
	InputGroup,
	Input,
	Placeholder,
	TextArea,
	Button,
	Alert,
	SocialLinksContainer,
	Name,
} from './index.style'
import 'bootstrap/dist/css/bootstrap.css'
import SocialLinks from '../SocialLinks'

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
			<MyContainer>
				<Row className='container-row'>
					<Col xl={6} lg={8} md={8}>
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
								{alert
									? 'Thank you for getting in touch with me! Kindly check your email for my response.'
									: ''}
							</Alert>
						</Form>
{/* 
						<SocialLinksContainer>
							<Name>Vilmar Cabañero</Name>
							<SocialLinks />
						</SocialLinksContainer> */}
					</Col>
				</Row>
			</MyContainer>
		</Container>
	)
}
