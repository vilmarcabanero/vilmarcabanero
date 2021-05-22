import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as S from './index.style'
import Main from 'containers/Main'
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
				<S.Styled>
					<Row className='container-row'>
						<Col xl={6} lg={8} md={8} className='container-col'>
							<S.Form onSubmit={submit}>
								<S.Title>Contact me </S.Title>

								{inputs.map(items => (
									<S.InputGroup>
										<items.component type={items.type} required />
										<S.Placeholder className='placeholder'>
											{items.placeholder}
										</S.Placeholder>
									</S.InputGroup>
								))}

								<S.Button type='submit'>Send</S.Button>

								<S.Alert className={alert ? 'alert' : ''}>
									{alert ? 'Thank you for getting in touch with me!' : ''}
								</S.Alert>
							</S.Form>
						</Col>
					</Row>
				</S.Styled>
			</Main>
		</Container>
	)
}

const inputs = [
	{
		component: S.Input,
		type: 'text',
		placeholder: 'Full Name',
	},
	{
		component: S.Input,
		type: 'text',
		placeholder: 'Email Address',
	},
	{
		component: S.TextArea,
		type: '',
		placeholder: 'Message',
	},
]

export default ContactForm
