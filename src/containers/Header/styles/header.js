import styled from 'styled-components'

export const StyledHeader = styled.div`
	position: fixed;
	width: 300px;
	left: 7.5px;
	top: 0;
	bottom: 0;
	color: white;
	/* background-color: rgba(0, 0, 0, 0.7); */
	background-color: ${props => props.theme.headerBackground};
	box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};
	border-radius: 15px;

	transition: all ease-in-out 1s;
	transition: all 1s;
	/* padding: 5rem; */

	@media (max-width: 992px) {
		//xl 1199px, 992 lg
		left: -330px;
	}

	h1 {
		text-align: center;
		font-size: 24px;
	}
`
