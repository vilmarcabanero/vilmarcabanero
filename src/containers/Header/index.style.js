import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	width: 300px;
	left: 0;
	top: 0;
	bottom: 0;
	color: white;
	/* background-color: rgba(0, 0, 0, 0.7); */
	/* background-color: ${props => props.theme.headerBackground}; */
	background-color: ${({theme}) => theme.headerBackground};
	box-shadow: 1px 1px 2px ${({theme}) => theme.boxShadowColor};
	border-radius: 15px;

	transition: all ease-in-out 0.5s;
	transition: all 0.5s;
	/* padding: 5rem; */

	&:hover {
		box-shadow: 0px 0px 1px ${props => props.theme.boxShadowColor};
	}

	@media (max-width: 992px) {
		//xl 1199px, 992 lg
		left: -330px;
	}
`

export const Name = styled.div`
	text-align: center;
	font-size: 24px;
	font-family: 'DM Mono', monospace;
`
