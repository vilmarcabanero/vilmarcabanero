import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	margin-left: 300px;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: all ease-in-out 0.5s;
	transition: all 1s;

	@media (max-width: 991px) {
		//xl 1199px, 991 lg
		margin-left: 0;
	}

	/* background-color: ${props => props.theme.pageBackground}; */
	transition: all 1s ease;

	h1 {
		color: ${props => props.theme.bannerForeground};	
	}
`
