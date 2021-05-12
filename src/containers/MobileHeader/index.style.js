import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	color: white;
	z-index: 9999;
	background-color: ${props => props.theme.headerBackground};
	box-shadow: 2px -2px 4px ${props => props.theme.boxShadowColor};
	border-radius: 7.5px;

	

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;
	/* padding: 5rem; */

	@media (min-width: 992px) {
		//xl 1199px, 992px lg
		display: none;
	}

	h1 {
		text-align: center;
		font-size: 24px;
	}
`
