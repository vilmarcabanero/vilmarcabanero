import { Row, Col } from 'react-bootstrap'
import {
	Container, Styled
} from './styles/contact'
import 'bootstrap/dist/css/bootstrap.css'
export default function Contact() {
	return (
		<Container>
			<div class='container'>

      <form>
					<Styled>
						<h1>Contact</h1>
				
						<div className='flex'>
							<label className='custom-input'>
								<input type='text' className='email' placeholder='' required />
								<span className='placeholder'>Full Name</span>
							</label>
						</div>

						<div className='flex'>
							<label className='custom-input'>
								<input type='email' className='email' placeholder='' required />
								<span className='placeholder'>Email address</span>
							</label>
						</div>

						<label className='custom-input'>
							<textarea className='email' placeholder='' rows='3' required />
							<span className='placeholder'>Message</span>
						</label>

						<button type='submit' className='button'>
							Send
						</button>
					</Styled>
				</form>
	

			</div>
		</Container>
	)
}
