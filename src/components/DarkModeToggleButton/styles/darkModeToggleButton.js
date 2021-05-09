import styled from 'styled-components'

export const StyledDarkModeToggleButton = styled.button`
  position: fixed;
  top: 50px;
  right: 50px;
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

	&:hover {
		box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	}
	transition: all 0.5s ease;

  @media (max-width: 992px) {
    height: 30px;
    width: 30px;
    top: 30px;
    right: 30px;
  }
`
