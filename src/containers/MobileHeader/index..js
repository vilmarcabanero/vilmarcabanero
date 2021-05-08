import { StyledMobileHeader } from './styles/mobileHeader'

import { Button, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

export default function MobileHeader() {
	return (
		<StyledMobileHeader>
			<Row className='row mt-5'>
				<Col>
					<center className='bg-dark text-white'>
						{' '}
						<Button variant='primary'>Row 1 column</Button> 1
					</center>
				</Col>
				<Col>
					<center className='bg-dark text-white'>Row 1 column 2</center>
				</Col>
			</Row>
		</StyledMobileHeader>
	)
}
