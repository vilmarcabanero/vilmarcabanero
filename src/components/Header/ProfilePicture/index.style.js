import styled from 'styled-components'

export const StyledProfile = styled.img`
	width: 150px;
	height: 150px;
	margin: 15px auto;
	margin-top: 3rem;
	display: block;
	border-radius: 50%;
	box-shadow: 2px 2px 4px ${props => props.theme.boxShadowColor};
	transition: all 0.5s ease;

	&:hover {
		transition: all 0.5s ease;
		box-shadow: 1px 1px 2px ${props => props.theme.boxShadowColor};
	}
`
