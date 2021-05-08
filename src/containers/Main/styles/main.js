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
		color: ${props => props.theme.titleColor};
		transition: all 1s ease;
	}
`

export const Toggle = styled.button`
	position: fixed;
	top: 35px;
	right: 40px;
	cursor: pointer;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	border: none;
	background-color: ${props => props.theme.tertiaryColor};
	color: white;
	box-shadow: 4px 4px 8px ${props => props.theme.boxShadowColor};
	&:focus {
		outline: none;
	}
	transition: all 1s ease;
`
