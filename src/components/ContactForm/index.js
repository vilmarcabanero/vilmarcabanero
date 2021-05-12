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

								{inputs.map(items => {
									return (
										<InputGroup>
											<items.component type={items.type} required />
											<Placeholder className='placeholder'>
												{items.placeholder}
											</Placeholder>
										</InputGroup>
									)
								})}

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

const inputs = [
	{
		component: Input,
		type: 'text',
		placeholder: 'Full Name',
	},
	{
		component: Input,
		type: 'text',
		placeholder: 'Email Address',
	},
	{
		component: TextArea,
		type: '',
		placeholder: 'Email Address',
	},
]

export default ContactForm
