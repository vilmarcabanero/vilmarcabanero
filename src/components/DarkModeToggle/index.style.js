
import styled from "styled-components"

export const Button = styled.button`
	position: fixed;
	top: 35px;
	right: 40px;
	cursor: pointer;
	height: 50px;
	width: 50px;

	border-radius: 50%;
	border: none; 
	z-index: 9999;
	background-color: ${props => props.theme.tertiaryColor};
	transition: all 1s ease;
	color: white;
	box-shadow: 2px 2px 3px ${props => props.theme.boxShadowColor};
	&:focus {
		outline: none;
	}
	transition: all 0.5s ease;

	.toggle {
		width: 40px;
		height: 40px;
	}

	@media (max-width: 992px) {
		//xl 1200px, 992 lg
		top: 10px;
		right: 15px;
		height: 40px;
		width: 40px;

		.toggle {
			width: 30px;
			height: 30px;
		}
	}
`