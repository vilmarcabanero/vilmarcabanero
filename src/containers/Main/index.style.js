import styled from 'styled-components'

export const MainContainer = styled.div`
	position: relative;
	margin-left: 300px;
	margin-top: 3rem;
	margin-bottom: 3rem;


	@media (max-width: 992px) {
		margin-left: 0;
		margin-top: 2rem;
	} 

	@media (max-width: 768px) {
		margin-bottom: 4rem;
		margin-top: 2rem;
		padding: 1rem;
	}

	@media (max-width: 576px) {
		margin-top: 1rem;
	}
`