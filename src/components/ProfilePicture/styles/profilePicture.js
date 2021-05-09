import styled from 'styled-components'

export const StyledProfile = styled.img`
	width: 150px;
	height: 150px;
	margin: 15px auto;
	margin-top: 3rem;
	display: block;
	border-radius: 50%;
	box-shadow: 5px 5px 10px ${props => props.theme.boxShadowColor};
	transition: 1s;

	&:hover {
		transition: 0.5s;
		box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	}
`
