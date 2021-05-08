import styled from 'styled-components'

export const StyledMain = styled.div`
	position: relative;
	margin-left: 300px;
	height: 100vh;

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;
	h1 {
		margin: 0;
	}

	@media (max-width: 991px) {
		//xl 1199px, 991 lg
		margin-left: 0;
	}
`
